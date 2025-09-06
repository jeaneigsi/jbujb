<security>
<auth_tokens>
- Préfère sessions via cookies HttpOnly + Secure + SameSite (Strict si possible, Lax pour login/redirect). Interdit: localStorage/sessionStorage pour tokens d’accès.
- OAuth2/OIDC: Authorization Code + PKCE pour SPA; Implicit flow interdit. Rotation courte des tokens, scopes minimaux.
- CSRF: cookies SameSite + anti-CSRF token côté serveur pour actions sensibles.
— refs: :contentReference[oaicite:0]{index=0}
</auth_tokens>

<xss_csp>
- CSP obligatoire:
default-src 'self'; script-src 'self' 'nonce-{{nonce}}' 'strict-dynamic'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; upgrade-insecure-requests; require-trusted-types-for 'script'; trusted-types app default.
- Nonces régénérées par requête. Interdit: 'unsafe-inline', whitelists larges.
— refs: :contentReference[oaicite:1]{index=1}
</xss_csp>

<dom_injection>
- Interdit: innerHTML/dangerouslySetInnerHTML. Si contrainte forte: sanitiser avec DOMPurify (profil strict), puis passer par Trusted Types.
- Évite tout event handler inline. Valide/échappe les données afficher côté serveur.
— refs: :contentReference[oaicite:2]{index=2}
</dom_injection>

<cors>
- Pas de wildcard avec credentials. Autorise une liste précise d’origines. Pré-vols gérés côté serveur.
- Avec credentials, retourne l’origine exacte, jamais “*”.
— refs: :contentReference[oaicite:3]{index=3}
</cors>

<third_party_resources>
- Scripts tiers minimisés et isolés. SRI obligatoire pour ressources CDN + attribute crossorigin approprié.
- Si widget non fiable: charger en iframe sandbox avec allowlist stricte.
— refs: :contentReference[oaicite:4]{index=4}
</third_party_resources>

<secrets_env>
- Aucun secret dans le client. Avec Vite, seules les variables préfixées VITE_ sont exposées; n’y met pas d’informations sensibles.
- Vérifie import.meta.env au build; audit de fuite par CI.
— refs: :contentReference[oaicite:5]{index=5}
</secrets_env>

<headers_baseline>
- CSP: voir <xss_csp>.
- Referrer-Policy: strict-origin-when-cross-origin.
- Permissions-Policy: désactive par défaut (camera=(), microphone=(), geolocation=(), etc.).
- X-Frame-Options: DENY ou via CSP frame-ancestors 'none'.
- Strict-Transport-Security activé côté HTTPS.
— refs: :contentReference[oaicite:6]{index=6}
</headers_baseline>

<supply_chain>
- Verrouille les versions (lockfile), revues de dépendances, audit régulier (npm audit/snyk), bannis packages non maintenus.
- CI: secret scanning, interdiction d’install postinstall risquées, build reproductible.
— refs: :contentReference[oaicite:7]{index=7}
</supply_chain>

<ui_flows_secure>
- Validation/autorisation toujours côté serveur. Le client n’est pas une source de vérité.
- PostMessage: toujours vérifier l’origine et le schéma du message avant traitement.
- Masquer/redacter PII dans logs et erreurs. Jamais de jeton dans l’URL.
</ui_flows_secure>

<acceptance_checklist>
- Cookies HttpOnly/SameSite/ Secure en place; PKCE actif; aucun token en storage Web.
- CSP avec nonce + strict-dynamic; Trusted Types activé; zéro innerHTML non filtré.
- CORS sans wildcard avec credentials; origines allowlistées.
- SRI sur ressources externes; sandbox pour widgets.
- Aucune variable sensible exposée via Vite; headers de sécurité présents.
</acceptance_checklist>
</security>