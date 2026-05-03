'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/'
        });
    }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {



        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        })

        if (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-amber-300">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>

                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5">

                    <div>
                        <input type="email" {...register("email", { required: 'Email is required' })}
                            placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />

                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input type="password"{...register("password", { required: 'Password is required' })} placeholder="Your Password" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />

                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
                        Login
                    </button>

                    <button type='button' onClick={handleGoogleSignIn} className="w-full bg-blue-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">Google Login</button>
                </form>

                <p className="text-center text-gray-500 mt-6">
                    Dont have an account?{' '}
                    <Link href="/register" className="text-green-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;