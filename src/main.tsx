
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json'
import { ThemeProvider} from '@aws-amplify/ui-react';

Amplify.configure(outputs);

const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      Button: {
        backgroundColor: { value: '{colors.purple[40]}' },
        outlined: {
          borderColor: { value: '{colors.black}' },
        },
      },
      heading: {
        color: { value: '{colors.secondary[80]}' },
      },
      Badge: {
        backgroundColor: { value: '{colors.purple[40]}'  },
      },
      text: {
        color: { value: '{colors.primary[80]}' },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
