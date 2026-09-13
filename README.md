# Top Locações — Console Operacional

App já configurado para o projeto Firebase **top-locacoes**. Este README tem
o passo a passo completo para colocar no ar.

## 1. Ativar autenticação anônima no Firebase (uma vez só)

O app usa login anônimo automático para proteger o banco de dados de acesso
externo, sem exigir senha de cada pessoa da equipe.

1. No [console do Firebase](https://console.firebase.google.com/), abra o
   projeto **top-locacoes**.
2. Menu lateral → **Build → Authentication → Sign-in method**.
3. Na lista de provedores, clique em **Anônimo** e **ative**.

## 2. Ativar o Firestore Database (se ainda não fez)

1. Menu lateral → **Build → Firestore Database → Criar banco de dados**.
2. Escolha uma localização (ex: a mais próxima do Brasil) e inicie em
   **modo de produção**.

## 3. Aplicar as regras de segurança

1. Na tela do Firestore, aba **Regras**.
2. Apague o conteúdo e cole o conteúdo do arquivo `firestore.rules`
   (incluído neste projeto).
3. Clique em **Publicar**.

## 4. Instalar e testar localmente (opcional, requer Node.js instalado)

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## 5. Publicar o site (duas opções gratuitas)

### Opção A — Vercel (recomendado, mais simples)

1. Crie uma conta grátis em [vercel.com](https://vercel.com) (dá para usar
   login do GitHub).
2. Suba esta pasta para um repositório no GitHub (ou use `vercel` pela linha
   de comando — `npm i -g vercel` e depois `vercel`).
3. Na Vercel, clique em **Add New → Project**, selecione o repositório.
4. Framework: ele detecta **Vite** automaticamente. Clique em **Deploy**.
5. Pronto — a Vercel te dá um endereço tipo `top-locacoes.vercel.app`. Depois
   dá para ligar um domínio próprio (`app.toplocacoes.com.br`) nas
   configurações do projeto, aba **Domains**.

### Opção B — Netlify

1. Conta grátis em [netlify.com](https://netlify.com).
2. **Add new site → Import an existing project**, conecta o repositório.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Deploy.

## 6. Depois de publicado

- Os dados ficam salvos no Firestore, compartilhados por toda a equipe que
  acessar o link — igual já funcionava dentro do Claude.
- A senha de administrador (Clientes / Produção / Controle Diário) continua
  funcionando do mesmo jeito, mas agora fica salva no Firestore em vez do
  armazenamento do Claude.
- Plano gratuito do Firebase (Spark) cobre tranquilamente esse volume de uso
  (milhares de leituras/escritas por dia de graça).

## Observação sobre fotos

As fotos de obra continuam salvas como o restante dos dados (no Firestore).
Fotos muito grandes podem esbarrar no limite de 1 MB por documento do
Firestore — se isso acontecer no dia a dia, é um sinal para migrarmos as
fotos para o **Firebase Storage** (mais indicado para arquivos, também
gratuito até 5 GB). Aviso quando for o caso.
