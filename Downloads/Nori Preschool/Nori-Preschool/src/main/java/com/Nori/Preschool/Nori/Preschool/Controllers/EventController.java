package com.Nori.Preschool.Nori.Preschool.Controllers;


import com.Nori.Preschool.Nori.Preschool.Model.Event;
import com.Nori.Preschool.Nori.Preschool.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("http://localhost:8080/api/events")
@CrossOrigin(origins = "*")
@RestController
public class EventController {
    @Autowired
    private EventRepository eventRepo;

    // 📅 Admin adds event
    @PostMapping("http://localhost:8080/api/add")
    public Event addEvent(@RequestBody Event event) {
        return eventRepo.save(event);
    }

    // ✏️ Admin updates event
    @PutMapping("http://localhost:8080/api/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable Long id, @RequestBody Event updated) {
        return eventRepo.findById(id).map(event -> {
            event.setTitle(updated.getTitle());
            event.setDate(updated.getDate());
            event.setDescription(updated.getDescription());
            return ResponseEntity.ok(eventRepo.save(event));
        }).orElse(ResponseEntity.notFound().build());
    }

    // 🗓️ All users can view
    @GetMapping("http://localhost:8080/api/all")
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    // ❌ Admin deletes
    @DeleteMapping("http://localhost:8080/api/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        eventRepo.deleteById(id);
        return ResponseEntity.ok("Event removed");
    }

}
