# 🏛️ Arquitetura da Solução: Hackathon Modernization

## 1. Visão Geral
Este projeto representa a evolução de uma aplicação de inscrição de Hackathon de um modelo **Canvas App (Low-Code)** para um **Code App (React/Pro-Code)**. A arquitetura foi desenhada para oferecer alta performance, acessibilidade nativa e uma experiência de usuário (UX) premium dentro do ecossistema Power Platform.

## 2. Stack Tecnológica
- **Core:** [React 18](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/) para tipagem estática e segurança de código.
- **UI Framework:** [Fluent UI v9](https://react.fluentui.dev/) - O sistema de design oficial da Microsoft, garantindo consistência visual com o Teams e Office 365.
- **Build Tool:** [Vite](https://vitejs.dev/) para desenvolvimento ultra-rápido e bundling otimizado.
- **Integração:** [Power Apps SDK (@microsoft/power-apps)](https://www.npmjs.com/package/@microsoft/power-apps) para comunicação direta com o host do Power Apps.
- **CLI:** [Power Platform CLI (PAC)](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) para gestão de ciclo de vida (ALM) e deploy.

## 3. Padrões de Arquitetura (Design Patterns)

### 3.1. Separação de Preocupações (SoC)
A aplicação segue uma estrutura modular onde a lógica de negócio, estilos e apresentação são desacoplados:
- **Camada de Estilo (CSS-in-JS):** Utilização do `makeStyles` do Fluent UI, permitindo o uso de tokens dinâmicos e garantindo que o CSS seja injetado apenas quando necessário.
- **Camada de Estado:** Gerenciamento de estado local via React Hooks (`useState`, `useEffect`), simulando a lógica de variáveis de contexto do Power Apps de forma mais performática.
- **Componentização:** Uso de componentes atômicos (Button, Avatar, Card) que facilitam a reutilização e manutenção.

### 3.2. Unidirectional Data Flow
Os dados fluem do componente pai para os filhos via props, e as ações (eventos) sobem via callbacks, garantindo previsibilidade no comportamento da interface.

## 4. Componentes Principais

| Componente | Responsabilidade |
| :--- | :--- |
| `PowerProvider` | Wrapper de contexto que inicializa o SDK do Power Apps e provê a ponte de comunicação com o ambiente. |
| `FluentProvider` | Gerencia o tema (Dark/Light) e os tokens de design (cores, espaçamentos). |
| `App.tsx` | Orquestrador principal da tela de inscrição, contendo a lógica de condicional de status do usuário. |
| `Card (Glassmorphism)` | Container visual principal que utiliza efeitos de `backdrop-filter` para uma estética moderna. |

## 5. Estratégia de Dados
A aplicação foi preparada para interagir com as seguintes entidades do Dataverse/SharePoint (baseado nos esquemas originais):
- **Cadastro:** Entidade principal para armazenamento de inscritos, camisetas e requisitos.
- **ListAdmin:** Controle de acesso para funções administrativas.

## 6. Diferenciais Técnicos (Modernização)
1. **Glassmorphism & Depth:** Diferente do Canvas App, utilizamos profundidade real com sombras dinâmicas e desfoque de fundo (Blur), impossíveis de replicar com a mesma performance no Low-Code puro.
2. **Responsividade Avançada:** Uso de Flexbox e breakpoints programáticos que se adaptam perfeitamente a diferentes tamanhos de tela (Player Web, Mobile ou Teams).
3. **Acessibilidade (A11y):** Componentes Fluent UI v9 já trazem suporte nativo a leitores de tela e navegação por teclado (tab stops), cumprindo normas de conformidade sem esforço extra.
4. **Versionamento de Build:** Injeção automática da versão do `package.json` diretamente na UI para facilitar o rastreio em ambientes de QA e Produção.

## 7. Fluxo de Deploy (ALM)
1. `npm run build`: Compila o TypeScript e gera o bundle otimizado.
2. `pac code push`: Realiza o upload incremental para o ambiente Dataverse selecionado.
3. **Studio Update:** O Power Apps Studio detecta a nova versão do componente de código e solicita a atualização da tela.

---
**Documentação mantida pela equipe de desenvolvimento NTT DATA.**