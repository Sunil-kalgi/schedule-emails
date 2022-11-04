# schedule-emails

Installation

Clone the repo:
https://github.com/Sunil-kalgi/schedule-emails.git

cd schedule-emails

Install the dependencies:
npm install

Set the environment variables:
# open .env and modify the environment variables (if needed)


Commands
Running locally:
npm run start
npm start

Running in production:

Project Structure

app\        
 |--controller\     # Route controllers (controller layer) with Business logic (service)
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--index.js        # App entry point


API Endpoints
List of available routes: User routes:
POST /API/V1/create/schedule/email/service - create 
GET /API/V1/read/schedule/email/service - read
PUT /API/V1/update/schedule/email/service/byId/:id - update 
DELETE /API/V1/delete/schedule/email/service/byid/:id - delete 
  
