<template>
    <MenuHeader />

    <section id="introduction" class="container business">
        <div class="row">
			<div class="text col-7">
    			<div class="title">
    	  			<span>
    	    			Desenvolva talentos digitais para a sua empresa.
    	  			</span>
    			</div>
    			<div class="subtitle">
    	  			<span>
    	    			Enroll in ITuring today and, for as few as 10 hours a week
    	  			</span>
    			</div>
    			<div class="buttons">
    	  			<button id="outline-button">
    	    			<label><i class="ri-honour-line"></i>Conheça mais</label>
    	  			</button>
    			</div>
			</div>
			<div class="col-4">
				<img class="computer" src="../assets/images/computer.png" alt="Marca d'água ituring">
			</div>
    	</div>
    </section>

    <section id="partners" class="business">
		<div class="container">
            <div class="row">
                <span class="col-8">
                    Empresas que confiam no ITuring para desenvolvimento de talentos digitais
                </span>
			    <ul class="col-4">
			    	<li v-for="(item, index) in partnerLogoList" :key="index">
			    		<img :src="item.logo" :alt="item.name">
			    	</li>
			    </ul>
            </div>
		</div>
	</section>

    <section id="growth-company" class="container">
        <div class="row row-title">
			<div class="col">
                <span class="title">Por que treinar o seu time?</span>
                <p class="subtitle">
                    Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills 
                    you need to help land a high-paying tech job. 
                </p>
            </div>
		</div>

        <div class="content row">
            <div class="lead">
                <div class="col image">
                    <img src="@/assets/images/sinalizador-verde.png" alt="sinalizador verde">
                </div>

                <div class="col text">
                    <span class="title">Lideranças</span>
                    <p class="description">Torne sua liderança mais efetiva.</p>
                </div>
            </div>

            <div class="talent">
                <div class="col image">
                    <img src="@/assets/images/sinalizador-azul.png" alt="sinalizador azul">
                </div>

                <div class="col text">
                    <span class="title">Talentos</span>
                    <p class="description">Desenvolva talentos digitais e promova senioridade do time.</p>
                </div>
            </div>

            <div class="people">
                <div class="col image">
                    <img src="@/assets/images/sinalizador-preto.png" alt="sinalizador preto">
                </div>

                <div class="col text">
                    <span class="title">Todos os colaboradores</span>
                    <p class="description">Capacitação para todas as áreas da empresa avançarem em tecnologia.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="partnership" class="container">
        <div class="row row-title">
			<div class="col">
                <span class="title">Escala completa para a sua empresa</span>
                <p class="subtitle">
                    Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand skills 
                    you need to help land a high-paying tech job. 
                </p>
            </div>
		</div>

        <div class="content row">
            <Partner>
                <template #image>
                    <img src="@/assets/images/samsung-ocean.png" alt="samsung ocean">
                </template>

                <template #header>
    	            <label>Samsung Ocean</label>
    	        </template>
	
				<template #info>
    	            Projeto de criação de talentos digitais que dominam tecnologias específicas e demandadas 
                    pela Samsumg. Mais de 200 pessoas preparadas para desafios de tecnologia na empresa.
    	        </template>
            </Partner>

            <Partner>
                <template #image>
                    <img class="usp" src="@/assets/images/poli-usp.png" alt="samsung ocean">
                </template>

                <template #header>
    	            <label>Poli-USP</label>
    	        </template>
	
				<template #info>
    	            Junto com a Poli-USP o ITuring fez a capacitação e preparação de 70 talentos na área de 
                    Engenharia de Software para atuação na Didi.
    	        </template>
            </Partner>
        </div>
    </section>

    <div class="dots-divider">
        <img src="@/assets/images/dots_2.png" alt="">
    </div>

    <section id="hard-soft-skills" class="container">
        <div class="row row-title">
			<div class="col">
                <span class="title">Integre visão de negócio e capacidade técnica</span>
                <p class="subtitle">
                    Hard Skills e Soft Skills alinhadas para promover resultados práticos e efetivos em toda a empresa.
                </p>
            </div>
		</div>

        <div class="content row">
			<div class="text col">
				<div class="row first">
					<div class="img">
						<img src="@/assets/images/rectangle-green.png" alt="sinalizador verde">
					</div>
					<div class="text">
						<span class="title">Prática para evolução do time</span>
						<p class="description">
							Com a metodologia baseada em projetos você pode colocar desafios reais da empresa ou cases para que o time 
                            coloque em prática os conhecimentos adquiridos no curso.
						</p>
					</div>
				</div>

				<div class="row second">
					<div class="img">
						<img src="@/assets/images/rectangle-red.png" alt="sinalizador vermelho">
					</div>
					<div class="text">
						<span class="title">Conhecimento direto da fonte e personalizado</span>
						<p class="description">
							Precisa de conhecimento específico? O ITuring te ajuda no desenvolvimento de toda programação do curso com 
                            aulas promovidas por  instrutores que são profissionais do mercado.
						</p>
					</div>
				</div>

				<div class="row third">
					<div class="img">
						<img src="@/assets/images/rectangle-blue.png" alt="sinalizador azul">
					</div>
					<div class="text">
						<span class="title">Capacite seus talentos em tecnologia</span>
						<p class="description">
							Promova conhecimento em tecnologia em todas as áreas da empresa, da alta gestão a operação. Com o ITuring 
                            você cria e desenvolve talentos digitais em todas as áreas para gerar eficiência e impacto no Negócio.
						</p>
					</div>
				</div>
			</div>

			<div class="image col">
				<img src="@/assets/images/graph-chart.png" alt="gráficos de performance">
			</div>
		</div>
    </section>

    <Schools />

    <section id="team-project" class="container">
        <div class="row row-title">
			<div class="col">
                <span class="title">Projetos personalizados para o seu time</span>
                <p class="subtitle">
                    Enroll in ITuring today and, for as few as 10 hours a week, you can get the in-demand 
                    skills you need to help land a high-paying tech job. 
                </p>
            </div>
		</div>

        <div class="cards row">
            <DataCard>
				<template #header>
    	            <label>45%<i class="ri-arrow-right-up-line"></i></label>
    	        </template>
	
				<template #info>
    	            Crescimento da área de tecnologia aumentou em 45% nos últimos 5 anos. 
    	        </template>
			</DataCard>

            <DataCard>
				<template #header>
    	            <label>45M<i class="ri-pie-chart-line"></i></label>
    	        </template>
	
				<template #info>
    	            Crescimento da área de tecnologia aumentou em 45% nos últimos 5 anos.
    	        </template>
			</DataCard>

            <DataCard>
				<template #header>
    	            <label>112.4<i class="ri-arrow-right-up-line"></i></label>
    	        </template>
	
				<template #info>
    	            Crescimento da área de tecnologia aumentou em 45% nos últimos 5 anos.
    	        </template>
			</DataCard>
        </div>
    </section>

    <div class="dots-divider">
        <img src="@/assets/images/dots_2.png" alt="">
    </div>

    <ContactExpert />
    
    <MenuFooter />

    <ITuringRights />
