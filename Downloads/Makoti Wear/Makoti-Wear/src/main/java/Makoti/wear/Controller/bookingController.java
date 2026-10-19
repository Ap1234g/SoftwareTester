package Makoti.wear.Controller;

import Makoti.wear.Service.bookingService;
import org.springframework.web.bind.annotation.RestController;
import Makoti.wear.entity.booking;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
public class bookingController {


    private final bookingService bookingService;

        public bookingController(bookingService bookingService) {
            this.bookingService = bookingService;
        }

        @PostMapping
        public ResponseEntity<booking> createBooking(
                @Valid @RequestBody booking booking) {

            return ResponseEntity.ok(bookingService.createBooking(booking));
        }

        @GetMapping
        public ResponseEntity<List<booking>> getAllBookings() {
            return ResponseEntity.ok(bookingService.getAllBookings());
        }

        @GetMapping("/{id}")
        public ResponseEntity<booking> getBookingById(
                @PathVariable Long id) {

            return ResponseEntity.ok(bookingService.getBookingById(id));
        }

        @PutMapping("/{id}")
        public ResponseEntity<booking> updateBooking(
                @PathVariable Long id,
                @Valid @RequestBody booking booking) {

            return ResponseEntity.ok(bookingService.updateBooking(id, booking));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteBooking(
                @PathVariable Long id) {

            bookingService.deleteBooking(id);

            return ResponseEntity.noContent().build();
        }




}
