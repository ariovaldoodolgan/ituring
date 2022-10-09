<template>
    <div id="aprenda-programar">
        <Moustache>
            <template #info>
                <span>Você é uma empresa e quer adquirir nossos produtos para seus colaboradores? <a>Fale com nosso consultor.</a></span>
            </template>
        </Moustache>

        <MenuHeaderOld />

        <div class="course-introduction container">
            <div class="row">
                <div class="container col">
                    <Tag v-if="!isMobile" class="tag-discount">
                        <template #info>
                            Gratuito
                        </template>
                    </Tag>
                    <div class="text-introduction">
                        <h1>O lugar certo para começar sua <strong>carreira em tecnologia</strong></h1>
                        <p>
                            Com o curso gratuito <strong>Aprenda a Programar</strong>, dê os primeiros passos em 
                            uma carreira de tecnologia e conheça os princípios e grandes oportunidades do universo 
                            de programação.
                        </p>
                    </div>
                    <div class="buttons">
                        <a href="#conversion-area" v-smooth-scroll>
                            <button id="primary-button" :class="{ medium: !isMobile }">
                                <label>Avise-me</label>
                            </button>
                        </a>
                    </div>
                    <div class="community">
                        <img src="@/assets/images/discord-circle.svg" alt="Ícone vazado do discord">
                        <div class="text">
                            <strong>GRUPO DISCORD</strong>
                            <h3>Aprenda a Programar</h3>
                            <a>acesse aqui</a>
                        </div>
                    </div>
                </div>
                <div class="images col">
                    <img class="img-introduction" src="@/assets/images/img-curso-aprenda-a-programar.png" alt="">
                    <img class="dots" src="@/assets/images/dots.png" alt="">
                </div>
            </div>
        </div>

        <div class="course-percentage">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <span>797 mil <i class="ri-code-box-line first"></i></span>
                        <p>
                            É o número estimado de profissionais que o mercado de tecnologia brasileiro vai precisar até 2025.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte: Demanda de Talentos em TIC e Estratégia Σ TCEM, Brasscom, 2021
                        </span>
                    </div>
                    <div class="col">
                        <span>2,5 vezes maior <i class="ri-coins-line second"></i></span>
                        <p>
                            É a média salarial do setor de tecnologia, em comparação à média salarial nacional.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte: Demanda de Talentos em TIC e Estratégia Σ TCEM, Brasscom, 2021
                        </span>
                    </div>
                    <div class="col">
                        <span>+ de 100 mil vagas <i class="ri-line-chart-line third"></i></span>
                        <p>
                            Em aberto por ano, considerando a previsão de abertura de 159 mil vagas contra cerca de 
                            53 mil pessoas formadas em áreas de tecnologia no Brasil anualmente.
                        </p>
                        <span v-show="!isMobile" class="fonte">
                            Fonte: Demanda de Talentos em TIC e Estratégia Σ TCEM, Brasscom, 2021
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-information container">
            <div class="row">
                <div class="col">
                    <span class="title">Destrave seu potencial para uma área super promissora</span>
                    <span class="subtitle">
                        Descubra como <strong>qualquer pessoa pode, sim, aprender a programar</strong>, com um bom plano 
                        de estudos, ajustes comportamentais e de mentalidade, muita dedicação, prática e perseverança.
                    </span>
                </div>
            </div>
            <div class="video row">
                <div class="video-area" :class="{ 'col-6': !isMobile }">
                    <vimeo-player ref="player" :video-id="748786888" :options="vimeoOptions"/>
                    <img class="dots" src="@/assets/images/dots.png" alt="">
                </div>
                <div class="description" :class="{ 'col-6': !isMobile }">
                    <span>Desenvolva sua lógica, construa caminhos e crie soluções.</span>
                    <p>
                        Entenda que programar não é tão difícil quanto parece.
                    </p>
                    <a href="#conversion-area" v-smooth-scroll>
                        <button id="primary-button" :class="{ medium: !isMobile }">
                            <label>Avise-me</label>
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div class="course-method container">
            <div class="row">
                <div class="course-method-intro col">
                    <span class="title">Conheça o método ituring</span>
                    <p class="subtitle">
                        Aprendizado na prática com apoio de especialistas durante todo o percurso.
                    </p>
                </div>
            </div>
            <div class="course-method-body row">
                <ul class="col">
                    <li class="primary">
                        <i class="ri-camera-line"></i>
                        <div class="method-description">
                            <span>Aulas ao vivo que ficam gravadas para assistir depois</span>
                            <p>
                                Uma imersão de cinco dias no mundo da programação, com instrução e apoio ao vivo 
                                para tirar qualquer dúvida do caminho.
                            </p>
                        </div>
                    </li>
                    <li class="second">
                        <img src="@/assets/images/grafismo-tracejado.png" alt="">
                        <i class="ri-map-2-line"></i>
                        <div class="method-description">
                            <span>Aprendizado contínuo com muita mão na massa</span>
                            <p>
                                Durante este curso, você vai ter tarefas práticas para exercitar o que aprendeu 
                                e começar a ter contato com os desafios da programação.
                            </p>
                        </div>
                    </li>
                    <li class="third">
                        <img src="@/assets/images/grafismo-tracejado.png" alt="">
                        <i class="ri-medal-line"></i>
                        <div class="method-description">
                            <span>Certificado para valorizar o currículo</span>
                            <p>
                                Ao concluir o curso e as tarefas obrigatórias, você receberá um certificado 
                                emitido pelo ituring para comprovar sua experiência e impulsionar sua carreira.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <a class="button-alone" href="#conversion-area" v-smooth-scroll>
            <button id="primary-button" class="color-brand-one btn-inscricao">
                <label><i class="ri-honour-line"></i>Avise-me</label>
            </button>
        </a>

        <div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

        <div class="course-content container">
            <div class="row">
                <div class="col">
                    <span class="title">Conteúdo programático - Aprenda a Programar</span>
                    <p class="subtitle">
                        Conheça o que você vai aprender durante este curso.
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
                <Card class="col">
                    <template #header>
                        <label><i class="ri-honour-line"></i>Aprenda a Programar</label>
                    </template>

                    <template #info>
                        Ao final deste curso gratuito, você terá muito mais clareza sobre quais serão seus 
                        próximos passos para uma carreira de sucesso em programação.
                    </template>

                    <template #btn>
                        <a href="#conversion-area" v-smooth-scroll>
                            <button id="primary-button">
                                <label><i class="ri-honour-line"></i>Avise-me</label>
                            </button>
                        </a>
                    </template>
                </Card>
                <div class="other-card col">
                    <i class="ri-honour-line"></i>
                    <span class="title">Online e ao vivo</span>
                    <p class="description">
                        Curso de cinco dias, com apoio constante de profissionais experientes e uma comunidade 
                        para tirar dúvidas diretamente com professores do ituring.
                    </p>
                </div>
            </div>
        </div>

        <div class="dots-divider">
            <img src="@/assets/images/dots_2.png" alt="">
        </div>

        <div class="teachers container">
            <div class="row">
                <div class="col">
                    <CarouselTeacher :teacherList="teacherList">
                        <template #header>
                            <span class="title">Professores especializados em desenvolvimento de software</span>
                        </template>
                    </CarouselTeacher>
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
                    <CarouselStudent class="curso-gratuito" :studentList="studentList">
                        <template #header>
                            <span class="title">O que dizem nossos alunos</span>
                        </template>
                        <template #description>
                            <p class="subtitle">
                                Quer conhecer um pouco sobre quem já passou pelo ituring?
                                Veja o depoimento dos nossos alunos.
                            </p>
                        </template>
                    </CarouselStudent>
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
                            Em breve abriremos novas turmas do curso gratuito.
                        </p>
                        <div class="card-info row">
                            <div class="first-session col-sm-5">
                                <span class="title">Aprenda a Programar</span>
                                <ul class="details">
                                    <li>Imersão de cinco dias no universo da programação, com aulas online e ao vivo</li>
                                    <li>Gravação disponível para assistir depois se não puder participar no horário da aula</li>
                                    <li>Certificado emitido pelo ituring</li>
                                    <li>Contato direto com professores e alunos para tirar dúvidas e conversar sobre carreira</li>
                                    <li>Curso 100% online</li>
                                </ul>
                                <div class="observation">
                                    <span><i class="ri-shield-check-line"></i>100% de aproveitamento</span>
                                    <span><i class="ri-book-mark-line"></i>Dicas importantes e materiais de apoio disponibilizados pelos professores</span>
                                </div>
                            </div>

                            <img class="divider" src="@/assets/images/line-divider.png" alt="">

                            <div class="second-session col-sm-6">

                                <Countdown :date="launchDate" />

                                <div v-show="!isMobile" class="row">
                                    <p class="col">
                                        Descubra se programação é para você e dê os primeiros passos em uma carreira de tecnologia.
                                    </p>
                                </div>

                                <div class="row price">
                                    <div class="col value">
                                        <span class="new-price">Totalmente gratuito!</span>
                                    </div>
                                </div>

                                <div class="row button">
                                    <div class="col">
                                        <button id="primary-button" :class="{ 'large': !isMobile, 'medium': !isMobile }">
                                            <label>Avise-me</label>
                                        </button>
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
import Card from "../components/Card.vue";
import MenuHeaderOld from "../components/MenuHeaderOld.vue";
import MenuFooter from "../components/MenuFooter.vue";
import ITuringRights from "../components/ITuringRights.vue";
import ContactExpert from "../components/ContactExpert.vue";
import CarouselStudent from "../components/CarouselStudent.vue";
import CarouselTeacher from "../components/CarouselTeacher.vue";
import Moustache from "../components/Moustache.vue";
import { generalStore } from '../stores/general';
import B2BCard from "../components/B2BCard.vue";
import Countdown from "../components/Countdown.vue";
import { PushDataLayer } from '../common/utils/GTMEvents';

