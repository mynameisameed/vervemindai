# VerveMind Kits Deployment Guide

## Problem Summary

The root vercel.json only builds apps/web, so kits.vervemindai.com returns 404.
The kits app is a separate Next.js app that requires its own Vercel project.

## Fixes Applied in Code

1. Created apps/kits/vercel.json with proper build configuration
2. Updated next.config.js with output: 'standalone' for Vercel compatibility

## Vercel Dashboard Steps for Sameed

1. Go to vercel.com dashboard and create a NEW project
2. Import the same repo: vervemind-monorepo
3. Configure project settings:
   - Root Directory: apps/kits
   - Framework Preset: Next.js
   - Build Command: next build (or leave as default)
   - Output Directory: .next
4. Add Environment Variables (if needed from apps/web envs)
5. In Project Settings > Domains:
   - Add custom domain: kits.vervemindai.com
   - Vercel will provide DNS records to add to your domain registrar
6. Deploy

## Why 404 Happened

- Root vercel.json: buildCommand = npm run build:web, outputDirectory = apps/web/.next
- This means ONLY apps/web was being deployed at the main Vercel project
- apps/kits was never being built or served by that deployment
- The .vercel folder in apps/kits shows it was linked locally, but likely not properly configured in the dashboard

## Build Verification

The kits app builds successfully independently (tested).
