package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.Event;
import com.Nori.Preschool.Nori.Preschool.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepo;

    public Event addEvent(Event event) {
        return eventRepo.save(event);
    }

    public Event updateEvent(Long id, Event updated) {
        return eventRepo.findById(id).map(e -> {
            e.setTitle(updated.getTitle());
            e.setDate(updated.getDate());
            e.setDescription(updated.getDescription());
            return eventRepo.save(e);
        }).orElseThrow(() -> new RuntimeException("Event not found"));
    }

    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    public void deleteEvent(Long id) {
        eventRepo.deleteById(id);
    }

}
