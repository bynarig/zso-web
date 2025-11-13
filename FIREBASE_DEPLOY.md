# 🚀 Firebase Deployment Guide for Seznamka

## ✅ Prerequisites Done
- ✅ Firebase Tools installed
- ✅ Logged in to Firebase (yaroslav.shabelnyk@gmail.com)
- ✅ Next.js configured for static export
- ✅ Build scripts added to package.json

## 🔧 Step-by-Step Deployment

### Step 1: Create a Firebase Project (if you don't have one)

Go to [Firebase Console](https://console.firebase.google.com/) and:
1. Click "Add project" or select an existing project
2. Give it a name (e.g., "seznamka-app" or "zso-web")
3. Follow the setup wizard
4. Note your **Project ID** (you'll need it next)

### Step 2: Initialize Firebase in Your Project

Run this command in your terminal:

```bash
cd /Users/bynarig/dev/zso-web
npx firebase init hosting
```

When prompted:
- **Use an existing project** or **Create a new project**
- Select your project from the list
- **Public directory**: Enter `out` (this is where Next.js exports static files)
- **Configure as a single-page app**: Yes
- **Set up automatic builds with GitHub**: No (for now)
- **Overwrite files**: No

### Step 3: Build Your App

```bash
npm run build
```

This will:
- Create a production build
- Export static files to the `out` folder
- All pages will be pre-rendered as HTML

### Step 4: Deploy to Firebase

```bash
npx firebase deploy
```

This will upload your app to Firebase Hosting and give you a live URL!

## 🎯 Quick Deploy Command (After Step 2)

Once Firebase is initialized, you can use our custom deploy script:

```bash
npm run deploy
```

This does everything in one command (build + deploy).

## 📝 Expected Firebase Configuration

After running `firebase init hosting`, you should have:

**firebase.json:**
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

**.firebaserc:**
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

## 🌐 After Deployment

You'll get a URL like:
```
https://your-project-id.web.app
or
https://your-project-id.firebaseapp.com
```

## 🔄 Future Deployments

After the initial setup, deploying updates is simple:

```bash
npm run deploy
```

This will rebuild and redeploy your app automatically!

## ⚠️ Troubleshooting

### Network Issues
If you see "Failed to make request" errors:
- Check your internet connection
- Try using a VPN if behind a firewall
- Make sure Firebase APIs are not blocked

### Authentication Issues
If not logged in:
```bash
npx firebase login
```

### Build Errors
Make sure all dependencies are installed:
```bash
npm install
```

## 🎨 What Gets Deployed

Your static Seznamka app with:
- ✅ Home page with animations
- ✅ Join/registration form
- ✅ All styling and assets
- ✅ Optimized and minified code
- ✅ Fast loading times

## 📱 Custom Domain (Optional)

After deployment, you can add a custom domain in Firebase Console:
1. Go to Hosting section
2. Click "Add custom domain"
3. Follow the DNS setup instructions

---

## 🚀 NEXT STEPS FOR YOU:

1. **Run this command:**
   ```bash
   npx firebase init hosting
   ```

2. **Follow the prompts** (select/create project, set public directory to `out`)

3. **Deploy:**
   ```bash
   npm run deploy
   ```

Let me know if you encounter any issues!

