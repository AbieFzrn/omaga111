/**
 * Toast provider component
 * Provides toast notifications to the entire application
 */

'use client';

import { ReactNode } from 'react';

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  // For now, this is a simple wrapper
  // In a real implementation, you would integrate with a toast library
  // like react-hot-toast, sonner, or similar
  
  return (
    <>
      {children}
      {/* Toast container would go here */}
    </>
  );
}

