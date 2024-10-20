import moment from "moment";

const BookingCard = ({event}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-4xl">{event?.category.charAt(0)}</span>
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{event?.title}</h2>
                <p className="text-gray-600 mb-4">{event?.description}</p>

                {/* Booking details */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">Event Date: {event?.date}</span>
                    <span className="text-green-500 font-bold">Total: ${event?.totalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">Tickets Booked: {event?.quantity}</span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded">{event?.selectedTier}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">Booking Date: {moment(new Date()).format("DD-MM-YYYY")}</span>
                </div>
                <button
                    onClick={() => console.log('Booking details...')}
                    className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300"
                >
                    View Booking
                </button>
            </div>
        </div>

    )
}

export default BookingCard;