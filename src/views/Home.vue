<template>
	<div>
    	<MenuHeader />

    	<section id="introduction" class="container">
			<div class="row">
				<div class="col-10">
    	    		<div class="title">
    	      			<span>
    	        			Aprenda, pratique e avance na sua carreira em tecnologia.
    	      			</span>
    	    		</div>
    	    		<div class="subtitle">
    	      			<span>
    	        			Enroll in ITuring today and, for as few as 10 hours a week
    	      			</span>
    	    		</div>
    	    		<div class="buttons">
    	      			<button id="primary-button">
    	        			<label><i class="ri-honour-line"></i>Para você</label>
    	      			</button>
    	      			<button id="outline-button">
    	        			<label><i class="ri-honour-line"></i>Para empresas</label>
    	      			</button>
    	    		</div>
				</div>
				<div class="col-2">
					<img class="logo" src="../assets/images/ituring-marca-dagua.png" alt="Marca d'água ituring">
				</div>
    	  	</div>
    	</section>

		<section id="partners">
			<div class="container">
				<ul class="row">
					<li v-for="(item, index) in partnerLogoList" :key="index">
						<img :src="item.logo" :alt="item.name">
					</li>
				</ul>
			</div>
		</section>

		<div class="course-information container">
            <div class="row">
                <div class="col">
                    <span class="title">Comece a programar do zero</span>
                    <p class="subtitle">
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills 
						you need to help land a high-paying tech job.
                    </p>
                </div>
            </div>
            <div class="video row">
                <div class="video-area" :class="{ 'col-6': !isMobile }">
                    <vimeo-player ref="player" :video-id="752661375" :options="vimeoOptions"/>
                    <img class="dots" src="@/assets/images/dots.png" alt="">
                </div>
                <div class="description" :class="{ 'col-6': !isMobile }">
                    <span>Aulas avançadas</span>
                    <p>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills 
						you need to help land a high-paying tech job.
                    </p>
                    <button id="primary-button">
                        <label><i class="ri-honour-line"></i>Conhecer mais</label>
                    </button>
                </div>
            </div>
        </div>

		<section id="results" class="container">
			<div class="row row-title">
				<span class="title">Nossos resultados</span>
			</div>

			<div class="row row-card">
				<Card class="developer">
					<template #header>
                        <label><i class="ri-code-box-line"></i>Desenvolvedores</label>
                    </template>

					<template #info>
                        4532 desenvolvedores com mais de 90% de satisfação
                    </template>
				</Card>

				<Card class="beginner">
					<template #header>
                        <label><i class="ri-honour-line"></i>Iniciantes</label>
                    </template>

					<template #info>
                        4532 desenvolvedores com mais de 90% de satisfação
                    </template>
				</Card>

				<Card class="company">
					<template #header>
                        <label><i class="ri-building-4-line"></i>Empresas</label>
                    </template>

					<template #info>
                        4532 desenvolvedores com mais de 90% de satisfação
                    </template>
				</Card>
			</div>
		</section>

		<section id="schools" class="container">
			<div class="row row-title">
				<span class="title">Nossas escolas</span>
			</div>

			<div class="row row-card">
				<Card class="programming">
					<template #header>
                        <label><i class="ri-code-box-line"></i>Programação</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>
				</Card>

				<Card class="business">
					<template #header>
                        <label><i class="ri-honour-line"></i>Negócios</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>
				</Card>

				<Card class="data">
					<template #header>
                        <label><i class="ri-building-4-line"></i>Ciência de Dados</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>
				</Card>

				<Card class="cybersecurity">
					<template #header>
                        <label><i class="ri-building-4-line"></i>Cibersegurança</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>
				</Card>
			</div>
		</section>

		<div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

		<StudentsCompany />

		<ContactExpert />

		<MenuFooter />

		<ITuringRights />
  	</div>
</template>

<script lang="ts">
import Card from '../components/Card.vue';
import StudentsCompany from '../components/StudentsCompany.vue';
import ContactExpert from '../components/ContactExpert.vue';
import MenuHeader from '../components/MenuHeader.vue';
import MenuFooter from '../components/MenuFooter.vue';
import ITuringRights from '../components/ITuringRights.vue';

export default {
  components: {
	Card, StudentsCompany, ContactExpert,
    MenuHeader, MenuFooter, ITuringRights
  },
  setup() {
	  const partnerLogoList = [
		  {
			  logo: new URL('../assets/images/microsoft-gray.png', import.meta.url),
			  name: 'Microsoft'
		  },
		  {
			  logo: new URL('../assets/images/loft-gray.png', import.meta.url),
			  name: 'Loft'
		  },
		  {
			  logo: new URL('../assets/images/refactory-gray.png', import.meta.url),
			  name: 'Refactory'
		  },
		  {
			  logo: new URL('../assets/images/aws-gray.png', import.meta.url),
			  name: 'AWS'
		  },
		  {
			  logo: new URL('../assets/images/cisco-gray.png', import.meta.url),
			  name: 'Cisco'
		  }
	  ];
	
	return {
		partnerLogoList
	};
  }
};
</script>