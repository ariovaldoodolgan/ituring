<template>
    <div class="next-class row">
        <div class="grid-container col">
            <div class="grid-item">Dias</div>
            <div class="grid-item">Horas</div>
            <div class="grid-item">Minutos</div>  
            <div class="grid-item">Segundos</div>  
            <div class="grid-item time-value">{{ days % 365 }}</div>
            <div class="grid-item time-value">{{ hours % 24 }}</div>
            <div class="grid-item time-value">{{ minutes % 60 }}</div>
            <div class="grid-item time-value">{{ seconds % 60 }}</div>
        </div>
        
        <img src="@/assets/images/rectangle-divider.png" alt="">

        <div class="date col">
            <span class="date-label">Próxima turma em</span>
            <span class="date-value">{{ launchDate.getDate() }} de {{ monthName }} de {{ launchDate.getFullYear() }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';

export default {
    props: ['date'],
    setup(props) {
        const days = ref(0);
        const hours = ref(0);
        const minutes = ref(0);
        const seconds = ref(0);
        const launchDate = props.date;

        let monthName = launchDate.toLocaleString('pt-BR', { month: 'long' });
        monthName = monthName[0].toUpperCase() + monthName.substring(1);

        onBeforeMount(() => {

            setInterval(() => {
                const currentDate = new Date();
                var launchTime = launchDate - currentDate;
                seconds.value = parseInt(launchTime / 1000);
                minutes.value = parseInt(seconds.value / 60);
                hours.value = parseInt(minutes.value / 60);
                days.value = parseInt(hours.value / 24);
            }, 1000);
        });

        return { 
            days,
            hours,
            minutes,
            seconds,
            launchDate,
            monthName
        }
    }
}
</script>