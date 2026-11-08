# Banco de Receita Sustentável

Site estático em português brasileiro para uma iniciativa universitária de extensão comunitária dedicada ao aproveitamento seguro de ingredientes, à economia doméstica e à redução do desperdício de alimentos.

## Stack

Next.js com App Router, TypeScript, Tailwind CSS, Lucide React e dados de receitas em JSON local. O projeto usa `output: "export"` e está preparado para hospedagem estática na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Build de produção

```bash
npm run build
```

O resultado estático é gerado na pasta `out/`. Não há backend, banco de dados, autenticação, CMS, API externa ou Server Actions.

## Objetivo

O projeto compartilha receitas práticas para famílias e moradores de Porto Alegre aproveitarem melhor o que já têm em casa. As receitas incluem dicas de segurança alimentar e destacam cascas, talos, folhas, sementes e sobras cozidas que podem ser usados de forma adequada.

## Referências de pesquisa

As ideias de aproveitamento integral foram pesquisadas em materiais públicos do Banco CEAGESP de Alimentos e em cartilhas e publicações de órgãos públicos. As receitas foram redigidas para este projeto, sem copiar textos integrais das fontes. Quando não foi encontrada uma fotografia pública que correspondesse exatamente ao prato, foi usada a ilustração local do projeto para evitar associar uma imagem de outro alimento à receita.
