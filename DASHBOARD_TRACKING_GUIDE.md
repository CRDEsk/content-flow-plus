# Dashboard Tracking & Connection Guide

## Overview
This guide explains how the website tracks and connects to the dashboard at `espace.contentremovaldesk.com`.

## Current Implementation

### 1. **URL Tracking Parameters**
When users click "Accéder au tableau de bord", the following tracking parameters are automatically added to the dashboard URL:

- `utm_source=contentremovaldesk` - Identifies the source as your main website
- `utm_medium=website` - Identifies the medium as website
- `utm_campaign=dashboard_access` - Identifies the campaign
- `utm_content=notre_solution_banner` - Identifies the specific location/button
- `ref=<current_page_url>` - Tracks which page the user came from

**Example URL:**
```
https://espace.contentremovaldesk.com/auth?mode=signup&utm_source=contentremovaldesk&utm_medium=website&utm_campaign=dashboard_access&utm_content=notre_solution_banner&ref=https://contentremovaldesk.com/notre-solution
```

### 2. **Analytics Tracking**
The website uses Google Tag Manager (GTM) to track button clicks. When the button is clicked:
- Event is pushed to `dataLayer` with category: "button", action: "click"
- Label includes button name and location: "Accéder au tableau de bord - NotreSolution"

### 3. **Smooth Transition**
- Loading animation appears on button click
- Full-screen transition overlay shows "Connexion au tableau de bord..."
- 800ms delay before redirect for smooth UX
- Button shows spinner and "Connexion..." text during transition

## How to Track/Connect Dashboard

### Option 1: **Google Analytics 4 (GA4) via GTM**
1. In your GTM container, create a trigger for the `custom_event` event
2. Create a tag that fires on button clicks
3. Set up a GA4 event tag to track:
   - Event name: `dashboard_access`
   - Parameters: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `ref`
4. In GA4, create a custom report to see:
   - Which pages users came from
   - Conversion rate from website to dashboard
   - User journey analysis

### Option 2: **Dashboard-Side Tracking**
In your dashboard (`espace.contentremovaldesk.com`), you can:

1. **Read URL Parameters on Dashboard Load:**
```javascript
// In your dashboard's auth page
const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get('utm_source');
const utmMedium = urlParams.get('utm_medium');
const utmCampaign = urlParams.get('utm_campaign');
const utmContent = urlParams.get('utm_content');
const ref = urlParams.get('ref');

// Store in session/localStorage or send to your backend
localStorage.setItem('referrer', ref);
localStorage.setItem('utm_source', utmSource);
// ... etc
```

2. **Send to Your Backend:**
```javascript
// Send tracking data to your API
fetch('/api/track-referral', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    referrer: ref,
    timestamp: new Date().toISOString()
  })
});
```

3. **Cross-Domain Tracking (Advanced):**
If you want to track users across both domains:
- Set up cross-domain tracking in GA4
- Use `gtag('config', 'GA_MEASUREMENT_ID', { 'linker': { 'domains': ['contentremovaldesk.com', 'espace.contentremovaldesk.com'] } })`
- This allows GA4 to recognize the same user across both domains

### Option 3: **PostMessage API (Real-time Communication)**
For real-time communication between website and dashboard:

**On Website (contentremovaldesk.com):**
```javascript
// When redirecting to dashboard
window.addEventListener('message', (event) => {
  if (event.origin === 'https://espace.contentremovaldesk.com') {
    // Dashboard sent a message back
    console.log('Dashboard response:', event.data);
  }
});

// Send data to dashboard
window.open('https://espace.contentremovaldesk.com/auth?mode=signup', '_blank');
```

**On Dashboard (espace.contentremovaldesk.com):**
```javascript
// Listen for messages from website
window.addEventListener('message', (event) => {
  if (event.origin === 'https://contentremovaldesk.com') {
    // Website sent data
    console.log('Website data:', event.data);
  }
});

// Send message back to website (if opened in popup)
if (window.opener) {
  window.opener.postMessage({
    type: 'dashboard_loaded',
    userId: currentUserId
  }, 'https://contentremovaldesk.com');
}
```

## Recommended Setup

### For Simple Tracking:
1. ✅ **Already implemented**: URL parameters are added automatically
2. Set up GA4 to track `utm_*` parameters
3. In dashboard, read URL parameters and store in database

### For Advanced Tracking:
1. Implement cross-domain tracking in GA4
2. Store referral data in dashboard database when user signs up
3. Create analytics dashboard showing:
   - Traffic sources
   - Conversion rates
   - User journey from website → dashboard → signup

## Testing

To test the tracking:
1. Click "Accéder au tableau de bord" button
2. Check browser console for `dataLayer` events
3. Verify URL parameters in dashboard URL
4. Check GTM Preview mode to see events firing
5. Verify in GA4 Real-time reports

## Next Steps

1. **Set up GA4 tracking** in your GTM container for the button clicks
2. **Configure dashboard** to read and store URL parameters
3. **Create analytics reports** to track conversion funnel
4. **Optional**: Implement cross-domain tracking for seamless user journey analysis

