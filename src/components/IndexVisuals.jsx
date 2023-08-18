import Image from 'next/image';

export default function IndexVisuals() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {/* Animation */}
        <div className = "hidden relative shrink-0 sm:block">
          {/* World */}
          <Image
            className = "absolute top-10 left-14 rounded-full"
            src="/world.gif"
            width={80}
            height={80}
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