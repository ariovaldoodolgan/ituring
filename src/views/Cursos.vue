<template>
    <div id="courses">
        <Moustache>
            <template #info>
                <span>Você é uma empresa e quer adquirir nossos produtos para seus colaboradores? <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511916221666" target="_system">Fale com nosso consultor.</a></span>
            </template>
        </Moustache>

        <MenuHeaderOld />

        <div class="search-course">
            <img class="dots-left" src="@/assets/images/dots-cursos-left.png" alt="">
            <div class="container">
                <div class="text row">
                    <span class="title">Encontre o curso que deseja aqui</span>
                    <span class="subtitle">Procure por todos os tipos de cursos</span>
                </div>
                <div class="search row">
                    <va-input placeholder="Pesquisar por curso, escola ou nível" v-model="inputValue" @keyup.enter="searchByText()">
                        <template #prependInner>
                            <button class="search-button"
                                @click="searchByText()">
                                <i class="ri-search-line"></i>
                            </button>
                        </template>
                    </va-input>
                </div>
                <!-- <div class="schools row">
                    <button id="primary-button" class="col">
                        <label>School of Data</label>
                    </button>
                    <button id="primary-button" class="col">
                        <label>School of Development</label>
                    </button>
                    <button id="primary-button" class="col">
                        <label>School of Cybersecurity</label>
                    </button>
                    <button id="primary-button" class="col">
                        <label>School Business</label>
                    </button>
                </div> -->
            </div>
            <img class="dots-right" src="@/assets/images/dots-cursos-right.png" alt="">
        </div>

        <div class="courses">
            <div class="container">
                <div class="filters-section">
                    <div class="text row">
                        <span class="title col">Uma ampla seleção de cursos</span>
                    </div>
                    <div class="filters row">
                        <var-select :line="false" class="col" placeholder="Nível" clearable v-model="levelFilterValue">
                            <var-option v-for="(item, index) in levels" :label="item" :key="index" />
                        </var-select>
                        <var-select :line="false" class="col" placeholder="Escola" clearable v-model="schoolFilterValue">
                            <var-option v-for="(item, index) in schools" :label="item" :key="index" />
                        </var-select>
                        <var-select :line="false" class="col" placeholder="Duração" clearable v-model="durationFilterValue">
                            <var-option v-for="(item, index) in duration" :label="item" :key="index" />
                        </var-select>
                    </div>
                </div>

                <div class="cards row" :class="{ 'completeLine': searchResult.length > 2, 
                                                        'incompleteLine': searchResult.length < 3 }">
                                                        
                    <CourseCard :courseList="searchResultByText.length > 0 ? searchResultByText : searchResult" class="col" />
                </div>
            </div>
        </div>

        <MenuFooter />

        <ituringRights />
    </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, computed } from 'vue';
import { generalStore } from '../stores/general';
import Moustache from "../components/Moustache.vue";
import MenuHeaderOld from "../components/MenuHeaderOld.vue";
import MenuFooter from "../components/MenuFooter.vue";
import ituringRights from "../components/ituringRights.vue";
import CourseCard from "../components/CourseCard.vue";

