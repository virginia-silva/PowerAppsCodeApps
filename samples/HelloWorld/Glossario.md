# 📖 Glossário do Projeto: Hackathon Modernization

Este glossário define os termos técnicos e conceitos fundamentais utilizados no processo de modernização da plataforma.

## 1. Conceitos de Plataforma

- **Code Apps:** Framework que permite o desenvolvimento de aplicativos para Power Apps utilizando tecnologias web padrão (React, TypeScript) em vez de apenas fórmulas Power Fx.
- **Canvas App (Low-Code):** O modelo original do aplicativo, baseado em arrastar-e-soltar, que serviu como base para esta modernização.
- **Dataverse:** O serviço de dados inteligente e seguro da Microsoft Power Platform, onde as entidades como "Cadastro" e "ListAdmin" residem.
- **PAC CLI (Power Platform CLI):** Interface de linha de comando utilizada para autenticação, gerenciamento de ambientes e publicação (push) de componentes de código.
- **SDK Power Apps:** Conjunto de bibliotecas que permite ao código React comunicar-se com o contexto do host (Power Apps), acessando dados e funções nativas.

## 2. Stack Tecnológica

- **React 18:** Biblioteca JavaScript para construção de interfaces de usuário baseada em componentes.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, reduzindo erros em tempo de desenvolvimento.
- **Fluent UI v9:** A versão mais recente do design system da Microsoft, focada em performance e acessibilidade (A11y).
- **Vite:** Ferramenta de build e servidor de desenvolvimento de última geração, escolhida pela sua velocidade superior ao Webpack tradicional.
- **Hooks (React):** Funções que permitem "ligar" o estado do React e o ciclo de vida a componentes funcionais (ex: `useState`, `useEffect`).

## 3. Interface e Experiência (UI/UX)

- **Glassmorphism:** Estilo visual que utiliza transparência, desfoque de fundo (blur) e bordas sutis para criar um efeito de "vidro jateado", proporcionando profundidade à interface.
- **Responsividade:** Capacidade da interface de se ajustar fluidamente a diferentes tamanhos de tela (Mobile, Tablet, Desktop).
- **Tokens de Design:** Variáveis que armazenam valores de design (como cores e espaçamentos) para garantir consistência em todo o app (ex: `tokens.colorNeutralBackground1`).
- **A11y (Acessibilidade):** Práticas de desenvolvimento que garantem que o aplicativo seja utilizável por pessoas com deficiência, incluindo suporte a leitores de tela e contraste de cores.

## 4. Termos de Processo (ALM)

- **ALM (Application Lifecycle Management):** O gerenciamento do ciclo de vida da aplicação, abrangendo desde o desenvolvimento e build até o deploy e manutenção.
- **Bundle:** O arquivo final gerado após o processo de build (`npm run build`), contendo todo o código e estilos otimizados para produção.
- **Environment ID:** Identificador único do ambiente da Power Platform onde o aplicativo está hospedado.
- **Hot Reload:** Funcionalidade do Vite que atualiza o aplicativo instantaneamente no navegador conforme o código é alterado durante o desenvolvimento.

## 5. Entidades de Negócio

- **Cadastro:** Tabela que armazena as informações dos participantes do Hackathon (Nome, E-mail, Tamanho de Camiseta).
- **ListAdmin:** Tabela de controle utilizada para validar se o usuário logado possui privilégios de administrador no sistema.

---
**Documentação atualizada em: Maio de 2024.**