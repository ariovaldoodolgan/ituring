import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'A escola de negócios e tecnologia que você procura',
			component: () => import('@/views/Home.vue')
		},
		{
			path: '/for-companies',
			name: 'Eleve o conhecimento da sua equipe',
			component: () => import('@/views/B2B.vue')
		},
		{
			path: '/analise-dados-negocios',
			name: 'Análise de Dados para Negócios',
			component: () => import('@/views/AnaliseDadosNegocios.vue')
		},
		{
			path: '/aprenda-programar',
			name: 'Aprenda a Programar',
			component: () => import('@/views/AprendaProgramar.vue')
		},
		{
			path: '/cybersecurity-para-negocios',
			name: 'Cybersecurity para Negócios',
			component: () => import('@/views/Cybersecurity.vue')
		},
		{
			path: '/desenvolvimento-agil',
			name: 'Desenvolvendo Software com Agilidade',
			component: () => import('@/views/DesenvolvendoSoftwareAgilidade.vue')
		},
		{
			path: '/fundamentos-analytics-engineer',
			name: 'Fundamentos de Analytics Engineer',
			component: () => import('@/views/FundamentosAnalyticsEngineer.vue')
		},
		{
			path: '/fundamentos-engenharia-dados',
			name: 'Fundamentos de Engenharia de Dados',
			component: () => import('@/views/FundamentosEngenhariaDados.vue')
		},
		{
			path: '/modern-software-engineer',
			name: 'Becoming a Modern Software Engineer',
			component: () => import('@/views/ModernSoftwareEngineer.vue')
		},
		{
			path: '/monolito-microsservicos',
			name: 'Monolito aos Microsserviços',
			component: () => import('@/views/MonolitoMicrosservicos.vue')
		},
		{
			path: '/pensamento-analitico',
			name: 'Pensamento Analítico e Resolução de Problemas',
			component: () => import('@/views/PensamentoAnalitico.vue')
		},
		{
			path: '/refatoracao-testes-efetivos',
			name: 'Refatoração e Testes Efetivos',
			component: () => import('@/views/RefatoracaoTestesEfetivos.vue')
		},
		{
			path: '/cursos',
			name: 'Catálogo de cursos',
			component: () => import('@/views/Cursos.vue')
		}
	]
});


router.beforeEach((to: any, from, next) => {
	document.title = `ITuring | ${to.name}`;
	next();
});

export default router;
