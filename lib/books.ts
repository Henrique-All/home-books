const author = [
  {
    id: 1,
    name: 'Jhon Doe',
    biography: 'Biografia do Jhon',
  },
  {
    id: 2,
    name: 'Luan Campos',
    biography: 'Biografia do Luan',
  },
  {
    id: 3,
    name: 'Smith Doe',
    biography: 'Biografia do Smith',
  },
  {
    id: 4,
    name: 'Sarah Connor',
    biography: 'Biografia da Sara',
  },
  {
    id: 5,
    name: 'Sam Doe',
    biography: 'Biografia do Sam',
  },
  {
    id: 6,
    name: 'Will Doe',
    biography: 'Biografia do Will',
  },
  {
    id: 7,
    name: 'Nancy Doe',
    biography: 'Biografia da Nancy ',
  },
  {
    id: 8,
    name: 'Lira Python',
    biography: 'Biografia do Lira',
  },
  {
    id: 9,
    name: 'Caio R. M.',
    biography: 'Biografia do Caio',
  },
  {
    id: 10,
    name: 'Everton Ribeiro',
    biography: 'Biografia do Everton',
  },
]

const category = [
  {
    id: 1,
    name: 'Science Fiction',
  },
  {
    id: 2,
    name: 'Fantasy',
  },
  {
    id: 3,
    name: 'Romance',
  },
  {
    id: 4,
    name: 'Comedy',
  },
  {
    id: 5,
    name: 'Action',
  },
  {
    id: 6,
    name: 'Horror',
  },
  {
    id: 7,
    name: 'Thriller',
  },
]

const books = [
  {
    id: 1,
    title: 'O Silêncio dos Inocentes',
    authorID: author[0].id,
    category: category[3].id,
  },
  {
    id: 2,
    title: 'As Aventuras de Sherlock Homes',
    authorID: author[6].id,
    category: category[3].id,
  },
  {
    id: 3,
    title: 'Odisseia',
    authorID: author[4].id,
    category: category[4].id,
  },
  {
    id: 4,
    title: 'O mundo se despedaça',
    authorID: author[1].id,
    category: category[1].id,
  },
  {
    id: 5,
    title: 'Cem Anos de Solidão',
    authorID: author[0].id,
    category: category[3].id,
  },
  {
    id: 6,
    title: 'A Divina Comédia',
    authorID: author[2].id,
    category: category[4].id,
  },
  {
    id: 7,
    title: 'Rei Lear',
    authorID: author[6].id,
    category: category[1].id,
  },
  {
    id: 8,
    title: 'O Principe',
    authorID: author[1].id,
    category: category[6].id,
  },
  {
    id: 9,
    title: 'Madame Bovary',
    authorID: author[6].id,
    category: category[1].id,
  },
  {
    id: 10,
    title: 'O Pequeno Principe',
    authorID: author[6].id,
    category: category[2].id,
  },
  {
    id: 11,
    title: 'Lolita',
    authorID: author[6].id,
    category: category[1].id,
  },
  {
    id: 12,
    title: 'Guerra e Paz',
    authorID: author[1].id,
    category: category[1].id,
  },
]

export { author, books, category }
