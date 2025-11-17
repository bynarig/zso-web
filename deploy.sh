#!/bin/bash

# Seznamka Firebase Deployment Script
# This script initializes and deploys your app to Firebase

echo "🚀 Seznamka Firebase Deployment"
echo "================================"
echo ""

# Check if Firebase is initialized
if [ ! -f ".firebaserc" ]; then
    echo "⚠️  Firebase not initialized yet!"
    echo ""
    echo "Please run this command first:"
    echo "  npx firebase init hosting"
    echo ""
    echo "When prompted:"
    echo "  - Select or create a Firebase project"
    echo "  - Public directory: out"
    echo "  - Single-page app: Yes"
    echo "  - GitHub deploys: No"
    echo ""
    exit 1
fi

echo "✅ Firebase configuration found"
echo ""

# Build the app
echo "📦 Building your app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy to Firebase
echo "🚀 Deploying to Firebase..."
npx firebase deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo ""
    echo "Your Seznamka app is now live!"
    echo "Check your Firebase console for the URL"
else
    echo "❌ Deployment failed!"
    exit 1
fi

