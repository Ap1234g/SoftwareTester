package com.Nori.Preschool.Nori.Preschool.Controllers;


import com.Nori.Preschool.Nori.Preschool.Services.CustomUserDetailsService;
import com.Nori.Preschool.Nori.Preschool.Model.*;
import com.Nori.Preschool.Nori.Preschool.Repository.*;
import com.Nori.Preschool.Nori.Preschool.Services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@PreAuthorize("hasRole('SUPER_ADMIN')") // Optional: restrict who can create admins


@RequestMapping("http://localhost:8080/api/admin")
@CrossOrigin
@RestController
public class AdminController {

    private final TeacherRepository teacherRepo;
    private final LearnerRepository learnerRepo;
   private final EventRepository eventRepo;
   private final AdmissionFormRepository admissionRepo;
   private final ContactFormRepository contactRepo;
    private final PaymentRepository paymentRepo;

    public AdminController(TeacherRepository teacherRepo, LearnerRepository learnerRepo ,PaymentRepository paymentRepo , ContactFormRepository contactRepo ,EventRepository eventRepo,
                   AdmissionFormRepository admissionRepo       ) {
        this.teacherRepo = teacherRepo;
        this.learnerRepo = learnerRepo;
        this.eventRepo = eventRepo;
        this.contactRepo = contactRepo;
        this.paymentRepo= paymentRepo;
        this.admissionRepo = admissionRepo;

    }

    // Teachers CRUD
    @PostMapping("http://localhost:8080/api/teacher")
    public Teacher addTeacher(@RequestBody Teacher t) { return teacherRepo.save(t); }
    @DeleteMapping("http://localhost:8080/api/teacher/{id}") public ResponseEntity<?> delTeacher(@PathVariable Long id) { teacherRepo.deleteById(id); return ResponseEntity.ok().build(); }

    // Learners CRUD
    @PostMapping("http://localhost:8080/api/learner") public Learner addLearner(@RequestBody Learner l) { return learnerRepo.save(l); }
    @PutMapping("http://localhost:8080/api/learner/{id}") public ResponseEntity<?> updateLearner(@PathVariable Long id, @RequestBody Learner payload){
        Optional<Learner> opt = learnerRepo.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
        Learner exist = opt.get();
        exist.setFullName(payload.getFullName());
        exist.setAge(payload.getAge());
        exist.setGrade(payload.getGrade());
        exist.setDateOfBirth(payload.getDateOfBirth());
        exist.setAllergies(payload.getAllergies());
        exist.setGender(payload.getGender());
        exist.setPhysicalAddress(payload.getPhysicalAddress());
        exist.setDisable(payload.getDisable());
        exist.setMedicalCondition(payload.getMedicalCondition());
        exist.setPreschool(payload.getPreschool());
        exist.setId(payload.getId());

        learnerRepo.save(exist);
        return ResponseEntity.ok(exist);


    }
    private UserService userService;

    @PostMapping("http://localhost:8080/api/register")
    public ResponseEntity<?> registerAdmin(@RequestBody CustomUserDetailsService.AdminRegisterRequest adminregisterRequest) {
        User newAdmin = userService.registerAdmin(adminregisterRequest);
        return ResponseEntity.ok("Admin registered. Temporary password sent to email.");
    }




    @DeleteMapping("api/learner/{id}") public ResponseEntity<?> removeLearner(@PathVariable Long id){ learnerRepo.deleteById(id); return ResponseEntity.ok().build(); }

    // Calendar events
   @PostMapping("http://localhost:8080/api/event") public Event addEvent(@RequestBody Event e){e.setDate(e.getDate() == null ? LocalDate.now().toString() : e.getDate()) ;
        return eventRepo.save(e);
    }
   @GetMapping("http://localhost:8080/api/events") public List<Event> allEvents(){ return eventRepo.findAll(); }

    // Admission applications - view & update status
   @GetMapping("http://localhost:8080/api/admissions") public List<AdmissionForm> viewAdmissions(){ return admissionRepo.findAll(); }
   @PutMapping("http://localhost:8080/api/admission/{id}/status") public ResponseEntity<?> setAdmissionStatus(@PathVariable Long id, @RequestBody Map<String,String> body){
     String status = body.get("status"); var opt = admissionRepo.findById(id);
        if (opt.isEmpty()) return ResponseEntity.notFound().build();
       AdmissionForm a = opt.get();
        a.setStatus(status);
        admissionRepo.save(a);
       return ResponseEntity.ok(a);
    }

    // Contact messages
   @GetMapping("http://localhost:8080/api/contacts") public List<ContactForm> contacts(){ return contactRepo.findAll();
    }

    @GetMapping("http://localhost:8080/api/dashboard")
    public ResponseEntity<String> getAdminDashboard() {
        return ResponseEntity.ok("Welcome to the Admin Dashboard");
    }


    // Update progress for a learner
   @PutMapping("http://localhost:8080/api/learner/{id}/progress") public ResponseEntity<?> Progress(@PathVariable Long id, @RequestBody Map<String,String> b){
      var opt = learnerRepo.findById(id);
     if (opt.isEmpty()) return ResponseEntity.notFound().build();Learner l = opt.get();
      l.setProgress(b.get("progress"));
        learnerRepo.save(l);
       return ResponseEntity.ok(l);
   }

    // Teacher schedule
   @PostMapping("http://localhost:8080/api/schedule") public Teacher assignSchedule(@RequestBody Teacher s){ return teacherRepo.save(s); }

    @GetMapping("http://localhost:8080/api/schedules") public List<Teacher> allSchedules(){ return teacherRepo.findAll(); }

    // Payment proofs
  @GetMapping("http://localhost:8080/api/payments") public List<Payment> payment(){ return paymentRepo.findAll();

    }
   @PutMapping("http://localhost:8080/api/payments/{id}/confirm") public ResponseEntity<?> confirmPayment(@PathVariable Long id){

       var opt = paymentRepo.findById(id);

      if (opt.isEmpty()) return ResponseEntity.notFound().build();
      Payment p = opt.get(); p.setPaid(true);
        paymentRepo.save(p);
        return ResponseEntity.ok(p);
    }
}


