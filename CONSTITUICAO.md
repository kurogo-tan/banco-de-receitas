# Constituição do Banco de Receita Sustentável

## Missão

O Banco de Receita Sustentável é uma iniciativa universitária de extensão comunitária voltada a reduzir o desperdício doméstico, promover uma alimentação acessível e incentivar o aproveitamento responsável de ingredientes. O projeto atende especialmente famílias e moradores de Porto Alegre que procuram receitas práticas com o que já têm em casa.

## Princípios

1. **Utilidade e acessibilidade:** priorizar receitas econômicas, práticas e compreensíveis, com conteúdo integralmente em português brasileiro.
2. **Segurança alimentar:** recomendar somente ingredientes e partes comestíveis seguros. Nunca sugerir o uso de alimentos estragados; incluir orientações de segurança quando forem relevantes.
3. **Sustentabilidade com responsabilidade:** incentivar o reaproveitamento de alimentos e a redução de resíduos sem exagerar os benefícios ou apresentar alegações sem comprovação.
4. **Integridade comunitária:** explicar o propósito educativo e de extensão do projeto sem inventar endossos universitários, resultados de pesquisa, depoimentos ou estatísticas de impacto.
5. **Identidade acolhedora:** manter uma experiência calorosa, moderna e fácil de usar, com laranja como cor principal e verde como apoio visual.
6. **Acessibilidade para todos:** usar estrutura semântica, contraste adequado, textos alternativos, navegação por teclado, foco visível e layouts responsivos.
7. **Simplicidade e manutenção:** preferir soluções diretas, dados estruturados e tipados, desempenho eficiente e dependências estritamente necessárias.

## Princípios técnicos

- O site deve ser inteiramente estático, feito com Next.js App Router, TypeScript e Tailwind CSS, e configurado para exportação estática (`output: "export"`) e implantação na Vercel.
- As receitas devem permanecer em arquivos locais; não introduzir backend, banco de dados, autenticação, APIs externas, CMS, Server Actions ou recursos que exijam servidor Node.js em produção.
- Páginas e rotas de receitas devem ser compatíveis com a geração e exportação estáticas.
- A identidade da marca deve usar ativos próprios do projeto, incluindo logotipo SVG original e favicon correspondente.
- A documentação deve explicar os objetivos do projeto, sua iniciativa de extensão, tecnologias, instalação, desenvolvimento e build.

## Critérios de conformidade

Uma mudança está alinhada à constituição quando preserva a missão comunitária, a segurança e a acessibilidade do conteúdo, respeita a arquitetura estática e mantém a simplicidade do projeto. A entrega deve continuar compatível com `npm run build`; alegações de implantação só podem ser feitas após uma implantação real.
