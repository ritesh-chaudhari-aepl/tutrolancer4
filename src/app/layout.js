import './globals.css'
export const metadata = {
  title: 'Tutor Lancer',
  description: 'This is for tutors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
