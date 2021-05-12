import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss';
import BaseConfig from '@slidev/client/windi.config';
// or extending from the theme:
/* import BaseConfig from '@slidev/theme-seriph/windi.config' */

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    theme: {
      extend: {
        colors: {
          'off-black': '#2A2928',
          'off-white': '#F5F4F4',
          ritsumei: '#B61F38',
          twitter: '#1DA1F2',
        },
      },
    },
  })
);
