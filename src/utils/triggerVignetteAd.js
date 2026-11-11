/**
 * Triggers Monetag Vignette Ad (Zone 12216293)
 */
export function triggerVignetteAd(zone = '12216293') {
  if (typeof window === 'undefined') return;

  try {
    const container = [document.documentElement, document.body].filter(Boolean).pop();
    if (container) {
      const script = document.createElement('script');
      script.dataset.zone = zone;
      script.src = 'https://n6wxm.com/vignette.min.js';
      container.appendChild(script);
    }
  } catch (error) {
    console.error('Failed to trigger vignette ad:', error);
  }
}
