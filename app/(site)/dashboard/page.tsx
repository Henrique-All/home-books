'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button onClick={() => signOut()}>Sair</Button>
      <span className="material-symbols-outlined">face</span>
    </div>
  )
}
