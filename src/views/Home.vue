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

		<div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

		<section class="hability container">
			<div class="row row-title">
				<div class="col">
                    <span class="title">As habilidades digitais mais requisitadas no mercado</span>
                    <p class="subtitle">
                        Da Programação a Análise de Dados, desenvolva as habilidades e torne-se um talento digital.
                    </p>
                </div>
			</div>

			<div class="content row">
				<div class="text col">
					<div class="row experience">
						<div class="img">
							<img src="@/assets/images/rectangle-green.png" alt="sinalizador verde">
						</div>
						<div class="text">
							<span class="title">Experiência prática</span>
							<p class="description">
								Em todos os cursos do ITuring os alunos desenvolvem projetos práticos para viver desafios 
								reais do mercado e ganhar experiência.
							</p>
						</div>
					</div>

					<div class="row support">
						<div class="img">
							<img src="@/assets/images/rectangle-red.png" alt="sinalizador vermelho">
						</div>
						<div class="text">
							<span class="title">Suporte de especialistas</span>
							<p class="description">
								Além de instrutores que são profissionais de mercado, todos os projetos têm revisão de 
								especialistas da área que trazem feedbacks e dicas práticas. 
							</p>
						</div>
					</div>

					<div class="row knowledge">
						<div class="img">
							<img src="@/assets/images/rectangle-blue.png" alt="sinalizador azul">
						</div>
						<div class="text">
							<span class="title">Conhecimento direto da fonte.</span>
							<p class="description">
								Conte com instrutores que atuam nas empresas mais conceituadas do Brasil.
							</p>
						</div>
					</div>
				</div>

				<div class="image col">
					<img src="@/assets/images/hability.png" alt="">
				</div>
			</div>
		</section>

		<section id="schools" class="container">
			<div class="row row-title">
				<span class="title">Nossas escolas</span>
			</div>

			<div class="row row-card">
				<Card class="programming">
					<template #header>
                        <label><i class="ri-terminal-box-line"></i>Programação</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>

					<template #btn>
						<button id="primary-button">
							<label><i class="ri-honour-line"></i>Acessar escola de programação</label>
						</button>
					</template>
				</Card>

				<Card class="business">
					<template #header>
                        <label><i class="ri-book-line"></i>Negócios</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>

					<template #btn>
						<button id="primary-button">
							<label><i class="ri-honour-line"></i>Acessar escola de negócios</label>
						</button>
					</template>
				</Card>

				<Card class="data">
					<template #header>
                        <label><i class="ri-database-2-line"></i>Ciência de Dados</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>

					<template #btn>
						<button id="primary-button">
							<label><i class="ri-honour-line"></i>Acessar escola de dados</label>
						</button>
					</template>
				</Card>

				<Card class="cybersecurity">
					<template #header>
                        <label><i class="ri-rotate-lock-line"></i>Cibersegurança</label>
                    </template>

					<template #info>
                        Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills you need 
						to help land a high-paying tech job. 
                    </template>

					<template #btn>
						<button id="primary-button">
							<label><i class="ri-honour-line"></i>Acessar escola de cibersegurança</label>
						</button>
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