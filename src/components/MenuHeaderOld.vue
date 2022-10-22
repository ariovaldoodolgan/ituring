<template>
    <div id="menu-header-old">
        <div class="container">
            <div :class="{ row: !isMobile }">
                <div v-if="isMobile" class="logo row">
                    <div class="col">
                        <i v-show="isMobile" class="ri-menu-line menu-icon" :class="{ menuOpen: menuOpen }" @click="menuOpen = !menuOpen"></i> 
                        <a>
                            <img src="@/assets/images/logo-ituring-white.svg" alt="Logo do ituring" />
                        </a>
                    </div>

                    <div class="button">
                        <button class="button-old medium-normal">
                            <label>Entrar</label>
                        </button>
                    </div>
                </div>
                <div v-else class="logo col-4">
                    <a>
                        <img src="@/assets/images/logo-ituring-white.svg" alt="Logo do ituring" />
                    </a>
                </div>
                <div class="actions" :class="{ 'col-8': !isMobile, 'menuOpen': menuOpen }">
                    <div class="menu-options">
                        <ul>
                            <li>
                                <a>O ITuring</a>
                            </li>
                            <li>
                                <a>CURSOS</a>
                            </li>
                            <li>
                                <a>BOOTCAMP</a>
                            </li>
                            <li>
                                <a>PARA EMPRESAS</a>
                            </li>
                            <li>
                                <a>PARCEIROS</a>
                            </li>
                            <li>
                                <a>CONTATO</a>
                            </li>
                        </ul>
                    </div>
                    <div v-show="!isMobile" class="button">
                        <button class="button-old">
                            <label>Entrar</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import { generalStore } from '../stores/general';

export default {
    setup() {

        const isMobile = ref(false);
        const general = generalStore();

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        })

        const menuOpen = ref(false);
        
        return {
            isMobile,
            menuOpen
        }
    }
}
</script>