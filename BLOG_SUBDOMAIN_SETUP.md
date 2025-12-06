# Blog Subdomain Setup Guide

## Overview
This guide explains how to deploy the blog to `blog.contentremovaldesk.com` as a separate subdomain on Vercel.

## Configuration Files

### 1. Blog Config (`src/blog/config/blogConfig.ts`)
- Automatically detects if running on subdomain
- Adjusts URLs accordingly
- Works both on main domain (`/blog`) and subdomain (root `/`)

### 2. Vercel Configuration
- **Main site**: Uses `vercel.json`
- **Blog subdomain**: Use `vercel.blog.json` (or configure in Vercel dashboard)

## Deployment Steps

### Option 1: Separate Vercel Project (Recommended)

1. **Create New Vercel Project**
   - Go to Vercel Dashboard
   - Click "Add New Project"
   - Import your repository
   - Name it: `blog-contentremovaldesk`

2. **Configure Domain**
   - Go to Project Settings → Domains
   - Add: `blog.contentremovaldesk.com`
   - Vercel will provide DNS records to add

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     BLOG_SUBDOMAIN=true
     BLOG_BASE_URL=https://blog.contentremovaldesk.com
     ```

4. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Update vercel.json** (if needed)
   - The `vercel.blog.json` file is a reference
   - You can copy it to `vercel.json` for the blog project
   - Or configure directly in Vercel dashboard

### Option 2: Same Project, Different Branch/Path

1. **Use Vercel Monorepo**
   - Configure in `vercel.json` with path-based routing
   - Or use different branches for different deployments

2. **Set Environment Variables per Deployment**
   - Use Vercel's environment variable system
   - Set `BLOG_SUBDOMAIN=true` for blog deployment

## DNS Configuration

Add these DNS records to your domain:

```
Type: CNAME
Name: blog
Value: cname.vercel-dns.com
```

Or if using A record:
```
Type: A
Name: blog
Value: [Vercel IP addresses]
```

## URL Structure

### On Main Domain (`contentremovaldesk.com`)
- Blog list: `https://contentremovaldesk.com/blog`
- Blog post: `https://contentremovaldesk.com/blog/:slug`
- Category: `https://contentremovaldesk.com/blog/category/:category`
- Tag: `https://contentremovaldesk.com/blog/tag/:tag`

### On Subdomain (`blog.contentremovaldesk.com`)
- Blog list: `https://blog.contentremovaldesk.com/`
- Blog post: `https://blog.contentremovaldesk.com/:slug`
- Category: `https://blog.contentremovaldesk.com/category/:category`
- Tag: `https://blog.contentremovaldesk.com/tag/:tag`

## Routes Configuration

The blog automatically detects the hostname and adjusts:
- URLs in SEO components
- RSS feed URLs
- Sitemap URLs
- Internal links

## Testing

1. **Local Testing**
   - Add to `/etc/hosts`: `127.0.0.1 blog.contentremovaldesk.com`
   - Access: `http://blog.contentremovaldesk.com:8080`
   - Or use: `BLOG_SUBDOMAIN=true npm run dev`

2. **Production Testing**
   - Deploy to Vercel preview
   - Test URLs and links
   - Verify RSS feeds work
   - Check SEO meta tags

## Important Notes

1. **Shared Components**: Blog uses shared components (Header, Footer) which may need adjustment
2. **Assets**: Images and assets should be accessible from both domains
3. **CORS**: If making API calls, ensure CORS is configured
4. **Analytics**: Update analytics to track subdomain separately if needed
5. **Sitemap**: Update main sitemap to include blog subdomain URLs

## Environment Variables

For the blog subdomain deployment, set:
```bash
BLOG_SUBDOMAIN=true
BLOG_BASE_URL=https://blog.contentremovaldesk.com
```

## Next Steps

1. ✅ Blog config created (`src/blog/config/blogConfig.ts`)
2. ✅ All URLs updated to use config
3. ⏳ Deploy to Vercel
4. ⏳ Configure DNS
5. ⏳ Test all routes
6. ⏳ Update main site sitemap
7. ⏳ Submit blog sitemap to Google Search Console

## Troubleshooting

### Issue: URLs still pointing to main domain
**Solution**: Check that `BLOG_SUBDOMAIN` environment variable is set

### Issue: Routes not working
**Solution**: Ensure `vercel.json` has proper rewrites for SPA routing

### Issue: Assets not loading
**Solution**: Check that asset paths are relative or use the blog base URL

### Issue: RSS feed not working
**Solution**: Verify RSS feed URLs use `getBlogUrl()` helper

