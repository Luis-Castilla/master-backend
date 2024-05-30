# Node.js Server

This is a simple Node.js server that fetches the top 10 most popular repositories of a user from GitHub.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/download/)

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository ```git clone```
2. Navigate into the cloned repository ```cd Ejercicio1```
3. Install the dependencies ``` npm install ```
4. Start the server ``` npm start ```

Now, the server is running at `http://localhost:3000`.

## Testing the API

You can test the API endpoint using the following `curl` command:

```bash
curl --location 'http://localhost:3000/api/v1/github/user/google'