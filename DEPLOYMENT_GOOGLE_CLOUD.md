# Google Cloud Deployment Guide

## Prerequisites

1. **Google Cloud Account**: [Create one here](https://cloud.google.com)
2. **Google Cloud Project**: Create a new project
3. **Google Cloud CLI**: [Install gcloud](https://cloud.google.com/sdk/docs/install)
4. **Docker** (Optional): For local testing

## Setup Steps

### 1. Initialize Google Cloud CLI

```bash
# Install Google Cloud CLI
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Login to Google Cloud
gcloud auth login

# Set your project
gcloud config set project PROJECT_ID

# Replace PROJECT_ID with your actual project ID
```

### 2. Enable Required APIs

```bash
gcloud services enable appengine.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable compute.googleapis.com
```

### 3. Deploy to App Engine

#### Option A: Deploy from Local Machine

```bash
# Navigate to project directory
cd chess-opening-trainer

# Deploy to App Engine
gcloud app deploy

# Follow prompts - choose region (us-central1 recommended)

# View your deployed app
gcloud app browse
```

#### Option B: Deploy with Cloud Build

```bash
# Deploy using Cloud Build
gcloud run deploy chess-opening-trainer \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### 4. Monitor Deployment

```bash
# View deployment logs
gcloud app logs read -n 50

# View real-time logs
gcloud app logs read -n 0 -f

# View App Engine status
gcloud app describe
```

## Environment Variables (Optional)

If you need environment variables:

```bash
# Add to app.yaml:
env_variables:
  NODE_ENV: "production"
  # Add other env vars here

# Or use Secret Manager:
gcloud secrets create my-secret --data-file=-
gcloud secrets add-iam-policy-binding my-secret \
  --member=serviceAccount:PROJECT_ID@appspot.gserviceaccount.com \
  --role=roles/secretmanager.secretAccessor
```

## Custom Domain (Optional)

```bash
# Map custom domain
gcloud app deploy --region=us-central1

# Then configure DNS records:
# A record: your-domain.com -> IP from gcloud
# CNAME: www.your-domain.com -> your-domain.com
```

## Scaling Configuration

Edit `app.yaml`:

```yaml
auto_scaling:
  min_instances: 1
  max_instances: 10
  cpu_utilization:
    target_utilization: 0.6
```

## Database (Optional)

For future features with database:

```bash
# Create Cloud SQL instance
gcloud sql instances create chess-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1

# Create database
gcloud sql databases create chess_data \
  --instance=chess-db
```

## Troubleshooting

### Deployment Fails

```bash
# Check if Node.js version is compatible
node --version

# Verify app.yaml syntax
gcloud app deploy --quiet (dry run first)

# Check build logs
gcloud builds log --limit=50
```

### App Not Responding

```bash
# Check logs
gcloud app logs read

# Check instances
gcloud app instances list

# Restart app
gcloud app restart
```

### High Costs

```bash
# Reduce scaling
# In app.yaml:
min_instances: 0  # Scale to zero when not in use
max_instances: 5  # Reduce max instances

# Or use Cloud Run (more cost-effective for variable loads)
```

## Monitoring and Analytics

```bash
# View performance metrics
gcloud monitoring dashboards list

# Check error rates
gcloud logging read "severity >= ERROR" --limit=20

# View request logs
gcloud logging read --limit=50
```

## Continuous Deployment (Optional)

Setup automatic deployment on GitHub push:

```bash
# Create Cloud Build trigger
gcloud builds triggers create github \
  --name=chess-trainer-deploy \
  --repo-name=chess-opening-trainer \
  --repo-owner=YOUR_GITHUB_USERNAME \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Create `cloudbuild.yaml`:

```yaml
steps:
  - name: 'gcr.io/cloud-builders/npm'
    args: ['install']
  - name: 'gcr.io/cloud-builders/npm'
    args: ['run', 'build']
  - name: 'gcr.io/cloud-builders/gke-deploy'
    args:
      - run
      - --filename=.
      - --image=gcr.io/$PROJECT_ID/chess-trainer
      - --location=us-central1
      - --cluster=CLUSTER_NAME
```

## Rollback

```bash
# View all versions
gcloud app versions list

# Rollback to previous version
gcloud app deploy --version=OLD_VERSION_ID

# Delete old version
gcloud app versions delete OLD_VERSION_ID
```

## View Live App

After deployment:
- **Default URL**: `https://chess-opening-trainer-PROJECT_ID.uc.r.appspot.com`
- **Custom Domain**: Your configured domain

## Cost Estimates

- **App Engine (Standard)**: ~$5-15/month for low traffic
- **Cloud Run**: ~$0-1/month for sporadic usage
- **Always Free**: First 28 instances/day free

## Next Steps

1. Configure custom domain
2. Set up monitoring alerts
3. Enable HTTPS (automatic)
4. Setup backups (if adding database)
5. Configure CDN for assets (optional)

## Support

- [Google Cloud Documentation](https://cloud.google.com/docs)
- [App Engine Docs](https://cloud.google.com/appengine/docs)
- [Cloud Run Docs](https://cloud.google.com/run/docs)

## Quick Deploy Command

```bash
gcloud app deploy --project=YOUR_PROJECT_ID --region=us-central1 --quiet
```

Replace `YOUR_PROJECT_ID` with your actual Google Cloud Project ID.

---

**Happy Deploying! 🚀**
