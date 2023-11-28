import { signOut, useSession } from 'next-auth/react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserNav() {
  const session = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-7 md:h-7 w-7 md:w-7">
            <AvatarImage
              src={`${session.data?.user?.image}`}
              alt={`${session.data?.user?.name}`}
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="
          w-56
          bg-zinc-900
          text-white
          border-zinc-900"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{`${session.data?.user?.name}`}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {`${session.data?.user?.email}`}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-900" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:bg-zinc-800 cursor-pointer"
            onClick={() => console.log('Meu Perfil')}
          >
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-zinc-800 cursor-pointer"
            onClick={() => console.log('Minhas Configurações')}
          >
            Configurações
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="hover:bg-zinc-800 cursor-pointer"
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
