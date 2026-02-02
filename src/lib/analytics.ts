/**
 * User type for QuickNav persona tracking
 */
export type UserType = 'individuals' | 'teams' | 'enterprise';

/**
 * Core event tracking function
 * Uses Vercel Analytics in production, logs to console in development
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Use Vercel Analytics track function if available
  if (typeof window !== 'undefined' && 'va' in window) {
    const va = window.va as (event: string, properties?: Record<string, unknown>) => void;
    va('event', { name: eventName, ...properties });
  }

  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, properties);
  }
};

/**
 * Track CTA button clicks
 */
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('cta_click', { cta_name: ctaName, location });
};

/**
 * Track QuickNav persona clicks
 */
export const trackQuickNavClick = (userType: 'individuals' | 'teams' | 'enterprise') => {
  trackEvent('quicknav_click', { user_type: userType });
};

/**
 * Track pricing section interactions
 */
export const trackPricingAction = (planName: string, action: 'view' | 'expand' | 'click_cta') => {
  trackEvent('pricing_action', { plan: planName, action });
};

/**
 * Track demo modal opens
 */
export const trackDemoOpen = () => {
  trackEvent('demo_modal_open');
};

/**
 * Track smooth scroll to section
 */
export const trackScrollToSection = (sectionId: string) => {
  trackEvent('scroll_to_section', { section: sectionId });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, context: string) => {
  trackEvent('external_link_click', { url, context });
};

/**
 * Track page views (supplements Vercel's automatic tracking)
 */
export const trackPageView = (pagePath: string) => {
  trackEvent('pageview', { path: pagePath });
};

/**
 * Track scroll depth milestones
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', { depth_percentage: depth });
};
