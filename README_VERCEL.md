# Currículo Profissional - Augusto Altmayer

Portfólio e currículo profissional moderno desenvolvido com React, Tailwind CSS e Vite.

## 🚀 Deploy no Vercel

### Pré-requisitos

- Conta no GitHub
- Conta no Vercel (https://vercel.com)

### Passo 1: Fazer Push para o GitHub

```bash
# Inicializar repositório Git (se ainda não estiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Currículo profissional - versão inicial"

# Adicionar remote (substitua USER e REPO pelos seus dados)
git remote add origin https://github.com/USER/REPO.git

# Fazer push
git branch -M main
git push -u origin main
```

### Passo 2: Conectar ao Vercel

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Busque e selecione seu repositório
5. Clique em "Import"

### Passo 3: Configurar Build

O Vercel detectará automaticamente:

- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/public`

Não é necessário fazer nenhuma configuração adicional. Clique em "Deploy"!

### Passo 4: Pronto! 🎉

Seu currículo estará online em poucos segundos com um domínio automático como:

- `seu-projeto.vercel.app`

Você também pode conectar um domínio customizado nas configurações do Vercel.

## 📝 Atualizações Futuras

Para fazer alterações e atualizar o site:

```bash
# Fazer alterações nos arquivos
# Exemplo: editar client/src/pages/Home.tsx

# Fazer commit e push
git add .
git commit -m "Descrição das alterações"
git push
```

O Vercel fará deploy automático a cada push!

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Rodar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📧 Contato

- Email: augustoaltmayer@email.com
- GitHub: https://github.com/awaltmayer
- LinkedIn: [Seu perfil]

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e Vite**
