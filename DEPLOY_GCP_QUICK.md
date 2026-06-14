# Chess Opening Trainer - Deploy to Google Cloud

## One-Click Deploy to Google Cloud

### Step 1: Prepare

1. Create Google Cloud Account: https://console.cloud.google.com
2. Create a new project
3. Enable App Engine API
4. Download and install [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)

### Step 2: Login

```bash
gcloud auth login
gcloud config set project YOUR-PROJECT-ID
```

### Step 3: Deploy

```bash
gcloud app deploy
```

Choose region (us-central1 recommended) when prompted.

### Step 4: View Your App

```bash
gcloud app browse
```

## What Gets Deployed?

- ✅ Next.js application
- ✅ All chess openings
- ✅ AI coach system
- ✅ Progress tracking (localStorage)
- ✅ Interactive chessboard
- ✅ Dark/light mode
- ✅ Mobile responsive design

## Configuration Files Included

- **app.yaml** - Google App Engine configuration
- **Dockerfile** - Docker image for containerization
- **next.config.js** - Next.js configuration
- **tsconfig.json** - TypeScript configuration

## Pricing

- **Free Tier**: 28 instance hours/day
- **Pay as you go**: ~$5-15/month for low traffic
- **Always free**: Compute resources are included in free tier

## Access Your App

After deployment:
- URL: `https://[project-id].uc.r.appspot.com`
- View logs: `gcloud app logs read`
- Stop app: `gcloud app stop`
- Delete app: `gcloud app delete`

## Troubleshooting

```bash
# View deployment logs
gcloud app logs read

# Restart the app
gcloud app restart

# Check status
gcloud app describe
```

## Learn More

- [Google App Engine Docs](https://cloud.google.com/appengine/docs)
- [Google Cloud SDK](https://cloud.google.com/sdk)
- [Deploy Node.js Apps](https://cloud.google.com/docs/tutorials/deploy-nodejs)

---

**Deployment successful! Your Chess Opening Trainer is now live on Google Cloud! 🎉**
