# Fullcycle - Docker - Desafio Node.js

This is a simple project to solve the challenge of the Fullcycle course. The challenge is to create a simple Node.js application that returns the message "Full Cycle Rocks!", in a H1 tag, and a list of names from a Mysql database.

- [Fullcycle - Docker - Desafio Node.js](#fullcycle---docker---desafio-nodejs)
  - [Pre Requisites](#pre-requisites)
  - [Fateures](#fateures)
  - [Running the project](#running-the-project)
  - [Contribuiting](#contribuiting)
  - [License](#license)
  - [Contact](#contact)

## Pre Requisites

To run the project, you need to have the following tools installed:

- Docker
- Docker Compose

## Fateures

The project has the following features:

- A simple Node.js application that returns the message "Full Cycle Rocks!" in a H1 tag and a list of names from a Mysql database.
- To each get request, the application will insert a new random name in the database, until the database reaches 20 names.
- A Mysql database to store the names.
- A Nginx server acts as a reverse proxy to the Node.js application.
- A Dockerfile to build the Node.js application image.
- A Dockerfile to build the Nginx server image.
- A docker-compose file creates three services: the Node.js application, the Mysql database, and the Nginx server.

## Running the project

To run the project, you need to run the following command:

```bash
docker-compose up
```

If you want to run the project in the background, you can run the following command:

```bash
docker-compose up -d
```

To stop the project, you can run the following command:

```bash
docker-compose down
```

To access the application, you can access the following URL:

<http://localhost:8080>

## Contribuiting

If you want to contribute to this project, you can fork this repository, make your changes and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you want to contact me you can reach me at:

- E-mail: [josenaldo@gmail.com](mailto:josenaldo@gmail.com)
- LinkedIn: [josenaldo](https://www.linkedin.com/in/josenaldo)
- Twitter: [@josenaldomatos](https://twitter.com/josenaldomatos)
