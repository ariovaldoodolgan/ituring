<template>
    <div id="ilura-rights">
        <div class="container">
            <div class="row">
                <div class="col">
                    <span class="col">Todos os direitos reservados a ilura. <i class="ri-copyright-line"></i> {{year}} ilura</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { onBeforeMount, ref } from 'vue';

export default {
    setup() {
        const year = ref(0);

        onBeforeMount(() => {
            const data = new Date();
            year.value = data.getFullYear();
        })

        return {
            year
        }
    }
}
</script>