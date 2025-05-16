'use client';

import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
