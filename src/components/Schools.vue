<template>
	<section id="schools" class="container">
		<div class="row row-title">
			<span class="title">Nossas escolas</span>
		</div>

		<div class="row row-card">
			<card-generic class="programming">
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
			</card-generic>
	
			<card-generic class="business">
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
			</card-generic>

			<card-generic class="data">
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
			</card-generic>
	
			<card-generic class="cybersecurity">
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
			</card-generic>
		</div>
	</section>
</template>

<script lang="ts">
import CardGeneric from './CardGeneric.vue';

export default {
	components: { CardGeneric }
}
</script>