import { defineAuth,secret } from '@aws-amplify/backend';
import { customMessage } from "./custom-message/resource";
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  triggers: {
    customMessage,
  },
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),      
      },
      callbackUrls: [
        'http://localhost:5173/',
        'https://main.d3nrs7i5oosne0.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:5173/', 'https://main.d3nrs7i5oosne0.amplifyapp.com/'],
    }
  },
});
