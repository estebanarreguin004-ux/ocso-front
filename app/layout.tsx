import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] }) 
import './globals.css'
import Providers from '@/provider';

export const metadata: Metadata = {
  title: 'OCSO',
  description: 'Pagina web de administacion de OCSO',
};

export default function RootLayout({
  children
 }: Readonly<{ children: React.ReactNode }>) {  
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}