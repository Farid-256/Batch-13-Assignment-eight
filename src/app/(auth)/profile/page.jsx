'use client'
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Profile = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    const router = useRouter()

    useEffect(() => {
        if (!isPending && !user) {
            router.push('/login')
        }
    }, [user, isPending, router])

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <h3 className="text-2xl font-bold text-gray-500">Loading...</h3>
            </div>
        )
    }

    if (!user) return null

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-amber-300 text-center">

                <div className="flex justify-center mb-5">
                    <Image src={user?.image || 'https://i.ibb.co/4pDNDk1/avatar.png'} height={100}
                        width={100} alt={user?.name} className="rounded-full border-4 border-green-500 object-cover"/>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-500 mt-2">{user.email}</p>

                <Link href='/profile/update'>
                    <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
                        Update Profile
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Profile