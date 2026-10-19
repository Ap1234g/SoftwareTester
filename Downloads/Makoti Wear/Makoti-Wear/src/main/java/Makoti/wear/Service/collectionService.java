package Makoti.wear.Service;



import Makoti.wear.Repository.collectionRepository;
import Makoti.wear.entity.collection;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class collectionService {

        private final collectionRepository collectionRepository;

        public collectionService(collectionRepository collectionRepository) {
            this.collectionRepository = collectionRepository;
        }

        public collection createCollection(collection collection) {
            return collectionRepository.save(collection);
        }

        public List<collection> getAllCollections() {
            return collectionRepository.findAll();
        }

        public collection getCollectionById(Long id) {
            return collectionRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Collection not found"));
        }

        public collection updateCollection(Long id, collection collection) {

            collection existing = getCollectionById(id);

            existing.setBooking(collection.getBooking());
            existing.setDress(collection.getDress());
            existing.setCollectionStatus(collection.getCollectionStatus());

            return collectionRepository.save(existing);
        }

        public void deleteCollection(Long id) {
            collectionRepository.deleteById(id);
        }


}
