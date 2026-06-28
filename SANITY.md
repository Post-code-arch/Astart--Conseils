# CMS Sanity — Astarté Conseils

Le site lit son contenu via des *getters* (`lib/content.ts`) qui interrogent
**Sanity si configuré**, et retombent sinon sur le contenu en dur de `lib/*`.
Donc tant que les variables d'environnement ne sont pas posées, le site
fonctionne exactement comme avant.

## Périmètre (Phase 1)
Éditable dans le Studio :
- **Paramètres du site** (`siteSettings`) — pied de page : accroche, fondation, emails, téléphone, adresse
- **Références / missions** (`reference`) — page *Références* (grille filtrable)
- **Formations** (`formation`) — page *Formations* (catalogue + programme dédié)
- **Publications** (`publication`) — page *Ressources*
- **Partenaires** (`partner`) — bandeau *Accueil*

Le reste (heroes, manifeste, doctrine, approche des piliers) reste en code.

## Mise en place

### 1. Créer le projet Sanity
1. Compte sur https://sanity.io (gratuit).
2. **New project** → « Astarté Conseils » → dataset **`production`**.
3. Relever le **Project ID** (Settings → API).
4. **CORS** (Settings → API → CORS origins), *Allow credentials* coché :
   - `http://localhost:3000`
   - l'URL Vercel (preview + prod) et `https://astarte-conseils.org`
5. **Token d'écriture** (pour le seed) : Settings → API → Tokens → *Add API token* → rôle **Editor**.

### 2. Variables d'environnement
Copier `.env.local.example` → `.env.local` et remplir. Ajouter les mêmes
variables **publiques** dans Vercel (Project → Settings → Environment Variables) :
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```
Le `SANITY_WRITE_TOKEN` ne sert qu'au seed local — **ne pas** l'exposer en public.

### 3. Injecter le contenu existant (seed)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx \
NEXT_PUBLIC_SANITY_DATASET=production \
SANITY_WRITE_TOKEN=sk... \
npx tsx scripts/seed.ts
```
Idempotent : ré-exécutable sans créer de doublons.

### 4. Studio
Une fois les variables publiques en place et le site déployé, le Studio est
disponible sur **`/studio`** (ex. `https://astarte-conseils.org/studio`).
Connexion avec ton compte Sanity.

## Publication
Les pages utilisent l'ISR (`revalidate: 60`). Une modification publiée dans le
Studio apparaît en ligne au plus tard ~60 s après. (On pourra brancher un
webhook → `revalidateTag('content')` pour une mise à jour quasi instantanée.)
