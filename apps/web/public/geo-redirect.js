// Geo-Redirect Script: US vs India Landing Pages
// Detects India visitors and auto-redirects to /in/

(function() {
  // Check for explicit override
  const urlParams = new URLSearchParams(window.location.search);
  const regionOverride = urlParams.get('region');
  const savedRegion = localStorage.getItem('vervemind-region');
  
  // 0. Disable for subdomains (niche pages)
  const hostParts = window.location.hostname.split('.');
  if (hostParts.length > 2 && !window.location.hostname.includes('www.')) {
    console.log('Niche subdomain detected, skipping geo-redirection.');
    return;
  }

  // Respect user choice if explicitly set
  if (savedRegion) {
    if (savedRegion === 'IN' && !window.location.pathname.startsWith('/in')) {
      window.location.href = '/in/' + window.location.search;
      return;
    }
    if (savedRegion === 'US' && window.location.pathname.startsWith('/in')) {
      window.location.href = '/' + window.location.search;
      return;
    }
    return; // User chose current region
  }
  
  // Already on India page? Don't redirect
  if (window.location.pathname.startsWith('/in')) {
    return;
  }
  
  // Method 1: Check timezone (India = IST)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === 'Asia/Kolkata') {
    localStorage.setItem('vervemind-region', 'IN');
    window.location.href = '/in/' + window.location.search;
    return;
  }
  
  // Method 2: Check browser language (hi-IN, ta-IN, etc)
  const lang = navigator.language || navigator.userLanguage;
  if (lang === 'hi-IN' || lang === 'ta-IN' || lang === 'te-IN' || lang === 'mr-IN') {
    localStorage.setItem('vervemind-region', 'IN');
    window.location.href = '/in/' + window.location.search;
    return;
  }
  
  // Method 3: Use Cloudflare/Vercel geo (if available via header injection)
  // This runs server-side, client-side we use the above methods
  
  // Default: Stay on US page
  localStorage.setItem('vervemind-region', 'US');
})();

// Region toggle function (add to footer)
function toggleRegion() {
  const current = localStorage.getItem('vervemind-region') || 'US';
  const next = current === 'US' ? 'IN' : 'US';
  localStorage.setItem('vervemind-region', next);
  window.location.href = next === 'IN' ? '/in/' : '/';
}

// Expose for button usage
window.toggleRegion = toggleRegion;
