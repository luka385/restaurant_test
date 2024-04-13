# RESTAURANT RESERVATION

Hello everyone, this is an API that manages restaurant reservations, allowing customers to search availability, book tables, and cancel reservations. I used NodeJS for the backend, implementing REST design patterns and SQL database connectivity for handling reservation data, also implementing Hexagonal architecture. If there are any errors, please let me know.

## Installation

To use this application, ensure that you have Node.js and MySQL installed on your local machine.

### Installing Node.Js

- Visit the official Node.js webside: [https.//nodejs.org/](https://nodejs.org)
- Dowload the recommended version for your operating system.
- Follow the installation instructions provided on the webside.

### Application Installation

- Clone this repository to your local machine.
- Open terminal and navigate to application directory.
- Install the dependencies whit the following command:

```bash

npm install

```

### Setup Prisma

1. Install Prisma globally by running:

```bash

sudo npm install -g prisma

```

2. Configure your MySQL database connection in the **`.env`** file. Ensure you have the necessary
   enviroment variables set up, such as:

```bash

DATABASE_URL="mysql://user:password@localhost:3306/restaurant"

```

3. Generate Prisma client by running:

```bash

npx prisma generate

```

### Using the Application

- After setting up Prisma and configuring the `.env` file, you can start using application.
- Run your application using the appropriate command, such as:

```bash

npm run dev

```
