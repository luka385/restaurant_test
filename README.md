# RESTAURANT RESERVATION

Hello everyone, this is an API that manages restaurant reservations, allowing customers to search availability, book tables, and cancel reservations. I used NodeJS for the backend, implementing REST design patterns and SQL database connectivity for handling reservation data, also implementing Hexagonal architecture. If there are any errors, please let me know.

## Installation

To use this application, ensure that you have Node.js and MySQL installed on your local machine.

### Installing Node.Js

1. Visit the official Node.js webside: [https.//nodejs.org/](https://nodejs.org)
2. Dowload the recommended version for your operating system.
3. Follow the installation instructions provided on the webside.

### Application Installation

1. Clone this repository to your local machine.
2. Open terminal and navigate to application directory.
3. Install the dependencies whit the following command:

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
