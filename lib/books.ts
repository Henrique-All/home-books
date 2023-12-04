const categories = [
  'Fantasia',
  'Comedia',
  'Ação',
  'Romance',
  'Ficção Cientifica',
]

const authors = [
  'Alicia Ferreira',
  'Arana Marques',
  'Marta Castro',
  'Leandro Alves',
  'Ana Cristina',
  'Alana Albuquerque',
  'Silva Mendez',
  'Daniel Silveira',
  'Carla Siqueira',
]

const books = [
  {
    id: 1,
    title: 'O Silêncio dos Inocentes',
    author: authors[2],
    biography: 'Biografia do Jhon',
    category: categories[1],
  },
  {
    id: 2,
    title: 'As Aventuras de Sherlock Homes',
    author: authors[5],
    biography: 'Biografia do Luan',
    category: authors[8],
  },
  {
    id: 3,
    title: 'Odisseia',
    author: authors[3],
    biography: 'Biografia do Caio',
    category: categories[4],
  },
  {
    id: 4,
    title: 'O mundo se despedaça',
    author: authors[8],
    biography: 'Biografia do Jhon',
    category: categories[1],
  },
  {
    id: 5,
    title: 'Cem Anos de Solidão',
    author: authors[4],
    biography: 'Biografia do Luan',
    category: categories[2],
  },
  {
    id: 6,
    title: 'A Divina Comédia',
    author: authors[1],
    biography: 'Biografia da Nancy ',
    category: categories[2],
  },
  {
    id: 7,
    title: 'Rei Lear',
    author: authors[5],
    biography: 'Biografia da Sara',
    category: categories[3],
  },
  {
    id: 8,
    title: 'O Principe',
    author: authors[4],
    biography: 'Biografia do Everton',
    category: categories[1],
  },
  {
    id: 9,
    title: 'Madame Bovary',
    author: authors[7],
    biography: 'Biografia do Jhon',
    category: categories[1],
  },
  {
    id: 10,
    title: 'O Pequeno Principe',
    author: authors[8],
    biography: 'Biografia do Sam',
    category: categories[4],
  },
  {
    id: 11,
    title: 'Lolita',
    author: authors[2],
    biography: 'Biografia do Everton',
    category: categories[2],
  },
  {
    id: 12,
    title: 'Guerra e Paz',
    author: authors[3],
    biography: 'Biografia do Will',
    category: categories[1],
  },
]

export { authors, books, categories }
