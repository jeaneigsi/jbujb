<tanstack>

	<philosophy>
		TanStack est adopté comme standard natif de toutes nos apps React ambitieuses.
		Il n’est pas réservé aux "gros besoins", mais constitue la base saine, headless et typée de nos composants dès la première ligne de code.
		Utiliser par défaut :
		TanStack Query pour tout appel distant (REST, GraphQL…)
		TanStack Table pour toute grille interactive (même simple)
		TanStack Router pour tout projet SPA (file-based, typé)
		TanStack Form si formulaire complexe ou croisement avec validation typée
	
	</philosophy>
  <use>
    - Router: SPA React avec typage de routes et génération file-based. Active si tu veux préchargement auto et params typés. :contentReference[oaicite:0]{index=0}
    - Start: besoin SSR + streaming + server functions/server routes. Idéal pour rapprocher la logique serveur du routing. :contentReference[oaicite:1]{index=1}
    - Query v5: état distant. Utilise les hooks Suspense pour lire les données sans useEffect. :contentReference[oaicite:2]{index=2}
    - Table v8: tableaux headless avancés. Combine avec Virtual pour gros volumes. :contentReference[oaicite:3]{index=3}
    - Form v1: formulaires typés et performants à grande échelle. :contentReference[oaicite:4]{index=4}
  </use>

  <how_to_use_router>
    - Active le file-based routing via plugin bundler ou CLI. Préfère plugin (Vite/Rspack/Webpack/Esbuild). :contentReference[oaicite:5]{index=5}
    - Bénéfices: génération de l’arbre de routes, préchargement automatique sur liens/survols, types inférés. :contentReference[oaicite:6]{index=6}
    - Pattern: routes parent → loaders parent avant enfants pour éviter waterfalls. :contentReference[oaicite:7]{index=7}
  </how_to_use_router>

  <how_to_use_query>
    - Place `QueryClientProvider` en racine. Lis via `useSuspenseQuery`/`useSuspenseQueries` sous `<Suspense>` + error boundary. :contentReference[oaicite:8]{index=8}
    - Note: avec `useSuspenseQueries`, pas d’`enabled` ni `placeholderData`. Orchestrer la condition via route loader, garde, ou clé de requête. :contentReference[oaicite:9]{index=9}
    - Migration: le flag `suspense: true` a été retiré au profit des hooks dédiés. :contentReference[oaicite:10]{index=10}
  </how_to_use_query>

  <how_to_use_table>
    - Table est headless: définis colonnes + row model, rends avec `flexRender`. :contentReference[oaicite:11]{index=11}
    - Longues listes: associe `@tanstack/virtual` pour viewport-only rendering. :contentReference[oaicite:12]{index=12}
    - Tailwind: applique utilitaires sur `<table>/<th>/<td>`. Sticky header/col: `sticky top-0` et `sticky left-0` avec `z-10`. Voir exemple minimal fonctionnel. :contentReference[oaicite:13]{index=13}
    - Pas à pas Tailwind + Table: tutoriel détaillé. :contentReference[oaicite:14]{index=14}
  </how_to_use_table>

  <how_to_use_form>
    - Installe `@tanstack/react-form`. Conçois schémas/validators typés. Vise DX et perfs sur formulaires complexes. :contentReference[oaicite:15]{index=15}
    - Concepts: `formOptions` partageables, champs contrôlés, validation composable. :contentReference[oaicite:16]{index=16}
  </how_to_use_form>

  <tailwind_practices>
    - Table: `table-fixed` si stabilité des largeurs prioritaire; `table-auto` si autosizing utile. Styles au niveau des cellules, pas via composants opaques. (réf. guides Tailwind génériques + exemples Table). :contentReference[oaicite:17]{index=17}
    - Sticky: header/col avec `sticky` + `top|left` + `z-10`; gère fonds avec `bg-...` pour éviter le bleed. :contentReference[oaicite:18]{index=18}
  </tailwind_practices>

  <do>
    - Router: file-based + préchargement. Query: Suspense hooks sous `<Suspense>` + boundary. Table: headless + Virtual dès >200 lignes visibles. Start: active SSR/streaming si SEO ou TTI critique. Form: v1 pour formulaires complexes. :contentReference[oaicite:19]{index=19}
  </do>

  <dont>
    - Router: config manuelle verbeuse si plugin possible. Query: cascades sérielles de fetch. Table: rendu intégral sur gros volumes. Form: logique de validation dispersée hors schéma. :contentReference[oaicite:20]{index=20}
  </dont>

  <acceptance_checklist>
    - Routes générées par plugin/CLI. Préloading actif. :contentReference[oaicite:21]{index=21}
    - Requêtes lues via `useSuspense*` sous Suspense + boundary. Pas d’`enabled` sur `useSuspenseQueries`. :contentReference[oaicite:22]{index=22}
    - Table rendue via `flexRender` et stylée Tailwind. Virtualisation en place pour longues listes. :contentReference[oaicite:23]{index=23}
    - Start utilisé quand SSR/streaming ou server functions nécessaires. :contentReference[oaicite:24]{index=24}
    - Form v1 adoptée et typée. Concepts de base appliqués. :contentReference[oaicite:25]{index=25}
  </acceptance_checklist>
</tanstack>
