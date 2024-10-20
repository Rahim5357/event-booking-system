import { useEffect } from "react";
import BookingCard from "./BookingCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookedEvents } from "../redux/actions/bookingActions";

const MyBooking = () => {
const dispatch = useDispatch();
const bookedEventList = useSelector(state => state.bookedEvents);
    useEffect(() => {
        dispatch(getBookedEvents())
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {
                bookedEventList?.map((event, index) => (
                    <div key={index}>
                        <BookingCard event={event} />
                    </div>
                ))
            }
        </div>
    )
}

export default MyBooking;