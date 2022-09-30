<template>
    <div id="course-card" v-for="item in courseList" :key="item.id">
        <tag class="school-name">
            <template #icon>
                <i class="ri-honour-line"></i>
            </template>
            <template #info>
                School of {{ item.schoolName }}
            </template>
        </tag>
        <div class="first-section">
            <span class="title">{{ item.courseName }}</span>
            <p class="description">{{ item.description }}</p>
        </div>
        <img class="divider" src="@/assets/images/dots-line-divider.png" alt="">
        <div class="second-section">
            <div class="requirements">
                <span class="title">Pré requisitos</span>
                <ul class="requirements-list" v-if="item.requirements.length > 0">
                    <li class="description" v-for="(requirement, index) in item.requirements" :key="index">{{ requirement }}</li>
                </ul>
                <ul v-else class="no-requirements">
                    <li class="description">Este curso não possui pré-requisitos</li>
                </ul>
            </div>
        </div>
        <div class="other-tags">
            <tag class="duration">
                <template #info>{{ item.duration }}</template>
            </tag>
            <tag class="level">
                <template #info>{{ item.level }}</template>
            </tag>
        </div>
        <div class="button">
            <a :href="item.route">
                <button id="primary-button">
                    <label>Saiba mais</label>
                </button>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Tag from "./Tag.vue";
import { ref, watchEffect } from 'vue';

export default {
    components: { Tag },
    props: ['courseList'],
    setup(props) {
        const courseList = ref({});

        watchEffect(() => {
            courseList.value = props.courseList;
        })
        
        return {
            courseList
        }
    }
}
</script>