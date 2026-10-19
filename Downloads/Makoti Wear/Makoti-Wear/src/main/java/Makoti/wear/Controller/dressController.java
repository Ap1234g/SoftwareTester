package Makoti.wear.Controller;


import Makoti.wear.Service.dressService;
import Makoti.wear.entity.dress;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/dresses")

    public class dressController {

        private final dressService dressService;

        public dressController(dressService dressService) {
            this.dressService = dressService;
        }

        @PostMapping
        public ResponseEntity<dress> createDress(
                @Valid @RequestBody dress dress) {

            return ResponseEntity.ok(dressService.createDress(dress));
        }

        @GetMapping
        public ResponseEntity<List<dress>> getAllDresses() {
            return ResponseEntity.ok(dressService.getAllDresses());
        }

        @GetMapping("/{id}")
        public ResponseEntity<dress> getDressById(
                @PathVariable Long id) {

            return ResponseEntity.ok(dressService.getDressById(id));
        }

        @PutMapping("/{id}")
        public ResponseEntity<dress> updateDress(
                @PathVariable Long id,
                @Valid @RequestBody dress dress) {

            return ResponseEntity.ok(dressService.updateDress(id, dress));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteDress(
                @PathVariable Long id) {

            dressService.deleteDress(id);

            return ResponseEntity.noContent().build();
        }

}
