# RESTful API client dockerized with React

This is a basic Hello-Wolrd application.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- A browser.
- Internet access.
- Docker & Docker-compose installed.
- Git installed.


## Set up

It is assumed it is used linux environment.

### Prepare

Clone this repository.

```bash
git clone https://github.com/federicozacayan/restful-api-react.git .
```
### Run

Execute the following command in the root folder.
```bash
sudo docker-compose up
```

### Stop

To stop the server press `CTRL+C`.

### Clean your disk

Execute the following command in the root folder to remove container.
```bash
sudo docker-compose down
```
Execute the following command in the root folder to remove the images.
```bash
sudo docker rmi react:local node:12.4
```



## Tutorial

You can find a tutorial of this project in the following site.

[https://federicozacayan.github.io/tutorial/restful-api-react/](https://federicozacayan.github.io/tutorial/restful-api-react/)

## Usage

Open the index.html file with a browser.

- Bring 10 user (Automatically).
- Create a new user.
- Update a user.
- Delete a user.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
