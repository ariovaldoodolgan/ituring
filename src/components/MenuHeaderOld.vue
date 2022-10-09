<template>
    <div id="menu-header-old">
        <div class="container">
            <div :class="{ row: !isMobile }">
                <div v-if="isMobile" class="logo row">
                    <div class="col">
                        <i v-show="isMobile" class="ri-menu-line menu-icon" :class="{ menuOpen: menuOpen }" @click="menuOpen = !menuOpen"></i> 
                        <a href="https://ituring.com.br">
                            <img src="@/assets/images/logo-ituring-white.svg" alt="Logo do ituring" />
                        </a>
                    </div>

                    <div class="button">
                        <button class="button-old medium-normal" onclick="location.href='https:\/\/classroom.ituring.com.br'">
                            <label>Entrar</label>
                        </button>
                    </div>
                </div>
                <div v-else class="logo col-4">
                    <a href="https://ituring.com.br">
                        <img src="@/assets/images/logo-ituring-white.svg" alt="Logo do ituring" />
                    </a>
                </div>
                <div class="actions" :class="{ 'col-8': !isMobile, 'menuOpen': menuOpen }">
                    <div class="menu-options">
                        <ul>
                            <li>
                                <a href="https://ituring.com.br/quem-somos/">O ituring</a>
                            </li>
                            <li>
                                <a href="https://ituring.com.br/cursos/">CURSOS</a>
                            </li>
                            <li>
                                <a href="https://conteudo.ituring.com.br/bootcamp-full-stack-developer" target="_blank">BOOTCAMP</a>
                            </li>
                            <li>
                                <a href="https://conteudo.ituring.com.br/para-empresas" target="_blank">PARA EMPRESAS</a>
                            </li>
                            <li>
                                <a href="https://ituring.com.br/parceiros/">PARCEIROS</a>
                            </li>
                            <li>
                                <a href="https://ituring.com.br/contato/">CONTATO</a>
                            </li>
                        </ul>
                    </div>
                    <div v-show="!isMobile" class="button">
                        <button class="button-old" onclick="location.href='https:\/\/classroom.ituring.com.br'">
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