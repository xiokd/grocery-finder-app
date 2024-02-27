# Docker + PostgreSQL + pgAdmin4

This directory contains the Docker Compose file for the local PostgreSQL database instance. The database can be accessed with pgAdmin4.

## Getting Started:
After cloning the repository, run the docker compose file:
```
docker compose up
```
Show currently running containers:
```
docker ps
```
Check IP address of PostgreSQL container (Windows):
```
docker inspect <container id> | findstr "IPAddress"
```
Check IP address of PostgreSQL container (MacOS/Linux):
```
docker inspect <container id> | grep "IPAddress"
```
Open pgAdmin in a browser:
```
http://localhost:5050/
```
Sign into pgAdmin4 with the credentials that appear in the docker compose file:
```
Email Address/ Username: admin@admin.com
Password: password
```
Under the Quick Links section, click on Add New Server. This will prompt a Register - Server window. Under the General tab, give the database connection a name:
```
Name: GroceryDB
```
Inside the Connection tab, give the Host name/address the IP address found in the previous step when checking the PostgreSQL container's IP address.
```
Host name/address: <IP address of container>
```
Add the password to the connection from the docker compose file and click Save Password:
```
Password: password
```
You should now be able to view and manage the database using pgAdmin4.

## Notes:
* The container configuration in the docker compose file does not provide the containers with a static IP address.
* With this configuration, the IP address for the PostgreSQL database container may change causing a connection error when viewing the database.
* As of right now, the current workaround would be to check the IP address of the container and edit the connection details if needed.

## References:
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pgAdmin](https://www.pgadmin.org/)