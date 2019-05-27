# Docker commands

## Run
_command run with params_
```bash
docker run busybox echo hi there
docker run busybox ls
```

_container run with port mapping_
```bash
docker run -p 80:3000 [container id]
```

_separated run_
```bash
docker create hello-world
docker start -a [container id]
```

_get stdout from the container_
```bash
docker logs [container id]
```

_run command inside the container_
```bash
docker exec -it [container id] [command]
docker exec -it 4e3d15293585 sh
docker run -it alpine sh
```

_run container on background_
```bash
docker run -d [container id]
```

## Build
_build an image_
```bash
docker build .
```

_build an image with tag_
```bash
docker build -t dideex/name:tag .
```

_build with custom Dockerfile_
```bash
docker build -f Dockerfile.dev
```


## Compose

_run composed images_
```bash
docker-compose up
docker-compose up --build
```

_stop the running composed containers_
```bash
docker-compose down
```

_compose status(depends on current directory)_
```bash
docker-compose ps
```

## Common
_show running containers_
```bash
docker ps
docker ps --all
```

_commit a command into container_
```bash
docker commit -c 'CMD ["redis-server"]' [container id]
```

_clean cache and other staff_
```bash
docker system prune
```

_shutdown the container_
```bash
docker stop [container id]
docker kill [container id]
```

## Volumes

_add spareted volume to the container_
```bash
docker run -p 80:3000 -v /app/node_modules -v $(pwd):/app [container id]
# for docker toolbox
docker run -p 80:3000 -v /app/node_modules -v /c/frontend/:/app [container id]
```