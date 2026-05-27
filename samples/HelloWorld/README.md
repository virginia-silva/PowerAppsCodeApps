# 🚀 Modernização: Power Apps Canvas para React (Code Apps)

Este projeto faz parte de uma iniciativa de modernização tecnológica, transcrevendo um aplicativo originalmente desenvolvido em **Power Apps Canvas (Low-Code)** para **React (Pro-Code)** utilizando o framework de **Code Apps**.

### 🛠 Por que a transição?
Não se trata apenas de uma cópia visual, mas de uma reengenharia focada em:

- **UX/UI Superior:** Implementação do **Fluent UI v9**, garantindo uma interface nativa, acessível e consistente com o ecossistema Microsoft.
- **Performance:** Redução do overhead de renderização do Canvas App para um bundle otimizado em React.
- **Manutenibilidade:** Uso de TypeScript e padrões de arquitetura de software para facilitar a evolução do código.
- **Flexibilidade:** Controle total sobre estados complexos e integrações que excedem os limites das fórmulas Power Fx.

### 📝 Origem do Projeto
A base de referência para esta migração foi a tela de inscrição (`scrInscricao.fx.yaml`) do aplicativo de Hackathon. O objetivo foi preservar a regra de negócio original, elevando a experiência do usuário através de técnicas como *Glassmorphism* e layouts responsivos avançados.

---

# Getting Started 🚀

## 1. Clone this repository
This repository has the start of a TypeScript app that already includes the Power Platform SDK. Later in EAP we'll add guidance to that allows you to start from scratch without using this base app. 

```bash
git clone https://github.com/microsoft/PowerAppsCodeApps.git
cd PowerAppsCodeApps
```
## 2. Authenticate PAC CLI and point to your first release environment

```bash
pac auth create --environment {environment id}
```

## 3. Install dependencies

```bash
cd samples/HelloWorld
npm install
pac code init
```

## 4. Run locally

```bash
npm run dev | pac code run
```

## 5. Deploy to Power Apps

```bash
npm run build | pac code push
```

If successful, this command should return a Power Apps URL to run the app. 

Optionally, you can navigate to https://make.powerapps.com to see the app in the Maker Portal. You can play, share, or see details from there. 

Congratulations! You have successfully pushed your first code app! 

> [!NOTE] If you get stuck on the “fetching your app” loading screen or see an “App timed out” error screen, double check:
> 1. that you ran npm run build
> 1. there are no issues in PowerProvider.tsx
