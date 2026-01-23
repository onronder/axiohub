/**
 * Analytics tracking utilities
 * Stub implementation - can be extended with Vercel Analytics or other providers later
 */

export type UserType = 'individuals' | 'teams' | 'enterprise';

/**
 * Track QuickNav card click
 * @param userType - The type of user (individuals, teams, or enterprise)
 */
export const trackQuickNavClick = (userType: UserType) => {
  // Console log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics] QuickNav clicked:', userType);
  }

  // Future: Add actual analytics tracking here
  // Example: window.va?.('event', 'quicknav_click', { user_type: userType });
};

/**
 * Track general events
 * @param eventName - Name of the event
 * @param properties - Optional event properties
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, properties);
  }

  // Future: Add actual analytics tracking here
  // Example: window.va?.('event', eventName, properties);
};
