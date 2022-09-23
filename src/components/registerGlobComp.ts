import type { App } from 'vue';
import { Button } from './Button';
import { Avatar } from 'ant-design-vue';
import { Input, Layout } from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout).use(Avatar);
}
