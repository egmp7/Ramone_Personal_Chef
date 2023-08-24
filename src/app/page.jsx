import IndexVisuals from '@/src/components/IndexVisuals';
import { data } from './messages.js';
import parse from 'html-react-parser';

export default function Index() {

  return (
    <>
      <main className='mt-4 lg:mt-16'>
        <IndexVisuals />
        <h1 className="pt-4 text-3xl font-bold text-center">{data.title}</h1>
        <p className="pt-1 italic text-center">{data.slogan}</p>
        <p className="pt-2 px-2 text-justify sm:text-center md:mx-20">{parse(data.intro)}</p>
          
      </main >
    </>
  )
}
