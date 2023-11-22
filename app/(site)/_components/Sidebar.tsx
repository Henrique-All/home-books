import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { Icon } from '@/components/Icon'
import { MenuItem } from './MenuItem'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: <Icon icon="dashboard" />,
        title: 'Dashboard',
        active: pathname === '/dashboard',
        href: '/dashboard',
      },
      {
        icon: <Icon icon="category" />,
        title: 'Categoria',
        active: pathname === '/categories',
        href: '/categories',
      },
      {
        icon: <Icon icon="groups" />,
        title: 'Autores',
        active: pathname === '/authors',
        href: '/authors',
      },
      {
        icon: <Icon icon="book_2" />,
        title: 'Livros',
        active: pathname === '/books',
        href: '/books',
      },
    ],
    [pathname],
  )

  return (
    <div className="flex">
      <div
        className="
          fixed sm:static
          flex
          items-center
          justify-between sm:justify-normal
          sm:flex-col
          bottom-0
          group 
          bg-black 
          w-full sm:w-20 
          h-[80px] sm:h-screen 
          sm:hover:w-[363px] 
          transition-all
          text-white
          sm:p-[30px]
        "
      >
        {routes.map((route) => (
          <MenuItem key={route.title} {...route} />
        ))}
      </div>
      {children}
    </div>
  )
}
