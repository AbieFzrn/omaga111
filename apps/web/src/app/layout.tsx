/**
 * Root layout component for the Next.js application
 * Provides global structure, fonts, and providers
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import './globals.css';

// Configure Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

/**
 * Application metadata configuration
 */
export const metadata: Metadata = {
  title: 'BlueTix - Modern Event Management Platform',
  description: 'Create, manage, and discover amazing events with BlueTix. The modern platform for event organizers and attendees.',
  keywords: [
    'events',
    'event management',
    'event planning',
    'conferences',
    'workshops',
    'networking',
    'tickets',
    'registration',
  ],
  authors: [{ name: 'Hi.Events Team' }],
  openGraph: {
    title: 'BlueTix - Modern Event Management Platform',
    description: 'Create, manage, and discover amazing events with BlueTix.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueTix - Modern Event Management Platform',
    description: 'Create, manage, and discover amazing events with BlueTix.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

/**
 * Root layout component that wraps all pages
 * @param children - Page content to render
 * @returns {JSX.Element} Root layout with navigation and providers
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <div className="min-h-screen flex flex-col bg-bluetix-dark">
              {/* Navigation header */}
              <Navbar />
              
              {/* Main content area */}
              <main className="flex-1">
                {children}
              </main>
              
              {/* Footer */}
              <Footer />
            </div>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}