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
				
			</div>
		</section>
  	</div>
</template>

<script lang="ts">
import MenuHeader from "../components/MenuHeader.vue";

export default {
  components: {
    MenuHeader,
  },
};
</script>