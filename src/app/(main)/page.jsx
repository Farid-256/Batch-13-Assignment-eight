import AnimalCard from "@/components/AnimalCard"
import Link from "next/link"

const getData = async () => {
  const res = await fetch('https://batch-13-assignment-eight.vercel.app/data.json')
  return res.json()
}

export default async function Home() {
  const allAnimal = await getData()
  const animalData = allAnimal.slice(0, 8)


  return (
    <div>
      <h3 className="text-3xl text-start pl-20">Total Animal: {animalData.length} </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20 py-10">
        {animalData.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)}
      </div>

      <div className="flex justify-center">
        <Link className="px-8 py-2 bg-blue-900 text-white rounded-3xl" href='/allAnimals'>Our All Animals</Link>
      </div>

    </div>
  );
}
