'use client'
import 'animate.css'
import bannar from '@/assets/bannarImg.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Bannar = () => {
    return (
        <section className='px-4 md:px-10 lg:px-20 py-6'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-10 border border-amber-200 bg-amber-50 rounded-3xl p-5 md:p-10'>

                <div className='space-y-5 text-center lg:text-left animate__animated animate__fadeInLeft'>

                    <h1 className="text-4xl font-bold">
                        Book Healthy Cows & Goats
                    </h1>

                    <h1 className="text-4xl font-bold">
                        for Qurbani - Fast & Easy
                    </h1>

                    <div className='py-5'>
                        <Link href='/allAnimals' className='px-6 md:px-10 py-2 bg-blue-600 hover:bg-gray-600 text-white mt-5 md:mt-10 rounded-lg animate__animated animate__pulse animate__infinite'>
                            All Animals
                        </Link>
                    </div>

                </div>

                {/* Image */}
                <div className='animate__animated animate__fadeInRight'>
                    <Image className='rounded-xl w-full h-auto object-cover' src={bannar} alt='bannar' priority/>
                </div>
            </div>
        </section>
    )
}
export default Bannar