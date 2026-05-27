# Url Shortener (Raccourcissement d’URLs)

# Stack 

— Backend : NestJS
— Frontend : Next.js ou React
— Base de donn´ees : Prisma + PostgreSQL
— Outils : Docker, TypeScript, Git


# Prerequis 
docker 
bun 

# Etapes a suivre pour lancer le projet 

Etape 1 : clonez le repo 
Etape 2 : copier le fichier d'env
```bash
cp .env.example .env
```
Etape 3 : Lancer la bd
```bash
docker compose up db -d
```
Etape 4 : installation + lancement backend
```bash
cd backend
bun install
bunx prisma migrate dev
bun run start:dev
```
Etape 5 :  installation + lancement frontend

```bash
cd frontend
bun install
bun run dev
```
Etape 6 :  sur votre navigateur  coller ce lien : [http://localhost:3000](http://localhost:3000)

# TEST
Backend :

```bash
cd backend
bun run test
```

Frontend :

```bash
cd frontend
bun run test
```









