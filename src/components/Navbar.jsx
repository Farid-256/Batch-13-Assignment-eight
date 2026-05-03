'use client'
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
    const pathName = usePathname()
    const { data: session } = authClient.useSession()
    const user = session?.user
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        await authClient.signOut()
    }

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/allAnimals', label: 'All Animals' },
        { href: '/profile', label: 'Profile' },
    ]

    return (
        <nav className="px-6 md:px-20 py-5 bg-amber-50 relative">

            <div className="flex items-center justify-between">

                {/* Logo */}
                <div>
                    <h3 className="font-extrabold">
                        <span className="text-green-600 text-3xl md:text-5xl">Qurbani</span>
                        <span className="text-amber-500 text-3xl md:text-5xl">Hat</span>
                    </h3>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathName === link.href ? 'text-xl font-bold text-blue-700' : 'text-xl font-bold text-gray-700'}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-5">
                    {user ? (
                        <>
                            <Image
                                src={user.image || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                                height={45} width={45}
                                alt={user.name || 'user'}
                                className="rounded-full border-2 border-green-500 object-cover"
                            />
                            <button onClick={handleLogout} className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm cursor-pointer transition">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href='/login' className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm transition">
                                Login
                            </Link>
                            <Link href='/register' className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm transition">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-3xl text-gray-700 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <RxCross1 /> : <IoReorderThreeOutline />}
                </button>

            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 bg-amber-50 px-4 py-5 rounded-xl shadow-lg">

                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                            className={pathName === link.href ? 'text-lg font-bold text-blue-700' : 'text-lg font-bold text-gray-700'}>
                            {link.label}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-3 mt-2">
                        {user ? (
                            <>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={user.image || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                                        height={40} width={40}
                                        alt={user.name || 'user'}
                                        className="rounded-full border-2 border-green-500 object-cover"
                                    />
                                    <span className="font-semibold text-gray-700">{user.name}</span>
                                </div>
                                <button onClick={handleLogout} className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm cursor-pointer transition">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href='/login' onClick={() => setMenuOpen(false)} className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm text-center transition">
                                    Login
                                </Link>
                                <Link href='/register' onClick={() => setMenuOpen(false)} className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm text-center transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;