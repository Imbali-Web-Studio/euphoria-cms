import './globals.css'
import ScrollAnimations from './ScrollAnimations'
import StoryblokProvider from '../components/StoryblokProvider'
import Script from 'next/script'

export const metadata = {
  title: 'Euphoria Lounge, Bar & Restaurant | Humble, Houston TX',
  description: 'Euphoria Lounge, Bar & Restaurant — upscale 21+ lounge in Humble, Houston, TX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500&family=Tenor+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js"></script>
      </head>
      <body>
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
        <ScrollAnimations />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XDPXSSDFTC`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XDPXSSDFTC');
          `}
        </Script>
      </body>
    </html>
  )
}