export default {
    components: { 
        Moustache, MenuHeaderOld,
        MenuFooter, ituringRights,
        CourseCard
    },
    setup() {
        const isMobile = ref(false);
        const general = generalStore();

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        });

        let levels = ['Iniciante', 'Intermediário'];
        let schools = ['Development', 'Cybersecurity', 'Business', 'Data'];
        let duration = ['5 dias', '1 mês', '2 meses', '3 meses', '4 meses', '5 meses', '6 meses'];
        const levelFilterValue = ref('');
        const schoolFilterValue = ref('');
        const durationFilterValue = ref('');
        const inputValue = ref('');
        const searchResultByText = ref([]);

        const courseList = [
            {
                id: 1,
                schoolName: 'Cybersecurity',
                courseName: 'Cibersegurança para Negócios',
                description: `Compreenda os princípios de segurança digital, risco e compliance ligados aos seus ativos digitais e 
                tome as melhores decisões para prevenir e reagir às ameaças digitais.`,
                skills: '',
                requirements: [],
                duration: '4 meses',
                level: 'Iniciante',
                route: '/cybersecurity-para-negocios'
            },
            {
                id: 2,
                schoolName: 'Data',
                courseName: 'Fundamentos de Analytics Engineer',
                description: `Dê os seus primeiros passos para a carreira em Dados, aprendendo SQL do básico ao avançado e 
                como aplicar nos Negócios.`,
                skills: '',
                requirements: [],
                duration: '3 meses',
                level: 'Iniciante',
                route: '/fundamentos-analytics-engineer'
            },
            {
                id: 3,
                schoolName: 'Development',
                courseName: 'Becoming a Modern Software Engineer',
                description: `Aprenda a construir software com as técnicas mais modernas de desenvolvimento e conquiste 
                oportunidades de maior senioridade no Brasil e no mundo.`,
                skills: '',
                requirements: [
                    'Domínio de programação e versionamento de código',
                    'Noções básicas de front-end',
                    'Noções básicas de backend'
                ],
                duration: '6 meses',
                level: 'Intermediário',
                route: '/modern-software-engineer'
            },
            {
                id: 4,
                schoolName: 'Business',
                courseName: 'Pensamento Analítico e Resolução de Problemas',
                description: `Domine as habilidades mais requisitadas no mercado, com técnicas comprovadas para você 
                resolver problemas de negócios e aprimorar sua capacidade analítica.`,
                skills: '',
                requirements: [],
                duration: '1 mês',
                level: 'Iniciante',
                route: '/pensamento-analitico'
            },
            {
                id: 5,
                schoolName: 'Development',
                courseName: 'Monolito aos Microsserviços',
                description: `Desenvolva microsserviços com Docker e Kubernetes, domine modelagem de domínio com DDD 
                e aprenda a migrar de um monolito para microsserviços.`,
                skills: '',
                requirements: [
                    'Domínio de programação e versionamento de código',
                    'Noções básicas de front-end',
                    'Noções básicas de back-end'
                ],
                duration: '3 meses',
                level: 'Intermediário',
                route: '/monolito-microsservicos'
            },
            {
                id: 6,
                schoolName: 'Business',
                courseName: 'Análise de Dados para Negócios',
                description: `Aprenda estatística aplicada aos negócios e seja capaz de criar seus próprios dashboards e 
                análises em Power BI, sem precisar de um especialista. Comunique usando técnicas de storytelling com dados 
                e influencie comportamentos.`,
                skills: '',
                requirements: [
                    'Familiaridade com planilha eletrônica como Excel e Google Sheets'
                ],
                duration: '5 meses',
                level: 'Intermediário',
                route: '/analise-dados-negocios'
            },
            {
                id: 7,
                schoolName: 'Development',
                courseName: 'Refatoração e Testes Efetivos',
                description: `Aprenda a construir software aplicando testes automatizados seguindo os processos de TDD e 
                BDD. Domine princípios de refatoração e design patterns.`,
                skills: '',
                requirements: [
                    'Domínio de programação e versionamento de código',
                    'Noções básicas de front-end',
                    'Noções básicas de back-end'
                ],
                duration: '3 meses',
                level: 'Intermediário',
                route: '/refatoracao-testes-efetivos'
            },
            {
                id: 8,
                schoolName: 'Development',
                courseName: 'Desenvolvendo Software com Agilidade',
                description: `Descubra as metodologias de desenvolvimento ágil que otimizam a produtividade e trazem os 
                melhores resultados para as grandes empresas do mundo!`,
                skills: '',
                requirements: [],
                duration: '1 mês',
                level: 'Iniciante',
                route: '/desenvolvimento-agil'
            },
            {
                id: 9,
                schoolName: 'Data',
                courseName: 'Fundamentos de Engenharia de Dados',
                description: `Aprenda os princípios de engenharia que são responsáveis por manter o ciclo de dados. 
                Aprenda a limpar, processar, orquestrar e armazenar os dados orientado a necessidade do negócio.`,
                skills: '',
                requirements: [
                    'Conhecimento sólidos em Modelagem de Dados voltado a Negócios',
                    'Conhecimentos sólidos de SQL Avançado',
                    'Visão robusta de negócios e métricas',
                    'Conhecimento de lógica de programação'
                ],
                duration: '3 meses',
                level: 'Intermediário',
                route: '/fundamentos-engenharia-dados'
            },
            {
                id: 10,
                schoolName: 'Development',
                courseName: 'Aprenda a Programar',
                description: `Descubra se programação é para você e dê os primeiros passos em uma carreira de tecnologia. 
                Aprenda a programar!`,
                skills: '',
                requirements: [],
                duration: '5 dias',
                level: 'Iniciante',
                route: '/aprenda-programar'
            }
        ];

        function filterCourseList(finalArray, propertyName, filterValue) {

            if (finalArray.length > 0) {
                finalArray = finalArray.filter(el => 
                    (el[`${propertyName}`] == filterValue));

            } else {
                finalArray = courseList.filter(el => 
                    (el[`${propertyName}`] == filterValue));

            }

            return finalArray;
        }

        function isFilterNotEmptyOrUndefined(filterValue) {
            return filterValue != '' && filterValue != undefined;
        }

        const searchResult = computed(() => {
            let finalArray = [];
            searchResultByText.value = [];
            
            if ((levelFilterValue.value == '' || levelFilterValue.value == undefined) && 
                (schoolFilterValue.value == '' || schoolFilterValue.value == undefined) &&
                (durationFilterValue.value == '' || durationFilterValue.value == undefined)) {
                
                return courseList;
            }

            if (isFilterNotEmptyOrUndefined(levelFilterValue.value)) {
                
                finalArray = filterCourseList(finalArray, 'level', levelFilterValue.value)

            }
            if (isFilterNotEmptyOrUndefined(schoolFilterValue.value)) {
                
                finalArray = filterCourseList(finalArray, 'schoolName', schoolFilterValue.value);

            }
            if (isFilterNotEmptyOrUndefined(durationFilterValue.value)) {
                
                finalArray = filterCourseList(finalArray, 'duration', durationFilterValue.value);
                                
            }

            return finalArray;
        });

        function searchByText() {

            searchResultByText.value = courseList.filter(el => (
                el.schoolName.toLowerCase() == inputValue.value.toLowerCase() ||
                el.courseName.toLowerCase().includes(inputValue.value.toLowerCase()) ||
                el.level.toLowerCase() == inputValue.value.toLowerCase()
            ));
        }

        return {
            levels,
            schools,
            duration,
            levelFilterValue,
            schoolFilterValue,
            durationFilterValue,
            courseList,
            isMobile,
            searchResult,
            searchByText,
            searchResultByText,
            inputValue
        }
    }
}
</script>