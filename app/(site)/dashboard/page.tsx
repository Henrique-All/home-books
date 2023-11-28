'use client'

import { Button } from '@/components/ui/button'
import { author, books, category } from '@/lib/books'
import { Plus } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div
          className="
            flex 
            flex-col
            items-center 
            gap-[10px]
            p-5
            w-full
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">
            Total de categorias
          </h2>
          <h1 className="text-5xl font-bold">{category.length}</h1>
        </div>
        <div
          className="
            flex 
            flex-col
            items-center 
            justify-center 
            gap-[10px]
            w-full
            p-5
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">Total de autores</h2>
          <h1 className="text-5xl font-bold">{author.length}</h1>
        </div>
        <div
          className="
            flex 
            flex-col
            items-center 
            justify-center 
            gap-[10px]
            w-full
            p-5
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">Total de livros</h2>
          <h1 className="text-5xl font-bold">
            {Intl.NumberFormat('en', {
              notation: 'compact',
            }).format(books.length)}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Últimos 5 livros cadastrados</h2>
          <Button
            size="icon"
            className="bg-primaryColor-default hover:bg-primaryColor-default"
          >
            <Plus />
          </Button>
        </div>
      </div>
      <span className="material-symbols-outlined">face</span>
    </div>
  )
}
