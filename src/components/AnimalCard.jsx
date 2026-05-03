import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
    return (
        <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-1 border border-amber-300 bg-gray-100">

   
            <div className="relative w-full h-52">
                <Image src={animal.image} alt={animal.name} fill className="object-cover rounded-2xl"/>
                <span className="absolute top-3 left-3 border border-amber-300 bg-gray-100 text-green-400 text-xs px-3 py-1 rounded-full">
                    {animal.category}
                </span>
            </div>


            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{animal.name}</h2>
                <p className="text-sm text-gray-500">{animal.breed} · {animal.type}</p>

                <div className="flex justify-between text-sm text-gray-600 mt-3">
                    <span> {animal.weight} kg</span>
                    <span> {animal.age} yrs</span>
                    <span> {animal.location}</span>
                </div>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{animal.description}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-green-700 font-bold text-lg">
                         {animal.price.toLocaleString()} Taka
                    </span>
                    <Link href={`/animalDetails/${animal.id}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-xl cursor-pointer transition">
                            Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AnimalCard;