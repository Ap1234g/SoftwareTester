package Makoti.wear.Controller;


import Makoti.wear.Service.collectionService;
import Makoti.wear.entity.collection;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/collections")
    public class collectionController {

        private final collectionService collectionService;

        public collectionController(collectionService collectionService) {
            this.collectionService = collectionService;
        }

        @PostMapping
        public ResponseEntity<collection> createCollection(
                @Valid @RequestBody collection collection) {

            return ResponseEntity.ok(
                    collectionService.createCollection(collection)
            );
        }

        @GetMapping
        public ResponseEntity<List<collection>> getAllCollections() {
            return ResponseEntity.ok(collectionService.getAllCollections());
        }

        @GetMapping("/{id}")
        public ResponseEntity<collection> getCollectionById(
                @PathVariable Long id) {

            return ResponseEntity.ok(
                    collectionService.getCollectionById(id)
            );
        }

        @PutMapping("/{id}")
        public ResponseEntity<collection> updateCollection(
                @PathVariable Long id,
                @Valid @RequestBody collection collection) {

            return ResponseEntity.ok(
                    collectionService.updateCollection(id, collection)
            );
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteCollection(
                @PathVariable Long id) {

            collectionService.deleteCollection(id);

            return ResponseEntity.noContent().build();
        }


}
