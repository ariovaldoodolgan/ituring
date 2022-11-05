import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuestic } from 'vuestic-ui';
import VueSmoothScroll from 'vue3-smooth-scroll';
import 'vuestic-ui/css';
import vueVimeoPlayer from 'vue-vimeo-player';
import { createGtm } from '@gtm-support/vue-gtm';
import { Select, Option } from '@varlet/ui';
import '@varlet/ui/es/style.js';

import App from './App.vue';
import router from './router';

import './assets/less/main.less';

createApp(App)
	.use(createPinia())
	.use(router)
	.use(Select)
	.use(Option)
	.use(createVuestic())
	.use(VueSmoothScroll, {
		duration: 780,
		updateHistory: false
	})
	.use(vueVimeoPlayer)
	.use(
		createGtm({
			id: 'GTM-MKSSWPT',
			defer: false,
			compatibility: false,
			loadScript: true,
		})
	)
	.mount('#app');
