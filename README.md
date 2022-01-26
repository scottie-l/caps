# caps

## Project: caps

---

### Deployed on:

[project url here] Heroku

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

Overview of Recent Posts
Overview of Recent Posts

Creating a Post
Post Creation

Enriching a Post
Enriching Post

Viewing Post Details
Details of Post

---

#### Data Flow (Frontend, Backend, REST API)
[Add a clean and clear explanation of what the data flow is. Walk me through it.] Data Flow Diagram

---

#### Data Model

[UML](assets/caps.png)

#### Overall Project Schema
[Add a description of your DB schema. Explain the relationships to me.] Database Schema

---
Author: Scott Lease
