<template>
	<RouterView :to="{ name: 'home' }"></RouterView>
</template>

<script lang="ts">
import { onBeforeMount } from "vue";
import { generalStore } from "./stores/general";

export default {
	setup() {
    	onBeforeMount(() => {
    	  	const store = generalStore();

    	  	var isMobile = detectarMobile();

    	  	if (isMobile) {
    	    	store.updateResolutionDefinition();
    	  	}
    	});

    	function detectarMobile() {
			return screen.width < 830;
    	}
  	},
};
</script>