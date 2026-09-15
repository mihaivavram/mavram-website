// Google Analytics 4 property for mihaisplace.com.
export const GA_MEASUREMENT_ID = 'G-YPXJCELYNW';

// Only Vercel production deployments report to Google Analytics, so local builds, test
// runs and preview deployments never add fake visits.
export function isAnalyticsEnabled(env: Record<string, string | undefined> = process.env): boolean {
  return env.VERCEL_ENV === 'production';
}
