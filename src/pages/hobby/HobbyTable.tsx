import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from '@nextui-org/react'
import {Button} from '@nextui-org/react'
import {FC, useState} from 'react'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'

const initialRows = [
  {
    key: '1',
    game: 'Overwatch',
    genre: 'First Person Shooter',
    release: '2016',
  },
  {
    key: '2',
    game: 'Call of Duty: Black Ops III',
    genre: 'First Person Shooter',
    release: '2015',
  },
  {
    key: '3',
    game: 'Pokémon Black 2',
    genre: 'RPG',
    release: '2012',
  },
  {
    key: '4',
    game: `Marvel's Spider-Man`,
    genre: 'Action-Adventure',
    release: '2018',
  },
  {
    key: '5',
    game: `Super Mario Odyssey`,
    genre: 'Platformspel',
    release: '2018',
  },
  {
    key: '6',
    game: 'Fortnite',
    genre: 'Battle Royale',
    release: '2017',
  },
  {
    key: '7',
    game: 'Infamous: Second Son',
    genre: 'Action-adventure',
    release: '2017',
  },
  {
    key: '8',
    game: 'Persona 5 Royal',
    genre: 'RPG',
    release: '2019',
  },
  {
    key: '9',
    game: 'Doom Eternal',
    genre: 'First Person Shooter',
    release: '2020',
  },
  {
    key: '10',
    game: `Marvel's Spider-Man 2`,
    genre: 'Action-adventure',
    release: '2023',
  },
]

const columns = [
  {
    key: 'game',
    label: 'GAME',
  },
  {
    key: 'genre',
    label: 'GENRE',
  },
  {
    key: 'release',
    label: 'RELEASE',
  },
]

const HobbyTable: FC = () => {
  const [rows, setRows] = useState(initialRows)
  const [sortMethod, setSortMethod] = useState<'release' | 'game' | 'genre' | null>(null)
  const {language} = useLanguage()

  const sortRows = (key: 'release' | 'game' | 'genre') => {
    if (sortMethod === key) {
      setRows(initialRows) // Reset to original rows
      setSortMethod(null)
    } else {
      const sortedRows = [...rows].sort((a, b) => {
        if (key === 'release') {
          return parseInt(a.release) - parseInt(b.release) // Sort by release year
        } else if (key === 'game') {
          return a.game.localeCompare(b.game) // Sort by game name
        } else if (key === 'genre') {
          return a.genre.localeCompare(b.genre) // Sort by genre
        }
        return 0
      })
      setRows(sortedRows)
      setSortMethod(key)
    }
  }

  return (
    <div>
      <Button
        onDoubleClick={() => sortRows('release')}
        onClick={() => sortRows('release')}
        color='primary'
        className='mb-2 mr-2'>
        {language === 'en' ? 'Sort by Release Year' : 'Sorteer op Uitgave Datum'}
      </Button>
      <Button
        onDoubleClick={() => sortRows('game')}
        onClick={() => sortRows('game')}
        color='secondary'
        className='mb-2 mr-2'>
        {language === 'en' ? 'Sort by Game Name' : 'Sorteer op game'}
      </Button>
      <Button onDoubleClick={() => sortRows('genre')} onClick={() => sortRows('genre')} color='danger' className='mb-4'>
        {language === 'en' ? 'Sort by Genre Name' : 'Sorteer op genre'}
      </Button>
      <Table aria-label='table with dynamic content'>
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <TableRow key={item.key}>{columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default HobbyTable
