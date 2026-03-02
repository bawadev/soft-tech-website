@Library('bawadev/kamal-deployment@main') _

// Jenkinsfile for SoftX Website
// Type: Static Site (Node.js server)
// Backend: None (static site)

deployStaticApp(
    appName:      'softx',
    sourceRepo:   'bawadev/soft-tech-website',
    dockerImage:  'bawadev/softx-website',
    containerPort: '3200',
    kamalConfig:  'apps/softx/deploy.yml',
    domains:      [
        dev:  'dev.softx.world',
        prod: 'softx.world'
    ]
)
