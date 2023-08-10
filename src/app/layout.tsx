import ProfileSection from '@/components/ProfileSection'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { RecoilRoot } from 'recoil'
import MaterialSection from '@/components/MaterialSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout ({children,}: {children: React.ReactNode}) {

  return (
      <html lang="en">
        <body>
          <RecoilRoot>
            <div>
              <h1>Clicker Hunters</h1>

              <Link className="nav" href="/">Home</Link>
              <Link className="nav" href="/world/crafting">Crafting</Link>
              <Link className="nav" href="/world/gathering">Gathering</Link>
              <Link className="nav" href="/world/vaulting">Vaulting</Link>
              <br /><br />
              <MaterialSection />
            </div>






            {children}
          </RecoilRoot>
        </body>
      </html>
  )
}
