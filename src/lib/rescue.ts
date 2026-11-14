import { SITE_URL } from './site';

// The AI app rescue offer page (/ai-app-rescue) and its thanks page. Kept in one module so the
// offer can move to its own domain later (with a 301) without hunting through the site.

export const RESCUE_PATH = '/ai-app-rescue';
export const RESCUE_THANKS_PATH = `${RESCUE_PATH}/thanks`;

// The free 20-minute call (Cal.com event with "What did you build it with?" and "What's going
// wrong?" booking questions).
export const BOOKING_URL = 'https://cal.com/mihai-avram/app-review';

// Web3Forms emails each inquiry to the inbox this key belongs to (form "AI App Rescue inquiries").
// The key is meant to be public: it can only send to that inbox.
export const WEB3FORMS_ACCESS_KEY = 'e9901185-84d1-4569-b556-0b5a50d651ad';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// Without JavaScript, Web3Forms needs an absolute URL to send the visitor to after a submission.
// Its free plan only redirects to the same domain as the form.
export const RESCUE_THANKS_URL = `${SITE_URL}${RESCUE_THANKS_PATH}`;

// Booking links carry where they were clicked, so Cal.com and analytics can tell them apart.
export function bookingUrl(placement: 'hero' | 'contact' | 'thanks'): string {
  const url = new URL(BOOKING_URL);
  url.searchParams.set('utm_source', 'mihaisplace');
  url.searchParams.set('utm_medium', 'offer-page');
  url.searchParams.set('utm_content', placement);
  return url.href;
}

export const BUILDERS = [
  'Lovable',
  'Replit',
  'Bolt',
  'Base44',
  'v0',
  'Cursor',
  'Claude Code',
] as const;

// Shown under the form and again on the thanks page.
export const NEXT_STEPS = [
  'I aim to reply within one business day.',
  'We agree a scope and a fixed price.',
  'I start with the least access needed.',
  'I deliver the agreed review or fix. Fixes include agreed checks and a handover, in your accounts.',
] as const;
