'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { books } from '@/lib/books'

type Books = (typeof books)[number]

export const columns: ColumnDef<Books>[] = [
  {
    header: '#',
    accessorKey: 'id',
  },
  {
    header: 'Título',
    accessorKey: 'title',
  },
  {
    header: 'Categoria',
    accessorKey: 'category',
  },
  {
    header: 'Autor',
    accessorKey: 'author',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const book = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[160px]">
            <DropdownMenuItem
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(book.title.toString())
              }}
            >
              <Icon icon="delete" /> Excluir
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(book.title.toString())
              }}
            >
              <Icon icon="edit" /> Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
