<template>
    <div id="carouselstudent">
        <header>
            <slot name="header"></slot>
        </header>
        <description>
            <slot name="description"></slot>
        </description>

        <Carousel id="carouselstudent-custom" :settings="settings" infinite :breakpoints="breakpoints">
            <Slide v-for="student in studentList" :key="student.id">
                <div class="carousel__item col-sm-10">
                    <div class="student">
                        <img class="carousel__item-photo" :src="student.photoName" alt="">
                        <div class="identification">
                            <p class="carousel__item-name">{{ student.name }}</p>
                            <p class="carousel__item-companyrole">{{ student.companyRole }}</p>
                        </div>
                    </div>
                    <p class="carousel__item-course"><strong>{{ student.course }}</strong></p>
                    <span class="carousel__item-review"><i class="ri-double-quotes-l"></i>{{ student.review }}</span>
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
import { generalStore } from '../stores/general';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    props: ['studentList'],
    components: {
        Carousel, Slide,
        Pagination, Navigation,
    },
    setup(props) {
        const isMobile = ref(false);
        const general = generalStore();
        const studentList = props.studentList;

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        });
        
        let settings = {
            itemsToShow: 1,
            snapAlign: 'center',
        };
        let breakpoints = {
          700: {
            itemsToShow: 1,
            snapAlign: 'center',
          },
          1024: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
        };

        return {
            settings,
            breakpoints,
            isMobile,
            studentList
        }
    }    
}
</script>