</template>

<script lang="ts">
import MenuHeader from '../components/MenuHeader.vue';
import Partner from '../components/Partner.vue';
import Schools from '../components/Schools.vue';
import DataCard from '../components/DataCard.vue';
import ContactExpert from '../components/ContactExpert.vue';
import MenuFooter from '../components/MenuFooter.vue';
import ITuringRights from '../components/ITuringRights.vue';

export default {
    components: { 
        MenuHeader, Partner, Schools, DataCard,
        ContactExpert, MenuFooter, ITuringRights
    },
    setup() {
	  const partnerLogoList = [
		  {
			  logo: new URL('../assets/images/microsoft-opaco.png', import.meta.url),
			  name: 'Microsoft'
		  },
		  {
			  logo: new URL('../assets/images/loft-opaco.png', import.meta.url),
			  name: 'Loft'
		  },
		  {
			  logo: new URL('../assets/images/refactory-opaco.png', import.meta.url),
			  name: 'Refactory'
		  },
		  {
			  logo: new URL('../assets/images/aws-opaco.png', import.meta.url),
			  name: 'AWS'
		  },
		  {
			  logo: new URL('../assets/images/cisco-opaco.png', import.meta.url),
			  name: 'Cisco'
		  }
	  ];
	
	return {
		partnerLogoList
	};
  }
}
</script>