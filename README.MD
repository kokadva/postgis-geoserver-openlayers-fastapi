## Simple Map Editor

### Setup CORS on geoserver:
1. Start containers: `docker-compose up`
2. Log in to container: `docker exec -it <mycontainer> bash`
3. Install vim: 
    * `apt update` 
    * `apt install vim -y`
4. Open config file: `vim /usr/local/tomcat/conf/web.xml`
5. Paste content of the `CORS-data.xml` file in it
6. Stop containers: `docker stop $(docker ps -a -q)`
7. Start containers: `docker-compose up`

