# SoftwareTester
API testing using Postman for a Bearer Token preschool management system
## Test Coverage & Structure

The Postman collection is organised using logical folders inside the collection:

### Positive Test Scenarios
- Valid admin login
- Successful learner creation
- Update learner details
- Retrieve learner and parent records

### Negative & Authorization Test Scenarios
- Login with invalid credentials (401)
- Access secured APIs without token (401)
- Update learner with invalid ID (404)
- Delete parent with non-existing ID
- Role-based access validation

### Folder Structure Inside Postman
- Auth
- Learners
- Parents
- Teachers
- Progress
- API Test Cases
  - Auth Test Cases
  - Learner CRUD Test Cases
  - Parent CRUD Test Cases


