'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleUpdate = async (data) => {
        await authClient.updateUser({
            name: data.name,
            image: data.image,
        })
        router.push('/profile')
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-amber-300">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Update Profile</h2>

                <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-5">

                    <div>
                        <input
                            type="text"
                            defaultValue={user?.name}
                            {...register("name", { required: 'Name is required' })}
                            placeholder="Your Name"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            defaultValue={user?.image}
                            {...register("image", { required: 'Image URL is required' })}
                            placeholder="Your Photo URL"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                    </div>

                    <button type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
                        Update Information
                    </button>

                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;