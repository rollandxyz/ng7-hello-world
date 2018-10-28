
# Install using the repository

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1

## SET UP THE REPOSITORY
Update the apt package index:
```bash
$ sudo apt-get update
```

Install packages to allow apt to use a repository over HTTPS:
```bash
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
```

Add Docker’s official GPG key:
```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88, by searching for the last 8 characters of the fingerprint.
```bash
$ sudo apt-key fingerprint 0EBFCD88
```

pub   4096R/0EBFCD88 2017-02-22
      Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid                  Docker Release (CE deb) <docker@docker.com>
sub   4096R/F273FCD8 2017-02-22

Use the following command to set up the stable repository.

```bash
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

## INSTALL DOCKER CE

Update the apt package index.
```bash
$ sudo apt-get update
```

Install the latest version of Docker CE, or go to the next step to install a specific version:
```bash
$ sudo apt-get install docker-ce
```

Verify that Docker CE is installed correctly by running the hello-world image.
```bash
$ sudo docker run hello-world
```

This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits.

Docker CE is installed and running. The docker group is created but no users are added to it. You need to use sudo to run Docker commands. Continue to Linux postinstall to allow non-privileged users to run Docker commands and for other optional configuration steps.



### check whether Docker is running is to ask Docker

`docker info`

You can also use operating system utilities, such as `sudo systemctl is-active docker` or `sudo status docker` or `sudo service docker status`.

