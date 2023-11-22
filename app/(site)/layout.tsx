'use client'

import { Sidebar } from '@/app/(site)/_components/Sidebar'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Sidebar>{children}</Sidebar>
}
