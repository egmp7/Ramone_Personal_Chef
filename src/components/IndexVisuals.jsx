import Image from 'next/image';

export default function IndexVisuals() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        
        <div className="hidden relative shrink-0 sm:block lg:mr-12 my-4">
          {/* World */}
          <Image
            className="absolute bottom-2 left-14 rounded-full"
            src="/world.gif"
            width={90}
            height={90}
            alt="Ramone logo" />

          {/* Cooking Plate */}
          <Image
            src="/cooking_plate.svg"
            width={240}
            height={150}
            alt="Ramone logo" />
        </div>

        {/* Ramone */}
        <Image
          className="rounded-3xl"
          src="/ramone.png"
          width={440}
          height={280}
          alt="ramone picture" />

      </div>
    </>
  )
}