'use client'
import AnimalCard from "@/components/AnimalCard";
import { useState } from "react";

const animalList = []

const AllAnimals = () => {
    const [sortType, setSortType] = useState("default")
    const [animalData, setAnimalData] = useState([])

    if (animalData.length === 0) {
        fetch('https://batch-13-assignment-eight.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setAnimalData(data))
    }

    const sortedAnimals = [...animalData].sort((a, b) => {
        if (sortType === "low") return a.price - b.price
        if (sortType === "high") return b.price - a.price
        return 0
    })

    return (
        <div>
            <div className="flex justify-between items-center px-20 py-5">
                <h3 className="text-3xl">Total Animal: {animalData.length}</h3>

                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="border border-green-500 p-2 rounded-lg focus:outline-none cursor-pointer">
                    <option value="default">Sort By Price</option>
                    <option value="low">Price: Low → High</option>
                    <option value="high">Price: High → Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20 py-10">
                {sortedAnimals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};

export default AllAnimals