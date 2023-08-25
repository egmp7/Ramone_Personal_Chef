import IndexVisuals from '@/src/components/IndexVisuals';
import { data } from './messages.js';
import parse from 'html-react-parser';

export default function Index() {

  return (
    <>
      <main className='flex flex-col my-auto'>

        <div className='mt-4'></div>
        <div className='mx-2'>
          <IndexVisuals />
        </div>
        <h1 className="pt-4 text-3xl font-bold text-center text-slate-700">{data.title}</h1>
        <p className="pt-1 italic text-center text-slate-600">{data.slogan}</p>
        <p className="pt-4 px-2 text-justify sm:text-center md:mx-20 text-slate-700">{parse(data.intro)}</p>
        <div className='mt-4'></div>
      </main >
    </>
  )
}
