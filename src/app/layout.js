import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutor Lancer',
  description: 'This is for tutors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <nav>
       <Header/>
      </nav>
      <main>{children}</main>
  
  
    </html>
  )
}
