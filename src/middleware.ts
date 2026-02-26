import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all routes except: API routes, Next.js internals, static files,
  // the app deep-link pages, AND the PostHog ingest route
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images/|icons/|apple-app-site-association|\\.well-known|pages/|ingest/).*)',
  ],
};
