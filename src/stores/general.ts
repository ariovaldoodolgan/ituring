import { defineStore } from 'pinia';

export const generalStore = defineStore({
	id: 'general',
	state: () => {
		return { isMobile: false };
	},
	getters: {
		isMobileResolution: (state) => state.isMobile
	},
	actions: {
		updateResolutionDefinition() {
			this.isMobile = !this.isMobile;
		}
	}
});
