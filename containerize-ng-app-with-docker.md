# Create a Docker image from your Angular application, publish and consume it from the Docker Hub

## Creating new Angular application

```bash
ng new ng7-hello-world
cd ng7-hello-world
```

To ensure it compiles correctly and displays in the browser: `ng serve --open`

## Compiled and create the optimised production one:

```bash
ng build --prod
```

## Creating a Docker Image

use Nginx to serve the compiled application. create docker file: `Dockerfile`
and put the following content to it:

```js
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/ .
```

create a nginx configuration file `nginx.conf` and put the following in it:
```js
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    server {
        listen 80;
        server_name  localhost;

        root   /usr/share/nginx/html;
        index  index.html index.htm;
        include /etc/nginx/mime.types;

        gzip on;
        gzip_min_length 1000;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

## Build docker images

Never try to run npm install or yarn install inside the image. You should always aim to serve the final production builds inside your Docker images.

Now, let’s build the image and call it `ng7-hello-world`:

```bash
sudo docker image build -t ng7-hello-world .
```

Once it is complete, feel free to test the image is there, by running the next command:
```bash
sudo docker image ls
```

## Test the image.
Run the command below to create a container and map it to the port 3000:
```bash
sudo docker run -p 3000:80 --rm ng7-hello-world
```
If you now navigate to the `http://localhost:3000/ng7-hello-world`, you should get your initial Angular application up and running there.

## Publishing to Docker Hub

Now, let’s try to publish our image to Docker Hub so that other users can use it.

You should have a Docker Hub account to publish images. The account is free, and you can create it here: `https://hub.docker.com/`

Once you have an account, run the login command in the terminal app and fill the username and password to be able publishing images:
```bash
sudo docker login
```

Publishing your image is easy. Just run the following command in the root folder of your project, and replace the account value with your Docker Hub username.
```bash
sudo docker image build -t your-account/ng7-hello-world:1.0 .
```

That creates a new image, ready to be deployed for your account. Use the next command to publish it, and don’t forget to use your Docker Hub username instead of the account value.
```bash
sudo docker push your-account/ng7-hello-world:1.0
```
The process should be high-speed, and in a few seconds, your image is going to be public and available for use.

## Running from Docker Hub

Now, as you project is published, you or any other person can run it locally by utilising the following command:
```bash
sudo docker run -p 3000:80 your-account/ng7-hello-world:1.0
```

To quickly test the container and automatically clean everything up once it got stopped, you can add the--rm switch:
```bash
sudo docker run -p 3000:80 --rm your-account/ng7-hello-world:1.0
```

Finally, to use the `docker-compose.yml` file with your published image, just remove the “build” option and point the image value to the published version:
```bash
image: 'your-account/ng7-hello-world'
```

## Docker Compose

At some point, you will most probably end up with multiple containers each serving a particular need, for example, a separate backend server, a database server and so forth.

Here’s a simple `docker-compose.yml` file you can prepare as a template for your Angular application:
```js
version: '3.1'

services:
    app:
        image: 'ng7-hello-world'
        build: '.'
        ports:
            - 3000:80
```

Note the build entry provided for development purposes. That means we are always going to build the local image if it is not available. You can remove this line later on once you start publishing images to Docker Hub.

Now use the next command to build the image and run it in a container:
```bash
docker-compose up
```
As before, navigate to `http://localhost:3000/ng7-hello-world` to ensure the application runs as expected.

Once you are done playing with the application, you can clean up everything using the next command:
```bash
docker-compose down
```

If you want to remove everything, including the image created earlier, use the following command:
```bash
docker-compose down --rmi all
```

Next time when you run the docker-compose up command, you may see the following message:

WARNING: Image for service app was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.

That is a proof that Docker tool automatically builds a new image if it is not available.


## list and remove image
```bash
sudo docker images -a
sudo docker rmi test1
sudo docker rmi image_id
```

