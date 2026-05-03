'use client'
import { toast } from "react-toastify";


const BookingForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        toast.success('Your Booking Confermed')
        form.reset()
    }
    return (
        <div className="w-1/2 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-3xl text-center">Booking Form</h2>
                <input className="w-full border border-yellow-400 p-2 rounded-md" type="text" name="name" placeholder="Your Name" required />

                <input className="w-full border border-yellow-400 p-2 rounded" type="email" name="email" placeholder="Your Email" required />

                <input className="w-full border border-yellow-400 p-2 rounded" type="number" name="number" placeholder="Your Phone Number" required />

                <input className="w-full border border-yellow-400 p-2 rounded" type="text" name="address" placeholder="Your current Address" required />

                <button type="submit" className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700" >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;