<template>
  <Home />
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import { onBeforeMount } from "vue";
import { generalStore } from "./store/general";

export default {
    components: {
        Home: Home,
    },
    setup() {
        onBeforeMount(() => {
            const store = generalStore();

            const isMobile = detectarMobile();

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