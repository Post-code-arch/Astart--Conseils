# Admin cliente — Astarté Conseils

Interface d'édition sur mesure (en français) pour la cliente, séparée du Studio
Sanity (que l'équipe interne continue d'utiliser). Route : **`/admin`**.

## Variables d'environnement (à définir sur Vercel)

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID du projet Sanity (lecture publique) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_WRITE_TOKEN` | **Secret.** Token Sanity rôle **Editor**, créé sur https://sanity.io/manage → API → Tokens. Jamais préfixé `NEXT_PUBLIC_`, utilisé côté serveur uniquement. |
| `ADMIN_PASSWORD` | **Secret.** Mot de passe partagé unique pour se connecter à `/admin`. Sert aussi de clé de signature du cookie de session. |

## Réinitialiser / changer le mot de passe
Changer la valeur de `ADMIN_PASSWORD` sur Vercel puis redéployer. Toutes les
sessions ouvertes sont invalidées automatiquement (la signature du cookie
dépend du mot de passe).

## Ajouter un nouveau champ éditable
Tout est piloté par **`lib/adminFields.ts`** :

- **Champ d'une page (singleton)** → ajouter une entrée à `adminFields` :
  ```ts
  { id: "home-heroTitle", docId: "homePage", path: "heroTitle",
    label: "Titre du hero", group: "accueil", type: "text" }
  ```
  `type` ∈ `text | textarea | richtext | image | list` (`list` = tableau de
  chaînes, une par ligne). `docId` = l'`_id` du singleton (= son `_type`).
  `path` accepte la notation pointée pour les objets imbriqués (`hero.title`).

- **Nouveau groupe (onglet)** → ajouter à `adminGroups` (`slug`, `label`,
  `description`). La page `/admin/[group]` est générée automatiquement.

- **Collection (ajout/suppression d'items)** → ajouter à `adminCollections`
  (type de document, champs de l'item). Un éditeur de liste est généré.

Aucune autre modification nécessaire : l'UI (`/admin` et `/admin/[group]`) se
régénère à partir de ces tableaux.

## Fonctionnement
- `middleware.ts` protège `/admin/*` (sauf `/admin/login`) via un cookie signé.
- Les écritures passent par des **Server Actions** (`app/admin/actions.ts`) et le
  client d'écriture serveur (`lib/sanityWriteClient.ts`). Le token n'atteint
  jamais le navigateur.
- Un enregistrement = **publié immédiatement** (dataset `production`, pas de
  brouillon séparé).
- `/admin` et `/studio` sont en `noindex` + `Disallow` dans `robots`.
