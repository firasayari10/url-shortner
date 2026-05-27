# Url Shortener (Raccourcissement d’URLs)

# Stack 

Backend : NestJS
Frontend : Next.js ou React
Base de donn´ees : Prisma + PostgreSQL
Outils : Docker, TypeScript, Git


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

# Fonctionalité de base  ( prise du fichier du test technique ): 
1. Cr´eer une URL raccourcie :
— Depuis une page de la webapp, l’utilisateur saisit une URL longue (ex : https://exemple.com/blog/1234)
— Le syst`eme g´en`ere une URL courte (ex : localhost:3000/abc123) et affiche l’URL courte
2. Rediriger vers l’URL originale :
— Quand un utilisateur visite l’URL raccourcie (ex : localhost:3000/abc123), il est redirig´e
vers l’URL originale
3. Lister les URLs raccourcies :
— Depuis une page de la webapp, l’utilisateur peut visualiser la liste de toutes les correspondances

# Fonctionalité ajouté : 
1. verifictaion de la validité des urls avant de demarrer le processus de raccourcissement  ( sur le front : loading et status et blockage du boutton si le lien est invalide )









