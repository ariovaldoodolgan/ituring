<template>
    <div class="students-company container">
        <div class="row">
            <div class="col">
                <span class="title">Nossos alunos estão nessas empresas</span>
                <p class="subtitle">
                    Estudantes do ituring estão transformando negócios que transformam o mercado no Brasil e no mundo.
                </p>
                <div class="companies">
                    <img v-for="(logo, index) in logoCompanies" :key="index" :src="logo.img" :alt="logo.description">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const logoCompanies = [
            {
                img: new URL('../assets/images/nubank.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/quinto-andar.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/kovi.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/confitec.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/stefanini.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/cyrela.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/havan.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/xp-inc.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/rethink.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/take-blip.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/rd-station.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/sebrae.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/burguer-king.png', import.meta.url),
                description: ''
            }
        ];

        return {
            logoCompanies
        };
    }
}
</script>