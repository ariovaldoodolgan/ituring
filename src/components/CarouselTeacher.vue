<template>
    <div id="carouselteacher">
        <header>
            <slot name="header"></slot>
        </header>
        <Carousel id="carouselteacher-custom" :settings="settings" infinite :breakpoints="breakpoints">
            <Slide v-for="teacher in teacherList" :key="teacher.id">
                <div class="carousel__item">
                    <img class="carousel__item-photo" :src="teacher.photoName" alt="">
                    <span class="carousel__item-name">{{ teacher.name }}</span>
                    <span class="carousel__item-observation1">{{ teacher.observation1 }}</span>
                    <span class="carousel__item-observation2">{{ teacher.observation2 }}</span>
                    <button id="circular-button">
                        <i class="ri-linkedin-fill"></i>
                    </button>
                </div>
            </Slide>

            <template #addons>
                <Navigation v-if="!isMobile" />
                <Pagination v-else />
            </template>
        </Carousel>
    </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import { generalStore } from '../store/general';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    props: ['teacherList'],
    components: {
        Carousel, Slide,
        Pagination, Navigation,
    },
    setup(props) {
        const isMobile = ref(false);
        const general = generalStore();
        const teacherList = props.teacherList;

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        });

        let settings = {
            itemsToShow: 1,
            snapAlign: 'center',
        };
        let breakpoints = {
          700: {
            itemsToShow: 2,
            snapAlign: 'center',
          },
          1024: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
        };

        return {
            settings,
            breakpoints,
            isMobile,
            teacherList
        }
    }    
}
</script>