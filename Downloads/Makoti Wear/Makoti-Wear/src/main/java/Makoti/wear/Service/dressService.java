package Makoti.wear.Service;



import Makoti.wear.Repository.dressRepository;
import Makoti.wear.entity.dress;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class dressService {

        private final dressRepository dressRepository;

        public dressService(dressRepository dressRepository) {
            this.dressRepository = dressRepository;
        }

        public dress createDress(dress dress) {
            return dressRepository.save(dress);
        }

        public List<dress> getAllDresses() {
            return dressRepository.findAll();
        }

        public dress getDressById(Long id) {
            return dressRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Dress not found"));
        }

        public dress updateDress(Long id, dress dress) {

            dress existing = getDressById(id);

            existing.setDressName(dress.getDressName());
            existing.setDressFabric(dress.getDressFabric());
            existing.setClient(dress.getClient());
            existing.setImageUrl(dress.getImageUrl());

            return dressRepository.save(existing);
        }

        public void deleteDress(Long id) {
            dressRepository.deleteById(id);
        }

}
