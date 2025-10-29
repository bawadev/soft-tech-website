#!/bin/bash

# SEO Testing Script for Soft Tech Website
# This script helps verify that all SEO implementations are working correctly

echo "🔍 SEO Testing Script for Soft Tech Website"
echo "============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base URL - change this to your actual domain when deployed
BASE_URL="${1:-http://localhost:3000}"

echo "Testing URL: $BASE_URL"
echo ""

# Function to check if URL returns 200
check_url() {
    local url=$1
    local name=$2

    if command -v curl &> /dev/null; then
        status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
        if [ "$status" == "200" ]; then
            echo -e "${GREEN}✓${NC} $name: OK (200)"
        else
            echo -e "${RED}✗${NC} $name: Failed (Status: $status)"
        fi
    else
        echo -e "${YELLOW}⚠${NC} curl not installed, skipping URL check"
    fi
}

# Function to check for schema in page
check_schema() {
    local url=$1
    local schema_type=$2

    if command -v curl &> /dev/null; then
        content=$(curl -s "$url")
        if echo "$content" | grep -q "\"@type\":\"$schema_type\""; then
            echo -e "${GREEN}✓${NC} Found $schema_type schema"
        else
            echo -e "${RED}✗${NC} Missing $schema_type schema"
        fi
    fi
}

echo "📄 1. Testing Core Pages"
echo "------------------------"
check_url "$BASE_URL/" "Homepage"
check_url "$BASE_URL/blog" "Blog Index"
check_url "$BASE_URL/blog/ai-transformation-2024" "Blog Post"
echo ""

echo "🗺️  2. Testing SEO Files"
echo "------------------------"
check_url "$BASE_URL/sitemap.xml" "XML Sitemap"
check_url "$BASE_URL/robots.txt" "Robots.txt"
check_url "$BASE_URL/site.webmanifest" "Web Manifest"
echo ""

echo "📊 3. Testing Structured Data"
echo "-----------------------------"
if command -v curl &> /dev/null; then
    echo "Homepage schemas:"
    check_schema "$BASE_URL/" "Organization"
    check_schema "$BASE_URL/" "WebSite"

    echo ""
    echo "Blog post schemas:"
    check_schema "$BASE_URL/blog/ai-transformation-2024" "Article"
    check_schema "$BASE_URL/blog/ai-transformation-2024" "BreadcrumbList"
else
    echo -e "${YELLOW}⚠${NC} curl not installed, skipping schema checks"
fi
echo ""

echo "🏷️  4. Testing Meta Tags"
echo "------------------------"
if command -v curl &> /dev/null; then
    homepage=$(curl -s "$BASE_URL/")

    # Check for essential meta tags
    if echo "$homepage" | grep -q "<title>"; then
        echo -e "${GREEN}✓${NC} Title tag present"
    else
        echo -e "${RED}✗${NC} Title tag missing"
    fi

    if echo "$homepage" | grep -q "og:title"; then
        echo -e "${GREEN}✓${NC} Open Graph tags present"
    else
        echo -e "${RED}✗${NC} Open Graph tags missing"
    fi

    if echo "$homepage" | grep -q "twitter:card"; then
        echo -e "${GREEN}✓${NC} Twitter Card tags present"
    else
        echo -e "${RED}✗${NC} Twitter Card tags missing"
    fi

    if echo "$homepage" | grep -q "canonical"; then
        echo -e "${GREEN}✓${NC} Canonical URL present"
    else
        echo -e "${RED}✗${NC} Canonical URL missing"
    fi
fi
echo ""

echo "📱 5. Testing Favicon & Icons"
echo "-----------------------------"
check_url "$BASE_URL/favicon.ico" "Favicon"
check_url "$BASE_URL/apple-touch-icon.png" "Apple Touch Icon"
check_url "$BASE_URL/icon-32x32.png" "32x32 Icon"
echo ""

echo "🎨 6. Testing Social Media Images"
echo "---------------------------------"
check_url "$BASE_URL/og-image.jpg" "OG Image"
check_url "$BASE_URL/twitter-image.jpg" "Twitter Image"
check_url "$BASE_URL/logo.png" "Logo"
echo ""

echo "📈 7. Build Information"
echo "----------------------"
if [ -f ".next/BUILD_ID" ]; then
    BUILD_ID=$(cat .next/BUILD_ID)
    echo -e "${GREEN}✓${NC} Build ID: $BUILD_ID"
else
    echo -e "${YELLOW}⚠${NC} No build found. Run: npm run build -- --no-lint"
fi

if [ -d ".next/server/app" ]; then
    PAGE_COUNT=$(find .next/server/app -name "*.html" 2>/dev/null | wc -l)
    echo -e "${GREEN}✓${NC} Generated pages: $PAGE_COUNT"
else
    echo -e "${YELLOW}⚠${NC} No generated pages found"
fi
echo ""

echo "🔗 8. External Testing Tools"
echo "----------------------------"
echo "Manual testing required for:"
echo ""
echo "  Google Rich Results Test:"
echo "  → https://search.google.com/test/rich-results"
echo ""
echo "  Schema.org Validator:"
echo "  → https://validator.schema.org/"
echo ""
echo "  PageSpeed Insights:"
echo "  → https://pagespeed.web.dev/"
echo ""
echo "  Facebook Sharing Debugger:"
echo "  → https://developers.facebook.com/tools/debug/"
echo ""
echo "  Twitter Card Validator:"
echo "  → https://cards-dev.twitter.com/validator"
echo ""

echo "✅ SEO Testing Complete!"
echo "========================"
echo ""
echo "Next Steps:"
echo "1. Fix any failed checks above"
echo "2. Generate missing favicon/image files"
echo "3. Test with external tools (listed above)"
echo "4. Submit sitemap to Google Search Console"
echo "5. Monitor Search Console for issues"
echo ""
