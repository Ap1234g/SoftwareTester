package Makoti.wear.Service;




    import Makoti.wear.Repository.bookingRepository;
    import Makoti.wear.entity.booking;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class bookingService {

        private final bookingRepository bookingRepository;

        public bookingService(bookingRepository bookingRepository) {
            this.bookingRepository = bookingRepository;
        }

        public booking createBooking(booking booking) {
            return bookingRepository.save(booking);
        }

        public List<booking> getAllBookings() {
            return bookingRepository.findAll();
        }

        public booking getBookingById(Long id) {
            return bookingRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Booking not found"));
        }

        public booking updateBooking(Long id, booking booking) {

            booking existing = getBookingById(id);

            existing.setBookingDate(booking.getBookingDate());
            existing.setClient(booking.getClient());


            return bookingRepository.save(existing);
        }

        public void deleteBooking(Long id) {
            bookingRepository.deleteById(id);
        }
}
