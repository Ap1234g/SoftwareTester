package Makoti.wear.Controller;




import Makoti.wear.Service.clientService;
import Makoti.wear.entity.client;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/clients")
    public class clientController {

        private final clientService clientService;

        public clientController(clientService clientService) {
            this.clientService = clientService;
        }

        @PostMapping
        public ResponseEntity<client> createClient(
                @Valid @RequestBody client client) {

            return ResponseEntity.ok(clientService.createClient(client));
        }

        @GetMapping
        public ResponseEntity<List<client>> getAllClients() {
            return ResponseEntity.ok(clientService.getAllClients());
        }

        @GetMapping("/{id}")
        public ResponseEntity<client> getClientById(
                @PathVariable Long id) {

            return ResponseEntity.ok(clientService.getClientById(id));
        }

        @PutMapping("/{id}")
        public ResponseEntity<client> updateClient(
                @PathVariable Long id,
                @Valid @RequestBody client client) {

            return ResponseEntity.ok(clientService.updateClient(id, client));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteClient(
                @PathVariable Long id) {

            clientService.deleteClient(id);

            return ResponseEntity.noContent().build();
        }

}
