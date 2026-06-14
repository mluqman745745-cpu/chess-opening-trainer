#!/bin/bash

# Chess Opening Trainer - Google Cloud Deploy Script
# This script automates the deployment to Google Cloud App Engine

set -e

echo "🚀 Chess Opening Trainer - Google Cloud Deployment"
echo "================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI not found. Please install it first:${NC}"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

echo -e "${GREEN}✓ gcloud CLI found${NC}"

# Get current project
PROJECT_ID=$(gcloud config get-value project)

if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}❌ No Google Cloud project configured${NC}"
    echo "Please set your project:"
    echo "  gcloud config set project YOUR-PROJECT-ID"
    exit 1
fi

echo -e "${GREEN}✓ Project: $PROJECT_ID${NC}"

# Enable required APIs
echo -e "${YELLOW}📡 Enabling required APIs...${NC}"
gcloud services enable appengine.googleapis.com --quiet
gcloud services enable cloudbuild.googleapis.com --quiet

echo -e "${GREEN}✓ APIs enabled${NC}"

# Check if app.yaml exists
if [ ! -f "app.yaml" ]; then
    echo -e "${RED}❌ app.yaml not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ app.yaml found${NC}"

# Build
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"

# Deploy
echo -e "${YELLOW}📤 Deploying to Google Cloud App Engine...${NC}"
gcloud app deploy --project=$PROJECT_ID --quiet

echo -e "${GREEN}✓ Deployment successful!${NC}"

# Display app URL
echo ""
echo -e "${GREEN}=================================================${NC}"
echo -e "${GREEN}✨ Your app is now live!${NC}"
echo -e "${GREEN}=================================================${NC}"
echo ""
echo "Access your app at:"
echo -e "${YELLOW}https://${PROJECT_ID}.uc.r.appspot.com${NC}"
echo ""
echo "Useful commands:"
echo "  View logs:     gcloud app logs read"
echo "  View metrics:  gcloud app metrics"
echo "  Restart app:   gcloud app restart"
echo "  Stop app:      gcloud app stop"
echo ""
echo -e "${GREEN}Happy learning with Chess Opening Trainer! 🎉${NC}"
