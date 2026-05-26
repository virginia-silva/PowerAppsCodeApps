import React, { useState } from 'react';
import { 
  Text, 
  makeStyles, 
  shorthands, 
  tokens, 
  FluentProvider, 
  webDarkTheme,
  Card,
  Button,
  Avatar
} from '@fluentui/react-components';
import { RocketRegular, DocumentTextRegular } from '@fluentui/react-icons';

import './App.css';

// Declaração da versão vinda do build (Vite)
declare const __APP_VERSION__: string;

// Definição dos estilos usando as melhores práticas do Fluent UI v9
const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    // Cor baseada no branding Ambev/PowerUP (Roxo escuro)
    backgroundColor: '#4D2240',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    maxWidth: '600px',
    ...shorthands.padding('40px'),
    textAlign: 'center',
    // Efeito Glassmorphism
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(12px)',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  },
  avatar: {
    marginBottom: '20px',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: tokens.fontSizeBase500,
    // Amarelo Ambev vibrante
    color: '#FFC638',
    lineHeight: tokens.lineHeightBase400,
    marginBottom: '32px',
    display: 'block',
  },
  buttonContainer: {
    display: 'flex',
    ...shorthands.gap('16px'),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#FFC638',
    color: '#1F1F1F',
    fontWeight: tokens.fontWeightBold,
    ':hover': {
      backgroundColor: '#E5B132',
      color: '#000',
    },
  },
  secondaryButton: {
    color: '#FFC638',
    ...shorthands.borderColor('#FFC638'),
    ':hover': {
      backgroundColor: 'rgba(255, 198, 56, 0.1)',
      ...shorthands.borderColor('#FFC638'),
      color: '#FFC638',
    },
  },
  versionTag: {
    marginTop: '20px',
    opacity: 0.4,
    fontSize: tokens.fontSizeBase100,
  }
});

const App: React.FC = () => {
  const styles = useStyles();
  
  // Estados simulando a lógica do Power Apps (scrInscricao.fx.yaml)
  const [currentUser] = useState("Rafael Bernardino Alves");
  const [isRegistered] = useState(false);

  return (
    <FluentProvider theme={webDarkTheme}>
      <div className={styles.root}>
        <Card className={styles.card}>
          {/* Avatar com inicial do usuário ou ícone do evento */}
          <Avatar
            className={styles.avatar}
            size={96}
            name={currentUser}
            color="brand"
            badge={{ status: 'available' }}
          />

          {!isRegistered ? (
            <>
              <Text as="h1" size={900} weight="bold">
                Inscreva-se já!
              </Text>
              
              <Text className={styles.subtitle}>
                O maior evento de Power Platform da companhia espera por você.
              </Text>

              <div className={styles.buttonContainer}>
                <Button 
                  appearance="primary" 
                  size="large"
                  icon={<RocketRegular />}
                  className={styles.primaryButton}
                  onClick={() => console.log("Navegar para formulário")}
                >
                  Iniciar Inscrição
                </Button>

                <Button 
                  appearance="outline" 
                  size="large"
                  icon={<DocumentTextRegular />}
                  className={styles.secondaryButton}
                  onClick={() => window.open('https://aka.ms/codeapps', '_blank')}
                >
                  Pré-requisitos
                </Button>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Text as="h1" size={800} weight="bold">
                Inscrição Confirmada!
              </Text>
              <Text size={500} style={{ color: tokens.colorPaletteGreenForeground1 }}>
                Parabéns, {currentUser}!
              </Text>
              <Text 
                size={300} 
                italic 
                style={{ marginTop: '20px', color: tokens.colorNeutralForeground3 }}
              >
                Você receberá um e-mail com os próximos passos em breve.
              </Text>
            </div>
          )}
          
          <Text className={styles.versionTag}>
            Build Version: v{__APP_VERSION__}
          </Text>
        </Card>
      </div>
    </FluentProvider>
  );
};
export default App;
