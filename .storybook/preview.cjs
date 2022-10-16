import { initialize, mswDecorator } from 'msw-storybook-addon';
import { themes } from '@storybook/theming';

import '../src/styles/global.css';

initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: '/ignite-lab-design-system/mockServiceWorker.js'
  }
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}