export default {
    components: { 
        Tag, Card, MenuHeaderOld,
        MenuFooter, ITuringRights, ContactExpert, 
        CarouselStudent, CarouselTeacher, Moustache,
        B2BCard, Countdown
    },
    setup() {
        const isMobile = ref(false);
        const general = generalStore();

        let launchDate = new Date('3 October 2022');

        let teacherList = [
            {
                id: 1,
                photoName: new URL('../assets/images/jo-souza.png', import.meta.url),
                name: 'Jô Souza',
                observation1: 'Consultora de desenvolvimento - ThoughtWorks',
                observation2: null,
                linkedin: ''
            },
            {
                id: 2,
                photoName: new URL('../assets/images/tiago-sestari.png', import.meta.url),
                name: 'Tiago Sestari',
                observation1: 'Engenheiro de Integração - ESW',
                observation2: null,
                linkedin: ''
            },
            {
                id: 3,
                photoName: new URL('../assets/images/thales-carvalho.png', import.meta.url),
                name: 'Thales Carvalho',
                observation1: 'Head de Produto e Engenharia - ituring',
                observation2: null,
                linkedin: ''
            }
        ];

        let studentList = [
            {
                id: 1,
                photoName: new URL('../assets/images/marcio-oliveira.png', import.meta.url),
                name: 'Marcio Oliveira',
                companyRole: null,
                course: null,
                review: `Gostei muito de ter feito essa imersão. As aulas foram super didáticas e a pedagogia é 
                emancipadora: o passo a passo das atividades, mesmo sendo detalhadas, não era dado de mão beijada, 
                mas de um jeito que o aluno se tornasse protagonista na aprendizagem. O material é muito bom, bela 
                apresentação e conteúdo. Parabéns a todos do instituto.\"`
            },
            {
                id: 2,
                photoName: new URL('../assets/images/mariana-minotti.png', import.meta.url),
                name: 'Mariana Minotti',
                companyRole: null,
                course: null,
                review: `Agradeço de coração à toda a equipe do ituring por disponibilizar esse conteúdo de qualidade 
                de forma gratuita. Já havia tentado aprender programação, mas fazer isso sozinha é um caminho um pouco 
                mais tortuoso. Ter voltado a estudar com as atividades propostas e as aulas pelo zoom foi muito 
                importante para eu poder mostrar pra mim mesma o quanto é possível aprender programação, mesmo sem ter 
                uma formação na área.\"`
            },
            {
                id: 3,
                photoName: new URL('../assets/images/luiza-costa.png', import.meta.url),
                name: 'Luiza Costa',
                companyRole: null,
                course: null,
                review: `Esse curso foi uma abertura imensa para perceber que programação era realmente para mim. 
                Passados os 5 dias, meu entusiasmo pela programação aumentou muito, e de fato é essa profissão que 
                quero para minha vida. Obrigada, equipe do ituring, certamente, quando eu estiver ingressada na 
                carreira, lembrarei de que foram vocês que me deram esse empurrão para começar!\"`
            },
            {
                id: 4,
                photoName: new URL('../assets/images/fernanda-fittipaldi.png', import.meta.url),
                name: 'Fernanda Fittipaldi',
                companyRole: null,
                course: null,
                review: `O curso em si está sendo um diferencial na minha carreira. A didática do curso é muito boa, 
                os instrutores sabem facilitar o difícil, o que torna tudo mais agradável, nos gerando a vontade de 
                fazermos o curso completo e a esperança de nos tornarmos futuros programadores, conforme eles nos 
                ensinam que realmente é possível dia a dia.\"`
            }
        ];

        onBeforeMount(() => {
            isMobile.value = general.isMobileResolution;
        });

        const isOpenCourseModules = ref([false, false, false, false]);
        const collapsesModules = [
            { 
                title: 'Dia 1: Primeiros passos e preparando a caixa de ferramentas',
                content: `Entenda como é o mercado de tecnologia e saiba qual é a mentalidade certa para iniciar 
                uma carreira em programação. Acredite na sua capacidade e comece preparando a caixa de ferramentas 
                para sua jornada como pessoa programadora.`,
                details: [],
                hasProject: false
            },
            { 
                title: 'Dia 2 e 3: Aprendendo a programar e adquirindo o hábito com git',
                content: `Domine os fundamentos que existem em todo e qualquer software do planeta! De comandos, 
                variáveis, condições a laços de repetição. Entenda por que devemos escrever código para pessoas e 
                não para o computador. Conheça o GitHub e saiba como usá-lo para potencializar sua carreira em programação.`,
                details: [],
                hasProject: false
            },
            {
                title: 'Dia 4: Conhecendo o mundo da web com HTML + CSS + JavaScript',
                content: `Coloque a mão na massa para resolver problemas que você vai encontrar no mundo real. Entenda 
                o que está por trás da internet e aprenda a construir páginas web com HTML, CSS e JavaScript.`,
                details: [],
                hasProject: false
            },
            {
                title: 'Dia 5: Seus próximos passos como pessoa programadora',
                content: `Finalize sua aplicação web com um deploy na nuvem, confira dicas valiosas e próximos passos 
                para sua carreira de sucesso em desenvolvimento de software. Mostre o seu trabalho com o GitHub e o 
                LinkedIn!`,
                details: [],
                hasProject: false
            }
        ];

        const collapsesFAQ = [
            {
                question: 'Para quem é este curso?',
                answer: `Este curso é para todas as pessoas que têm interesse em aprender programação ou desejam 
                começar uma carreira na área, mas não sabem como dar o primeiro passo. É um curso para começar a 
                entender algumas linguagens de programação, as práticas por trás do desenvolvimento de software e 
                as oportunidades que essa área oferece.`
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

        function GTMViewItem() {

            window.dataLayer.push({ ecommerce: null });

            const item = {
                item_id: 'DEV2901',
                item_name: 'Aprenda a Programar',
                item_brand: 'ituring',
                item_category: 'Developers',
                item_variant: '5 dias',
                index: 1,
                price: 0,
                quantity: 1
            };

            PushDataLayer(item, 'view_item');
        }

        return {
            isOpenCourseModules,
            collapsesModules,
            collapsesFAQ,
            vimeoOptions,
            logoCompanies,
            isMobile,
            launchDate,
            teacherList,
            studentList
        }
    }
}
</script>