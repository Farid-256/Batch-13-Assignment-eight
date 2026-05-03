import BookingForm from "@/components/BookingForm";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch('https://batch-13-assignment-eight.vercel.app/data.json')
    return res.json()
}

const AnimalDetails = async ({ params }) => {
    const { id } = await params
    const animalData = await getData()
    const animal = animalData.find(a => a.id === parseInt(id))

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl overflow-hidden">

  
                <div className="relative w-full md:w-1/2 h-96">
                    <Image src={animal.image} alt={animal.name} fill className="object-cover"/>
                </div>


                <div className="flex-1 p-8 space-y-4">
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        {animal.category}
                    </span>

                    <h1 className="text-3xl font-bold text-gray-800">{animal.name}</h1>
                    <p className="text-gray-500">{animal.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Type</p>
                            <p className="font-semibold">{animal.type}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Breed</p>
                            <p className="font-semibold">{animal.breed}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Weight</p>
                            <p className="font-semibold">{animal.weight} kg</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Age</p>
                            <p className="font-semibold">{animal.age} yrs</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Location</p>
                            <p className="font-semibold">📍 {animal.location}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-400 text-xs">Price</p>
                            <p className="font-semibold text-green-600">৳ {animal.price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
                <BookingForm />
            </div>

            <div className="flex justify-center mt-8">
                <Link href="/allAnimals" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                    Back to All Animals
                </Link>
            </div>

        </div>
    );
};

export default AnimalDetails;