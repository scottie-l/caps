# caps

## Project: caps

v 1.0.0

---

### Deployed on:

Local machine

---

### Web Application:

Setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does. The following user/developer stories detail the major functionality for this phase of the project.

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.
- As a developer, I want to use industry standards for managing the state of each package.
- As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

---

#### Tools Used:

Microsoft Visual Studio

- Node.js
- Express

---

#### Getting Started:

Clone this repository to your local machine.

~~~
git clone https://github.com/YourRepo/YourProject.git
~~~

Once downloaded, you can either use the dotnet CLI utilities or Visual Studio 2017 (or greater) to build the web application.

~~~
cd YourRepo/YourProject
`npm i`
~~~

Install all dependencies needed for the project.

~~~
Database
~~~

explain how to use the database *

~~~
cd YourRepo/YourProject
npm start
~~~

---

#### Usage:

 CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

---

#### Data Flow (Frontend, Backend, REST API)

1. The vendor will notify driver of package to be picked up through event pool.
2. The driver will pick up, which will notify vendor of pick up and package in transit.
3. Driver delivers package which notifies vendor of delivery.
4. Vendor can notify customer of delivery.

---

#### Data Model

[UML](assets/caps.png)

#### Overall Project Schema

Events are used to alert vendors, drivers and customers of orders through the use of event pools and loggers. The driver and the vendor each talk to the hub which distrubutes the information to the neccessary party(s).

---

Author: Scott Lease
