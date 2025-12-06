# Blog Subdomain Deployment Guide

## Quick Start

To deploy the blog to `blog.contentremovaldesk.com` on Vercel:

### Option 1: Separate Vercel Project (Recommended)

1. **Create New Project in Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Project Name: `blog-contentremovaldesk` (or any name)

2. **Configure Domain**
   - In Project Settings → Domains
   - Add: `blog.contentremovaldesk.com`
   - Vercel will show DNS records to add

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     BLOG_SUBDOMAIN=true
     BLOG_BASE_URL=https://blog.contentremovaldesk.com
     ```
   - Apply to: Production, Preview, Development

4. **Build Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy**
   - Push to your branch
   - Vercel will auto-deploy
   - Or manually trigger deployment

### Option 2: Same Project, Different Configuration

If you want to keep everything in one project:

1. **Use Vercel Branch/Path Configuration**
   - Create a `blog` branch
   - Configure different environment variables per branch
   - Or use Vercel's path-based routing

2. **Monorepo Setup**
   - Use Vercel's monorepo features
   - Configure different deployments for different paths

## DNS Configuration

Add this CNAME record to your domain DNS:

```
Type: CNAME
Name: blog
Value: cname.vercel-dns.com
TTL: 3600 (or auto)
```

**OR** if your DNS provider doesn't support CNAME at root:

```
Type: A
Name: blog
Value: [Vercel IP addresses - check Vercel dashboard]
```

## How It Works

### Automatic Detection

The blog automatically detects if it's running on the subdomain:

- **On `blog.contentremovaldesk.com`**: 
  - Routes are at root: `/`, `/:slug`, `/category/:category`
  - URLs use subdomain: `https://blog.contentremovaldesk.com/:slug`

- **On `contentremovaldesk.com`**: 
  - Routes have `/blog` prefix: `/blog`, `/blog/:slug`
  - URLs use main domain: `https://contentremovaldesk.com/blog/:slug`

### Configuration Files

- **`src/blog/config/blogConfig.ts`**: Detects hostname and adjusts URLs
- **`src/blog/utils/routes.ts`**: Helper functions for route paths
- **All blog components**: Use route helpers instead of hardcoded paths

## Testing Locally

### Test Subdomain Locally

1. **Edit `/etc/hosts`** (Mac/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows):
   ```
   127.0.0.1 blog.contentremovaldesk.com
   ```

2. **Set Environment Variable**:
   ```bash
   BLOG_SUBDOMAIN=true npm run dev
   ```

3. **Access**: `http://blog.contentremovaldesk.com:8080`

### Test Main Domain

Just run normally:
```bash
npm run dev
```
Access: `http://localhost:8080/blog`

## What's Configured

✅ **URL Detection**: Automatically detects subdomain vs main domain
✅ **Route Helpers**: All internal links use route helpers
✅ **SEO URLs**: All meta tags and schema use correct URLs
✅ **RSS Feeds**: RSS feed URLs adjust based on domain
✅ **Sitemap**: Blog URLs in sitemap use correct domain
✅ **Internal Links**: Category, tag, and post links work on both domains

## Files Updated

- `src/blog/config/blogConfig.ts` - Domain detection
- `src/blog/utils/routes.ts` - Route path helpers
- `src/blog/components/BlogSEO.tsx` - SEO URLs
- `src/blog/components/BlogListSEO.tsx` - Blog list SEO
- `src/blog/utils/rss.ts` - RSS feed URLs
- `src/blog/components/BlogCard.tsx` - Post links
- `src/blog/pages/BlogPost.tsx` - All internal links
- `src/blog/pages/BlogCategory.tsx` - Category links
- `src/blog/pages/BlogTag.tsx` - Tag links
- `src/blog/components/BlogSidebar.tsx` - Category links
- `src/components/BlogPreviewSection.tsx` - Homepage links
- `src/components/HelpSection.tsx` - Blog link

## Post-Deployment Checklist

- [ ] Verify `blog.contentremovaldesk.com` loads correctly
- [ ] Test all blog routes (list, post, category, tag)
- [ ] Verify RSS feed: `blog.contentremovaldesk.com/rss.xml`
- [ ] Check SEO meta tags use subdomain URLs
- [ ] Test internal links work correctly
- [ ] Verify breadcrumbs work
- [ ] Check social sharing URLs
- [ ] Update main site sitemap to include blog subdomain
- [ ] Submit blog sitemap to Google Search Console
- [ ] Test on mobile devices

## Troubleshooting

### Issue: Routes not working on subdomain
**Solution**: Check that `BLOG_SUBDOMAIN=true` is set in Vercel environment variables

### Issue: URLs still pointing to main domain
**Solution**: Clear browser cache, check environment variables are set correctly

### Issue: 404 errors on subdomain
**Solution**: Ensure `vercel.json` has proper rewrites for SPA routing

### Issue: Assets not loading
**Solution**: Check that asset paths are relative or use correct base URL

## Next Steps

1. Deploy to Vercel with subdomain configuration
2. Configure DNS records
3. Test all functionality
4. Update main site sitemap
5. Submit to Google Search Console

---

**Status**: ✅ Blog is ready for subdomain deployment!

