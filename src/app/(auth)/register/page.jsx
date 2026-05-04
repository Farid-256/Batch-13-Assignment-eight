'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/'
        });
    }

    const handleRegister = async (data) => {

        const { data: res, error } = await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            image: data.photo,
            callbackURL: "/login",
        })

        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success('Account Creat Successfully')
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-amber-300">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

                <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-5">

                    <div>
                        <input
                            type="text" {...register("name", { required: 'Name is required' })} placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input type="text" {...register("photo", { required: 'Photo URL is required' })}
                            placeholder="Your Photo URL" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
                    </div>

                    <div>
                        <input type="email"
                            {...register("email", { required: 'Email is required' })} placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input type="password" {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} placeholder="Your Password" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />

                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
                        Register
                    </button>

                    <button type='button' onClick={handleGoogleSignUp} className="w-full bg-blue-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">Google SignUp</button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-green-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage