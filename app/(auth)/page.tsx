'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGithub, FaSpinner } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

function Auth() {
  const session = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [session?.status, router])

  function socialLogin() {
    setIsLoading(true)

    signIn('github', { redirect: false }).then((callback) => {
      if (callback?.error) {
        alert(callback.error)
      }

      if (callback?.ok) {
        router.push('/dashboard')
        setIsLoading(false)
      }
    })
  }

  return (
    <div
      className="
        flex 
        flex-col 
        items-center 
        justify-center
        gap-5 
        p-10 
        h-full
      "
    >
      <h1
        className="
          text-2xl
          text-center
          w-full
        "
      >
        Conecte-se usando sua conta do GitHub.
      </h1>
      <Button
        onClick={() => socialLogin()}
        variant="secondary"
        className="
          flex
          items-center
          text-2xl
          py-[20px]
          px-[40px]
          w-full sm:w-[347px]
          h-[76px]
        "
      >
        {isLoading ? (
          <div className="inline-flex items-center gap-5">
            <FaSpinner className="animate-spin" size={36} />
          </div>
        ) : (
          <div className="inline-flex items-center gap-5">
            <FaGithub size={36} className="flex-shrink-0" />
            Entrar com GitHub
          </div>
        )}
      </Button>
    </div>
  )
}

export default Auth
