# Deployment Guide - Deploy Any Project with Dokploy

A comprehensive guide to deploy any application (Next.js, React, Node.js, etc.) to a production server using Dokploy with automatic SSL and continuous deployment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Prepare Your Application](#step-1-prepare-your-application)
- [Step 2: Server Setup](#step-2-server-setup)
- [Step 3: Install Dokploy](#step-3-install-dokploy)
- [Step 4: Push Code to GitHub](#step-4-push-code-to-github)
- [Step 5: Configure Dokploy](#step-5-configure-dokploy)
- [Step 6: Setup SSH Authentication](#step-6-setup-ssh-authentication)
- [Step 7: Configure Build Settings](#step-7-configure-build-settings)
- [Step 8: Domain and SSL Configuration](#step-8-domain-and-ssl-configuration)
- [Step 9: Deploy](#step-9-deploy)
- [Troubleshooting](#troubleshooting)
- [Post-Deployment](#post-deployment)

---

## Prerequisites

### Required Items

1. **Server Access**
   - VPS or dedicated server (minimum 2GB RAM, 2 CPU cores recommended)
   - Root or sudo access
   - Ubuntu 20.04+ or Debian-based Linux distribution
   - Server IP address

2. **Domain Name**
   - Domain purchased from registrar (e.g., GoDaddy, Namecheap, Cloudflare)
   - Access to DNS settings

3. **GitHub Account**
   - Personal or organization account
   - Personal Access Token (if using private repositories)

4. **Local Development Environment**
   - Git installed
   - Node.js (for JavaScript projects)
   - Code editor

---

## Step 1: Prepare Your Application

### For Next.js Applications

1. **Update `next.config.js`**

Add standalone output mode for Docker deployment:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Required for Docker deployment
  eslint: {
    ignoreDuringBuilds: true,  // Optional: skip ESLint during builds
  },
  // ... your other configurations
}

module.exports = nextConfig
```

2. **Create Dockerfile**

Create a `Dockerfile` in your project root:

```dockerfile
# Use appropriate Node version
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy application code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 appuser

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Change ownership
RUN chown -R appuser:nodejs /app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start application
CMD ["node", "server.js"]
```

3. **Create `.dockerignore`**

```
# Dependencies
node_modules
npm-debug.log*

# Next.js
.next
out
build

# Environment files
.env*.local
.env

# Git
.git
.gitignore

# IDE
.vscode
.idea

# Misc
*.log
.DS_Store
```

### For Other Frameworks

#### React/Vue (Static Sites)

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Node.js/Express API

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

4. **Create `docker-compose.yml` (Optional)**

For local testing:

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
```

---

## Step 2: Server Setup

### 1. Connect to Your Server

```bash
ssh root@YOUR_SERVER_IP
```

### 2. Update System

```bash
apt update && apt upgrade -y
```

### 3. Install Required Dependencies

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Start Docker service
systemctl start docker
systemctl enable docker

# Verify installation
docker --version
docker-compose --version
```

### 4. Configure Firewall

```bash
# Allow SSH
ufw allow 22/tcp

# Allow HTTP/HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Allow Dokploy (if needed)
ufw allow 3000/tcp

# Enable firewall
ufw enable
```

---

## Step 3: Install Dokploy

### Installation Methods

#### Method 1: Official Installer (Recommended)

```bash
curl -sSL https://dokploy.com/install.sh | sh
```

#### Method 2: Docker Compose

```bash
# Create directory
mkdir -p /opt/dokploy
cd /opt/dokploy

# Download docker-compose file
curl -O https://raw.githubusercontent.com/Dokploy/dokploy/main/docker-compose.yml

# Start Dokploy
docker-compose up -d
```

### Access Dokploy

1. Open browser: `http://YOUR_SERVER_IP:3000`
2. Complete initial setup:
   - Create admin account
   - Set secure password
   - Configure server settings

### Configure Traefik (Reverse Proxy)

Dokploy includes Traefik for automatic SSL and routing. It's configured automatically during installation.

---

## Step 4: Push Code to GitHub

### 1. Initialize Git Repository (if not already done)

```bash
cd /path/to/your/project
git init
```

### 2. Create `.gitignore`

```
node_modules/
.next/
.env*.local
.env
dist/
build/
*.log
.DS_Store
```

### 3. Commit Your Code

```bash
git add .
git commit -m "Initial commit"
```

### 4. Create GitHub Repository

#### Option A: Using GitHub CLI

```bash
# Install GitHub CLI
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# Authenticate
gh auth login

# Create repository (private)
gh repo create your-project-name --private --source=. --push
```

#### Option B: Using GitHub Website

1. Go to https://github.com/new
2. Enter repository name
3. Choose "Private" or "Public"
4. Click "Create repository"
5. Push code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/your-project-name.git
git branch -M master
git push -u origin master
```

---

## Step 5: Configure Dokploy

### 1. Create New Project

1. Log into Dokploy dashboard: `http://YOUR_SERVER_IP:3000`
2. Click **"Create Project"**
3. Enter project details:
   - **Name**: Your Project Name
   - **Description**: Brief description
4. Click **"Create"**

### 2. Create Environment

1. Inside your project, click **"Create Environment"**
2. Enter environment name: `production`
3. Click **"Create"**

### 3. Create Application Service

1. Click **"Create Service"**
2. Select **"Application"**
3. Enter service details:
   - **Name**: Your App Name
   - **Description**: Brief description
4. Click **"Create"**

---

## Step 6: Setup SSH Authentication

### For Private Repositories

#### 1. Generate SSH Key in Dokploy

1. Go to **Settings** → **SSH Keys**
2. Click **"Add SSH Key"**
3. Click **"Generate ED25519 SSH Key"**
4. Enter details:
   - **Name**: GitHub Deploy Key
   - **Description**: SSH key for private repository access
5. Click **"Create"**
6. **Download or copy the public key**

#### 2. Add Deploy Key to GitHub

##### Using GitHub CLI:

```bash
# On your local machine or server where you have gh configured
echo "ssh-ed25519 AAAAC3Nza..." | gh repo deploy-key add /dev/stdin \
  --repo YOUR_USERNAME/your-project-name \
  --title "Dokploy Deploy Key"
```

##### Using GitHub Website:

1. Go to your repository on GitHub
2. Click **Settings** → **Deploy keys**
3. Click **"Add deploy key"**
4. Enter:
   - **Title**: Dokploy Deploy Key
   - **Key**: Paste the public key
5. Check **"Allow write access"** (if needed)
6. Click **"Add key"**

---

## Step 7: Configure Build Settings

### 1. Configure Git Provider

1. In your Dokploy service, go to **"General"** tab
2. Scroll to **"Provider"** section
3. Select **"Git"** tab
4. Configure:

   **For Private Repositories:**
   - **Repository URL**: `git@github.com:YOUR_USERNAME/your-project-name.git`
   - **SSH Key**: Select the SSH key you created
   - **Branch**: `master` or `main`
   - **Build Path**: `/` (root directory)

   **For Public Repositories:**
   - **Repository URL**: `https://github.com/YOUR_USERNAME/your-project-name.git`
   - **Branch**: `master` or `main`
   - **Build Path**: `/`

5. Click **"Save"**

### 2. Configure Build Type

1. Scroll to **"Build Type"** section
2. Select **"Dockerfile"**
3. Configure:
   - **Docker File**: `Dockerfile` (path relative to build path)
   - **Docker Context Path**: `.` (leave empty for default)
   - **Docker Build Stage**: (leave empty to build final stage)
4. Click **"Save"**

### Alternative Build Types

#### Nixpacks (Auto-detect)
- Automatically detects and builds Node.js, Python, Go, etc.
- No Dockerfile needed
- Good for simple applications

#### Buildpacks
- Heroku or Paketo buildpacks
- No Dockerfile needed
- Good for standard frameworks

#### Static
- For static HTML/JS sites
- Serves files directly via nginx

---

## Step 8: Domain and SSL Configuration

### 1. Configure DNS Records

In your domain registrar (GoDaddy, Namecheap, etc.):

#### For Root Domain (example.com):

Add an **A Record**:
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: YOUR_SERVER_IP
- **TTL**: 3600 (or Auto)

#### For Subdomain (app.example.com):

Add an **A Record**:
- **Type**: A
- **Name**: app
- **Value**: YOUR_SERVER_IP
- **TTL**: 3600 (or Auto)

#### For www Subdomain:

Add a **CNAME Record**:
- **Type**: CNAME
- **Name**: www
- **Value**: example.com
- **TTL**: 3600 (or Auto)

**Wait 5-60 minutes for DNS propagation**

### 2. Configure Domain in Dokploy

1. In your service, go to **"Domains"** tab
2. Click **"Add Domain"**
3. Enter domain details:
   - **Domain**: `your-domain.com` or `subdomain.your-domain.com`
   - **Path**: `/` (default)
   - **Port**: `3000` (or your app's port)
4. **Enable SSL/TLS**:
   - Toggle **"Certificate"** to ON
   - Select **"Generate Certificate"**
   - Dokploy will automatically request Let's Encrypt SSL
5. Click **"Create"**

### SSL Certificate Generation

- Traefik automatically requests and manages Let's Encrypt certificates
- Certificates auto-renew before expiration
- HTTPS is enforced automatically

---

## Step 9: Deploy

### 1. Initial Deployment

1. Go to **"General"** tab
2. Verify all configurations:
   - ✅ Git provider configured
   - ✅ Build type selected
   - ✅ Domain configured with SSL
3. Click **"Deploy"** button
4. Click **"Confirm"** in the dialog

### 2. Monitor Deployment

1. Go to **"Deployments"** tab
2. Click **"View"** on the running deployment
3. Monitor logs in real-time:
   - Repository cloning
   - Dependencies installation
   - Build process
   - Docker image creation
   - Container startup

### Typical Deployment Timeline

```
📦 Cloning repository...          (10-30s)
📚 Installing dependencies...     (30-120s)
🔨 Building application...        (30-180s)
🐳 Creating Docker image...       (30-60s)
🚀 Starting container...          (5-10s)
✅ Deployment complete!
```

### 3. Verify Deployment

1. Check deployment status: Should show **"done"**
2. Test website: `https://your-domain.com`
3. Verify SSL: Browser should show secure padlock icon

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Build Fails - ESLint Errors

**Error**: ESLint errors during build

**Solution**:
```javascript
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
```

#### 2. Repository Clone Fails - Authentication Error

**Error**: "could not read Username for 'https://github.com'"

**Solution**:
- For private repos, use SSH URL: `git@github.com:username/repo.git`
- Ensure SSH key is properly configured in both Dokploy and GitHub
- Verify deploy key has read access

#### 3. Port Already in Use

**Error**: Port 3000 is already in use

**Solution**:
- Dokploy uses port 3000
- Use different port for your app in Dockerfile
- Or, let Dokploy's Traefik handle routing (recommended)

#### 4. Domain Not Accessible

**Possible Issues**:

1. **DNS not propagated**
   - Wait 5-60 minutes
   - Check DNS: `nslookup your-domain.com`

2. **Firewall blocking ports**
   ```bash
   ufw allow 80/tcp
   ufw allow 443/tcp
   ```

3. **Domain not added to Dokploy**
   - Verify domain configuration in Domains tab
   - Ensure SSL is enabled

#### 5. SSL Certificate Error

**Error**: Certificate not generated

**Solution**:
1. Ensure DNS is properly configured
2. Wait a few minutes for Let's Encrypt validation
3. Check Traefik logs:
   ```bash
   docker logs dokploy-traefik
   ```

#### 6. Application Crashes After Deployment

**Solution**:
1. Check logs in **"Logs"** tab
2. Verify environment variables
3. Check Docker container:
   ```bash
   docker ps  # See running containers
   docker logs CONTAINER_ID
   ```

#### 7. Build Timeout

**Error**: Build takes too long and times out

**Solution**:
- Optimize Dockerfile (use caching)
- Upgrade server resources
- Use multi-stage builds
- Cache node_modules layer

---

## Post-Deployment

### Continuous Deployment

#### Enable Auto-Deploy

1. In service **"General"** tab
2. Toggle **"Autodeploy"** to ON
3. Any push to configured branch will trigger automatic deployment

#### Manual Deployments

- Click **"Deploy"** button anytime
- Useful for rolling back or redeploying

### Monitoring

#### View Logs

1. Go to **"Logs"** tab
2. Select log type:
   - **Application logs**: Your app's stdout/stderr
   - **Build logs**: Build process logs
3. Filter by time or search

#### Monitoring Metrics

1. Go to **"Monitoring"** tab
2. View metrics:
   - CPU usage
   - Memory usage
   - Network traffic
   - Request counts

### Rollback

#### Rollback to Previous Deployment

1. Go to **"Deployments"** tab
2. Find successful previous deployment
3. Click **"Rollback"** button
4. Confirm rollback

### Environment Variables

#### Add Environment Variables

1. Go to **"Environment"** tab
2. Click **"Add Variable"**
3. Enter:
   - **Key**: VARIABLE_NAME
   - **Value**: variable_value
4. Click **"Save"**
5. **Redeploy** for changes to take effect

**Common Variables**:
```
NODE_ENV=production
DATABASE_URL=postgresql://...
API_KEY=your_api_key
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Scaling

#### Vertical Scaling
- Upgrade server CPU/RAM through hosting provider

#### Horizontal Scaling
- Configure multiple replicas in **"Advanced"** tab
- Use load balancing (Traefik handles this automatically)

### Backups

#### Database Backups
1. Go to **"Volume Backups"** tab
2. Configure backup schedule
3. Select storage destination (S3, local, etc.)

#### Code Backups
- Your code is backed up in GitHub
- Dokploy keeps deployment history

---

## Best Practices

### Security

1. **Use Environment Variables**
   - Never commit secrets to Git
   - Use Dokploy's environment variables feature

2. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

3. **Use HTTPS Only**
   - Enable SSL for all domains
   - Let Dokploy/Traefik handle certificates

4. **Limit Server Access**
   - Use SSH keys instead of passwords
   - Configure firewall properly
   - Disable root SSH login

### Performance

1. **Optimize Docker Images**
   - Use multi-stage builds
   - Minimize layer count
   - Use `.dockerignore`

2. **Enable Caching**
   - Cache npm dependencies
   - Use CDN for static assets

3. **Monitor Resources**
   - Set up alerts for high CPU/memory
   - Scale before hitting limits

### Maintenance

1. **Regular Updates**
   - Update Dokploy regularly
   - Update dependencies
   - Review security advisories

2. **Backup Strategy**
   - Regular database backups
   - Keep multiple deployment versions
   - Test restore procedures

3. **Documentation**
   - Document custom configurations
   - Keep deployment notes
   - Share access information with team

---

## Additional Resources

### Official Documentation
- **Dokploy**: https://docs.dokploy.com
- **Next.js**: https://nextjs.org/docs
- **Docker**: https://docs.docker.com
- **Traefik**: https://doc.traefik.io/traefik/

### Community Support
- **Dokploy Discord**: https://discord.gg/2tBnJ3jDJc
- **GitHub Issues**: Report bugs and request features

### Tools
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **Docker Hub**: https://hub.docker.com

---

## Quick Reference Commands

### Server Management

```bash
# SSH to server
ssh root@YOUR_SERVER_IP

# Check Docker status
systemctl status docker

# View running containers
docker ps

# View all containers
docker ps -a

# View container logs
docker logs CONTAINER_ID

# Restart Docker
systemctl restart docker
```

### Dokploy Management

```bash
# View Dokploy logs
docker logs dokploy

# View Traefik logs
docker logs dokploy-traefik

# Restart Dokploy
cd /opt/dokploy
docker-compose restart

# Update Dokploy
docker-compose pull
docker-compose up -d
```

### Git Commands

```bash
# Push changes (triggers auto-deploy)
git add .
git commit -m "Update message"
git push origin master

# Check repository status
git status

# View commit history
git log --oneline
```

---

## Deployment Checklist

- [ ] Server is set up with Docker installed
- [ ] Dokploy is installed and accessible
- [ ] Application has Dockerfile
- [ ] Code is pushed to GitHub
- [ ] DNS records are configured
- [ ] Dokploy project and service created
- [ ] Git provider configured (with SSH key for private repos)
- [ ] Build type selected (Dockerfile)
- [ ] Domain added with SSL enabled
- [ ] First deployment completed successfully
- [ ] Website is accessible via HTTPS
- [ ] Environment variables configured (if needed)
- [ ] Auto-deploy enabled (optional)
- [ ] Monitoring set up
- [ ] Backup strategy in place

---

## Support

If you encounter issues not covered in this guide:

1. Check Dokploy documentation: https://docs.dokploy.com
2. Search GitHub issues: https://github.com/Dokploy/dokploy/issues
3. Join Discord community: https://discord.gg/2tBnJ3jDJc
4. Review deployment logs in Dokploy dashboard

---

**Last Updated**: January 2025

**Version**: 1.0.0

**Tested With**:
- Dokploy v0.25.4
- Ubuntu 22.04 LTS
- Docker 24.0+
- Next.js 15.x
- Node.js 20.x
