import {FC} from 'react'
import {Card, CardHeader, CardFooter, Image, Button} from '@nextui-org/react'

const ErvaringCards: FC = () => {
  return (
    <div className='max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-2 mx-auto px-8'>
      <Card isFooterBlurred className='w-full h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Project 1</p>
          <h4 className='text-white/90 font-medium text-xl'>Basic HTML & CSS website</h4>
        </CardHeader>
        <Image removeWrapper alt='Project 1 Photo' className='z-0 w-full h-full object-cover' src='/project1.jpg' />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div className='flex flex-grow gap-2 items-center'>
            <Image alt='HTML5 icon' className='rounded-full w-10 h-11' src='skills/HTML5.png' />
            <div className='flex flex-col'>
              <p className='text-tiny text-white/60'>Portfolio website</p>
              <p className='text-tiny text-white/60'>Basic HTML & CSS</p>
            </div>
          </div>
          <Button
            as='a'
            radius='full'
            size='sm'
            href='http://ward-portfolio.be/project1/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            Visit
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className='w-full h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Project 2</p>
          <h4 className='text-white/90 font-medium text-xl'>Basic HTML, CSS & Bootstrap website</h4>
        </CardHeader>
        <Image removeWrapper alt='Project 2 Photo' className='z-0 w-full h-full object-cover' src='/project2.jpg' />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div className='flex flex-grow gap-2 items-center'>
            <Image alt='Bootstrap icon' className='rounded-full w-10 h-11' src='skills/Bootstrap.png' />
            <div className='flex flex-col'>
              <p className='text-tiny text-white/60'>Portfolio website</p>
              <p className='text-tiny text-white/60'>Basic HTML, CSS & Bootstrap</p>
            </div>
          </div>
          <Button
            as='a'
            radius='full'
            size='sm'
            href='http://ward-portfolio.be/project2/root/index.html'
            target='_blank'
            rel='noopener noreferrer'>
            Visit
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ErvaringCards
