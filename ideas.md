# Especificação visual — Protocolo 369

## Referência adotada

Esta é uma recriação autorizada da landing page fornecida em `https://equilibriosnatural.com/protocolo369/prelander3/`. A referência é a fonte de verdade para composição, proporções, tipografia, cores, espaçamentos, textos e comportamento do CTA. A prioridade é **fidelidade visual**, não reinterpretar o layout como uma nova campanha.

## Direção escolhida: presell editorial minimalista

### Design Movement
Minimalismo editorial de performance, com composição vertical de leitura rápida, tipografia sans-serif geométrica e um único ativo visual central com estética documental/vintage.

### Core Principles
1. **Fidelidade estrutural:** sequência vertical exata de título, imagem, bloco de texto e CTA.
2. **Contraste direto:** fundo branco, texto quase preto e acentos semânticos apenas em amarelo e vermelho.
3. **Ritmo de leitura:** grandes áreas de respiro, blocos centralizados e espaçamento generoso entre parágrafos.
4. **Conversão sem ruído:** um único botão verde, destacado por sombra suave, sem navegação ou elementos concorrentes.

### Color Philosophy
O branco mantém a página limpa e reduz distrações. O preto cria urgência e legibilidade. O amarelo sinaliza a revelação/nome-chave e o vermelho marca o aviso. O verde do CTA indica ação positiva e é o único elemento cromático com volume visual, reforçando a prioridade da decisão.

### Layout Paradigm
Coluna única, fluida e estreita, centrada no eixo da página. No desktop, a imagem permanece em uma largura fixa aproximada de 420px; no mobile, ocupa a largura disponível. O conteúdo textual usa uma largura confortável de leitura e não há navegação, cards ou grids auxiliares.

### Signature Elements
- Imagem documental de Nikola Tesla, documentos e o número 369.
- Destaque amarelo em “Hiroshi Takeda” e destaque vermelho no aviso.
- CTA verde central com cantos arredondados e sombra luminosa discreta.

### Interaction Philosophy
Interação mínima e previsível: o botão é o único controle. Ele recebe uma mudança sutil de verde no hover, leve compressão no clique e foco visível para teclado. O clique preserva o destino externo de live da referência, com parâmetros de rastreamento mantidos de forma segura.

### Animation
A página entra estável, sem animações decorativas. Apenas o CTA tem transições curtas de cor, sombra e escala dentro de 160–220ms. Respeitar `prefers-reduced-motion` e manter a leitura imediata.

### Typography System
Usar Poppins para títulos e corpo, com peso 800 no título principal, peso 700 nos destaques e peso regular no texto. O título desktop fica próximo de 34px e reduz para 24px no mobile; o corpo desktop fica próximo de 19px/30px e reduz para 16px/26px.

### Brand Essence
Uma presell direta para quem foi selecionado para conhecer o “Protocolo 369” e assistir à live exclusiva de Hiroshi Takeda. Personalidade: **misteriosa, direta, persuasiva**.

### Brand Voice
Headlines e CTAs soam pessoais, urgentes e afirmativos; microcopy evita explicações técnicas e conduz a uma decisão simples.

Exemplos da referência:
- “PARABÉNS, VOCÊ FOI SELECIONADO!”
- “Sim, quero assistir a live”

### Wordmark & Logo
A referência não apresenta wordmark ou logo independente; não adicionar marca, menu ou assinatura que altere a composição original. O favicon pode usar um símbolo 369 abstrato, mas o conteúdo da página permanece sem logotipo visível.

### Signature Brand Color
`#00B050`, verde do CTA original.

## Implementação

- Página única em React com rota `/` e compatibilidade com a URL de prelander via fallback.
- Imagem original autorizada baixada para `/home/ubuntu/webdev-static-assets/` e referenciada via URL de armazenamento do projeto.
- CTA externo preservado para o destino da referência.
- Responsividade alinhada aos breakpoints observados no HTML original: desktop, até 1024px e mobile até 480px.
