package Makoti.wear.Service;


import Makoti.wear.Repository.clientRepository;
import Makoti.wear.entity.client;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class clientService {

        private final clientRepository clientRepository;

        public clientService(clientRepository clientRepository) {
            this.clientRepository = clientRepository;
        }

        public client createClient(client client) {
            return clientRepository.save(client);
        }

        public List<client> getAllClients() {
            return clientRepository.findAll();
        }

        public client getClientById(Long id) {
            return clientRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Client not found"));
        }

        public client updateClient(Long id, client client) {

            client existing = getClientById(id);

            existing.setName(client.getName());
            existing.setSurname(client.getSurname());
            existing.setAddress(client.getAddress());

            return clientRepository.save(existing);
        }

        public void deleteClient(Long id) {
            clientRepository.deleteById(id);
        }

}
