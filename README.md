# 322-labo2

## Usage

Modify the `backend/db.json` with the data you need.

Run `docker compose up -d` to start the application with docker

> [!NOTE]
> You need to run Angular CLI commands within docker

## Docker cheatsheet

### Start the app

```bash
docker compose up -d
```

or the GUI

### Execute a command in the container

```bash
docker exec -it <container_name> <your_command>
```

> [!NOTE] > _Exemple: Enter the container shell_
>
> ```bash
> docker exec -it <container_name> sh
> ```
