import './globals.css'

export const metadata = {
  title: 'Repositori CompREd',
  description: 'Repositori CompREd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
