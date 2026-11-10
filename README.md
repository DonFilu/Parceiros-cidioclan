# CidioPartners
Marketplace público de parceiros para clãs e comunidades gamer.

## Executar
Node.js 18+: `npm start` (porta 3000 ou variável `PORT`).

## Uma loja = um módulo e um link
Cada loja possui pasta própria em `lojas/<slug>/`, com `data.js` e `index.html`. O endereço público é `/lojas/<slug>/`.

Para cadastrar uma loja: copie uma pasta de exemplo, renomeie o slug, edite `data.js`, altere `data-store` no HTML e importe o novo `data.js` em `assets/registry.js`. Use links externos HTTPS reais. Remova `demo:true` apenas quando os dados forem reais e revisados.

As páginas usam um layout compartilhado em `assets/profile.js` e `assets/style.css`, sem misturar dados de lojas diferentes.

## Publicação
Servidor Node HTTP sem dependências. No Railway, comando `npm start`; configurar domínio público após deploy. Os perfis de exemplo são fictícios e não são recomendações reais.

## Futuro
Adicionar autenticação, solicitações de cadastro, moderação e banco de dados sem alterar o modelo de URL.
