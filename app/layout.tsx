import type { Metadata } from 'next';
import ClientLayout from './clientLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'ECOMÁS - Consultoría y capacitación',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
