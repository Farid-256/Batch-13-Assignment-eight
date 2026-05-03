import Link from "next/link"


// Not-found-page
const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[80vh] gap-5">

            <h1 className="text-9xl font-black text-green-600">404</h1>

            <h2 className="text-3xl font-bold text-gray-800">Page Not Found!</h2>

            <p className="text-gray-500 text-lg">The page you are looking for does not exist.</p>

            <Link href="/">
                <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition cursor-pointer">
                    Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound