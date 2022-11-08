<template>
    <div id="cybersecurity">
        <Moustache>
            <template #info>
                <span>Você é uma empresa e quer adquirir nossos produtos para seus colaboradores? <a>Fale com nosso consultor.</a></span>
            </template>
        </Moustache>

        <MenuHeaderOld />

        <div class="course-introduction container">
            <div class="row">
                <div class="container col">
                    <div class="text-introduction">
                        <h1>Esteja preparado para lidar com <strong>ameaças digitais</strong></h1>
                        <p>
                            Com o curso de <strong>Cibersegurança para Negócios</strong>, aprenda os princípios de segurança digital. 
                            Identifique os riscos, proteja os ativos digitais e garanta que sua organização continue operando durante um ataque.
                        </p>
                    </div>
                    <div class="buttons">
                        <a href="#conversion-area" v-smooth-scroll>
                            <button id="primary-button" :class="{ medium: !isMobile }">
                                <label>Inscreva-se</label>
                            </button>
                        </a>
                        <button id="outline-button" :class="{ medium: !isMobile }">
                            <label>
                                <i class="ri-honour-line"></i>
                                Ver conteúdo
                            </label>
                        </button>
                    </div>
                    <div class="empresas-colaboradoras">
                        <span>Curso criado em colaboração com</span>
                        <ul>
                            <li>
                                <img src="@/assets/images/universidade-haifa.png" alt="Logo da Universidade de Haifa">
                            </li>
                            <li>
                                <img src="@/assets/images/pwc-colorido.png" alt="Logo da PWC">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="images col">
                    <img class="img-introduction" src="@/assets/images/img-cyber-introduction.png" alt="">
                    <img class="dots" src="@/assets/images/dots.png" alt="">
                </div>
            </div>
        </div>

        <div class="course-percentage">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <span>Top 2 <img src="../assets/images/hacker.png"/></span>
                        <p>
                            O Brasil ficou em segundo lugar entre os países da América Latina que mais sofreram ataques cibernéticos em 2021.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte:  Fortinet Threat Intelligence Insider Latin America, 2021
                        </span>
                    </div>
                    <div class="col">
                        <span>88,5 bilhões <i class="ri-file-lock-line second"></i></span>
                        <p>
                            Este foi o número de tentativas de ataques cibernéticos em 2021 no Brasil, 
                            um aumento de mais de 950% em relação a 2020.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte:  Fortinet Threat Intelligence Insider Latin America, 2021
                        </span>
                    </div>
                    <div class="col">
                        <span>U$ 6 trilhões <img src="../assets/images/lost-money.png" /></span>
                        <p>
                            São as perdas estimadas por ataques e falhas de segurança no mundo em 2021.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte: União Internacional das Telecomunicações (UIT), 2021
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-information container">
            <div class="row">
                <div class="col">
                    <span class="title">Prepare-se para lidar com ataques e garantir a resiliência dos negócios</span>
                    <p class="subtitle">
                        Cibersegurança não é assunto apenas para desenvolvedores. Com a escala digital, 
                        gestores, profissionais de dados e negócios precisam conhecer as melhores práticas 
                        e definir processos para mitigar os riscos e tornar o negócio resiliente aos ataques.
                    </p>
                </div>
            </div>
            <div class="video row">
                <div class="video-area" :class="{ 'col-6': !isMobile }">
                    <vimeo-player ref="player" :video-id="740473374" :options="vimeoOptions"/>
                    <img class="dots" src="@/assets/images/dots.png" alt="">
                </div>
                <div class="description" :class="{ 'col-6': !isMobile }">
                    <span>Identificar, proteger, detectar, responder e recuperar.</span>
                    <p>
                        Conheça os detalhes que esta certificação internacional vai trazer para você!
                    </p>
                    <button id="primary-button">
                        <label><i class="ri-honour-line"></i>Baixar ementa</label>
                    </button>
                </div>
            </div>
        </div>

        <div class="course-method container">
            <div class="row">
                <div class="course-method-intro col">
                    <span class="title">Conheça o método ituring</span>
                    <p class="subtitle">
                        Conhecimento direto da fonte com referências globais em cibersegurança.
                    </p>
                </div>
            </div>
            <div class="course-method-body row">
                <ul class="col">
                    <li class="primary">
                        <i class="ri-camera-line"></i>
                        <div class="method-description">
                            <span>Aulas gravadas e produzidas por profissionais</span>
                            <p>
                                Você vai aprender com profissionais que participam da Diretoria Nacional de 
                                Cibersegurança de Israel via Universidade de Haifa e com a PwC Brasil, uma 
                                das maiores consultorias globais sobre o tema.
                            </p>
                        </div>
                    </li>
                    <li class="second">
                        <img src="@/assets/images/grafismo-tracejado.png" alt="">
                        <i class="ri-map-2-line"></i>
                        <div class="method-description">
                            <span>Projetos focados em desafios reais  </span>
                            <p>
                                Durante este curso, você vai desenvolver projetos práticos focados em desafios 
                                técnicos e diagnósticos com que você terá de lidar em caso de um ataque 
                                cibernético na sua empresa.
                            </p>
                        </div>
                    </li>
                    <li class="third">
                        <img src="@/assets/images/grafismo-tracejado.png" alt="">
                        <i class="ri-medal-line"></i>
                        <div class="method-description">
                            <span>Certificado com reconhecimento internacional</span>
                            <p>
                                Ao concluir o curso e os projetos, você receberá a certificação ituring assinada 
                                pelos parceiros PwC Brasil e University of Haifa/ISRAEL.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <a class="button-alone" href="#conversion-area" v-smooth-scroll>
            <button id="primary-button" class="color-brand-one btn-inscricao">
                <label><i class="ri-honour-line"></i>Inscreva-se agora</label>
            </button>
        </a>

        <div class="course-content container">
            <div class="row">
                <div class="col">
                    <span class="title">Conteúdo programático - Cibersegurança para Negócios</span>
                    <p class="subtitle">
                        Conheça o que você vai aprender durante este curso com certificação internacional.
                    </p>
                    <div id="accordion" class="accordion row">
                        <va-accordion v-model="isOpenCourseModules" multiply>
                            <va-collapse v-for="(collapse, index) in collapsesModules" :key="index" :header="collapse.title" solid>
                                <div class="content">{{ collapse.content }}</div>
                                
                                <ul class="list-detail">
                                    <li class="list-detail-item" v-for="(detail, indexDetail) in collapse.details" :key="indexDetail">{{ detail }}</li>
                                </ul>

                                <div class="project" v-show="collapse.hasProject">{{ collapse.projectDescription }}</div>
                            </va-collapse>
                        </va-accordion>
                    </div>
                </div>
            </div>
        </div>

        <div class="cards container">
            <div class="row">
                <card-generic class="col">
                    <template #header>
                        <label><i class="ri-honour-line"></i>Cibersegurança para Negócios</label>
                    </template>

                    <template #info>
                        Esteja preparado para lidar com ameaças e ataques que comprometem a cibersegurança 
                        da empresa e geram multas milionárias. 
                    </template>

                    <template #btn>
                        <a href="#conversion-area" v-smooth-scroll>
                            <button id="primary-button">
                                <label><i class="ri-honour-line"></i>Inscreva-se agora</label>
                            </button>
                        </a>
                    </template>
                </card-generic>
                <div class="other-card col">
                    <i class="ri-honour-line"></i>
                    <span class="title">Certificação Internacional</span>
                    <p class="description">
                        Curso de 4 meses com certificação ituring assinada pela PwC Brasil e Universidade de Haifa/ISRAEL
                    </p>
                </div>
            </div>
        </div>

        <div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

        <div class="other-infos justify-content-sm-center">
            <div class="container">
                <div class="row">
                    <div class="first" :class="{ 'col col-sm-4': !isMobile }">
                        <img class="logo-parceiro" src="../assets/images/pwc-branco.png" alt="Logo da Pwc">
                        <span class="title">PwC Brasil</span>
                        <p>
                            Consultoria global em cibersegurança que vai te ensinar tudo o que 
                            você precisa saber para atuar no Brasil.
                        </p>
                    </div>
                    <div class="second" :class="{ 'col col-sm-4': !isMobile }">
                        <img class="logo-parceiro" src="../assets/images/haifa-branco.png" alt="Logo de Haifa">
                        <span class="title">Universidade de Haifa/ISRAEL</span>
                        <p>
                            Parceira da Direção Nacional de Cibersegurança de Israel, país 
                            referência em cibersegurança no mundo.
                        </p>
                    </div>
                    <div class="button" :class="{ 'col col-sm-4': !isMobile }">
                        <a href="#conversion-area" v-smooth-scroll>
                            <button id="primary-button">
                                <label>Inscreva-se</label>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="teachers container">
            <div class="row">
                <div class="col">
                    <span class="title">Professores especializados em cibersegurança</span>
                    <CarouselTeacher />
                </div>
            </div>
        </div>

        <div class="students-company container">
            <div class="row">
                <div class="col">
                    <span class="title">Nossos alunos estão nessas empresas</span>
                    <p class="subtitle">
                        Estudantes do ituring estão transformando negócios que transformam o mercado no Brasil e no mundo.
                    </p>
                    <div class="companies">
                        <img v-for="(logo, index) in logoCompanies" :key="index" :src="logo.img" :alt="logo.description">
                    </div>
                </div>
            </div>
        </div>

        <div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

        <div class="students container">
            <div class="row">
                <div class="col">
                    <span class="title">O que dizem nossos alunos</span>
                    <p class="subtitle">
                        Quer conhecer um pouco sobre quem já passou pelo ituring?
                        Veja o depoimento dos nossos alunos.
                    </p>
                    <CarouselStudent />
                </div>
            </div>
        </div>

        <B2BCard />

        <div id="conversion-area" class="conversion-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <span class="title">Evolua na direção certa</span>
                        <p class="subtitle">
                            Inscreva-se agora e garanta conhecimento direto da fonte com certificação internacional.
                        </p>
                        <div class="card-info row">
                            <div class="first-session col-sm-5">
                                <span class="title">Cibersegurança para Negócios</span>
                                <ul class="details">
                                    <li>Curso com profissionais reconhecidos internacionalmente.</li>
                                    <li>Certificação assinada por PwC Brasil e Universidade de Haifa/ISRAEL</li>
                                    <li>2 Projetos baseados em desafios reais</li>
                                    <li>Duração: 4 meses</li>
                                    <li>Curso 100% online</li>
                                </ul>
                                <div class="observation">
                                    <span><i class="ri-shield-check-line"></i>100% de aproveitamento</span>
                                    <span><i class="ri-earth-line"></i>Assista às aulas de qualquer lugar</span>
                                </div>
                            </div>

                            <img class="divider" src="@/assets/images/line-divider.png" alt="">

                            <div class="second-session col-sm-6">

                                <Countdown :date="launchDate" />

                                <div v-show="!isMobile" class="row">
                                    <p class="col">
                                        Domine as habilidades mais requisitadas no mercado, com técnicas comprovadas.
                                    </p>
                                </div>

                                <div class="row price">
                                    <div class="col value">
                                        <label>De <span class="old-price">R$ 2.500,00</span> por</label>
                                        <span class="new-price">R$ 1.990,00</span>
                                        <span class="installments">em até <strong>6x</strong> sem juros</span>
                                    </div>
                                    <div v-show="!isMobile" class="col">
                                        <tag class="tag-popular">
                                            <template #icon>
                                                <i class="ri-honour-line"></i>
                                            </template>
                                            <template #info>
                                                Mais popular
                                            </template>
                                        </tag>
                                    </div>
                                </div>

                                <div class="row button">
                                    <div class="col">
                                        <a>
                                            <button id="primary-button" :class="{ 'large': !isMobile, 'medium': !isMobile }">
                                                <label>Começar agora</label>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="course-faq container">
            <div class="row">
                <div class="col">
                    <span class="title">Perguntas frequentes</span>
                    <p class="subtitle">
                        Caso continue com dúvidas, você sempre pode chamar nosso time de atendimento.
                    </p>
                    <div id="accordion" class="accordion row">
                        <va-accordion v-model="isOpen" multiply>
                            <va-collapse v-for="(collapse, index) in collapsesFAQ" :key="index" :header="collapse.question" solid>
                                <div class="content">{{ collapse.answer }}</div>
                            </va-collapse>
                        </va-accordion>
                    </div>
                </div>
            </div>
        </div>

        <div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

        <ContactExpert />
        
        <MenuFooter />

        <ITuringRights />
    </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import Tag from "../components/Tag.vue";
import CardGeneric from "../components/CardGeneric.vue";
import MenuHeaderOld from "../components/MenuHeaderOld.vue";
import MenuFooter from "../components/MenuFooter.vue";
import ITuringRights from "../components/ITuringRights.vue";
import ContactExpert from "../components/ContactExpert.vue";
import CarouselStudent from "../components/CarouselStudent.vue";
import CarouselTeacher from "../components/CarouselTeacher.vue";
import Moustache from "../components/Moustache.vue";
import { generalStore } from '../store/general';
import B2BCard from "../components/B2BCard.vue";
import Countdown from "../components/Countdown.vue";

export default {
    components: { 
        Tag, CardGeneric, MenuHeaderOld,
        MenuFooter, ITuringRights, ContactExpert, 
        CarouselStudent, CarouselTeacher, Moustache,
        B2BCard, Countdown
    },
    setup() {
        const isMobile = ref(false);
        const general = generalStore();
        let launchDate = new Date('30 September 2022');

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        });

        const isOpenCourseModules = ref([false, false, false, false]);
        let collapsesModules = [
            { 
                title: 'Módulo 1 - Introdução à Segurança da Informação',
                content: 'Conheça os conceitos gerais de segurança da informação e quais os processos e tecnologias que podem auxiliar os negócios na mitigação de riscos cibernéticos.',
                details: [
                    'Introduction: What is Data Security',
                    'Cybersecurity: Technological Perspective',
                    'Conceitos gerais e o impacto de cibersegurança para os negócios'
                ],
                hasProject: false
            },
            { 
                title: 'Módulo 2 - Governança, Risco e Compliance',
                content: 'Compreenda o conjunto de boas práticas e frameworks que têm a finalidade de mitigar riscos associados à cibersegurança e particularidades para atingir a conformidade com as leis.',
                details: [
                    'Regulation',
                    'Big-Data, AI and Legal Liability',
                    'Governança, Frameworks e Gestão de Riscos'
                ],
                hasProject: false
            },
            {
                title: 'Módulo 3 - Privacidade e Aspectos Legais',
                content: 'Aprofunde-se nos aspectos legais que determinam como proceder em casos de incidentes cibernéticos e vazamentos de dados.',
                details: [
                    'Cybersecurity and Privacy',
                    'Cybersecurity and Criminal Law',
                    'Legislação Brasileira e o Ecossistema de Comunicação'
                ],
                hasProject: true,
                projectDescription: 'PROJETO: Localizando, comunicando e mitigando riscos.' 
            },
            {
                title: 'Módulo 4 - Resposta a Incidentes e Resiliência de Negócios',
                content: 'Entenda os frameworks de resposta a incidentes e preservação da continuidade de seu negócio durante crises.',
                details: [
                    'Ransomware: Seeking an Optimal Response Ex Ante and Post',
                    'Data Breach Notification: Law, Policy & Theory',
                    'Gestão de Resposta a Incidentes e Frameworks de Continuidade de Negócios'
                ],
                hasProject: true,
                projectDescription: 'PROJETO: Escolha uma situação e planeje sua resposta à ameaça.'
            }
        ];

        const collapsesFAQ = [
            {
                question: 'Para quem é este curso?',
                answer: `Voltado para profissionais de dados ou negócios, de qualquer segmento, que querem compreender melhor os
                        riscos cibernéticos e aprender técnicas de prevenção e reação à ameaças. Este curso é ideal para quem deseja dominar 
                        tais habilidades, incluindo também análises de cases e perspectivas tecnológicas.`
            },
            {
                question: 'Quais são os pré-requisitos?',
                answer: 'Este curso não possui pré-requisitos.'
            }
        ]

        const logoCompanies = [
            {
                img: new URL('../assets/images/nubank.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/quinto-andar.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/kovi.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/confitec.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/stefanini.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/cyrela.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/havan.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/xp-inc.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/rethink.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/take-blip.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/rd-station.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/sebrae.png', import.meta.url),
                description: ''
            },
            {
                img: new URL('../assets/images/burguer-king.png', import.meta.url),
                description: ''
            }
        ]

        const vimeoOptions = {
            autoplay: true,
            muted: true,
            loop: true,
            title: false,
            byline: false,
            controls: false
        }

        return {
            isOpenCourseModules,
            collapsesModules,
            collapsesFAQ,
            vimeoOptions,
            logoCompanies,
            isMobile,
            launchDate
        }
    }
}
</script>