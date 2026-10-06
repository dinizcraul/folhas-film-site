# Mar de Bolhas

Landing page das bombinhas de banho com bichinho do mar surpresa (caixa com 12 bombas, temas A e B). Feita com Vite + React.

## Rodar no computador

```
cd bombinhas-do-mar
npm install
npm run dev
```

`npm run build` gera `dist/index.html`, um arquivo único com tudo embutido.

## Antes de publicar

Tudo que muda fica em `src/data.js`:

- **Link de compra**: preencha `LINK_LOJA` (checkout ou loja) ou `WHATSAPP` (só dígitos, com DDI e DDD, ex.: `5531999999999`). Com o WhatsApp, o botão abre a conversa com o kit e o preço já escritos. Se os dois ficarem vazios, os botões levam até a seção de kits.
- **Preços**: os valores em `kits` são exemplos. O preço por bombinha e a economia são calculados sozinhos.
- **Bichinhos**: confira a lista `bichinhos` com os brinquedos do lote que você vende.
- **Fotos e vídeos reais**: coloque os arquivos em `public/midia/` e liste em `midia`. A galeria aparece sozinha.
- **Depoimentos**: adicione avaliações reais de clientes em `depoimentos`. A seção só aparece quando houver alguma.

## Publicar no Cloudflare Pages

- Root directory: `bombinhas-do-mar`
- Build command: `npm run build`
- Build output directory: `dist`
- Variável de ambiente (se pedir): `NODE_VERSION` = `22`
