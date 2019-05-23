# Docker commands

## Run
_run command with params_
```bash
docker run busybox echo hi there
docker run busybox ls
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

## Build
_build an image_
```bash
docker build .
```

_build an image with tag_
```bash
docker build -t dideex/name:tag .
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
```dashe
docker stop [container id]
docker kill [container id]
```