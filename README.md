## About

This project is created following the Youtube tutorial ["Learn Drizzle In 60 Minutes"](https://www.youtube.com/watch?v=7-NZ0MlPpJA) by **Web Dev Simplified**.

### Environment file

Create .env with the following env var.

```
DATABASE_URL=
```

I was using [Neon](https://neon.tech/) service and I had to copy the Connection String to use it in the env var.

## Schema generate

```
npm run db:gen
```

## Schema migration

```
npm run db:migrate
```

## Run project

```
npm run dev
```
