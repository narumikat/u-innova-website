/* Description: Custom JS file */

/* Navigation */
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".navbar-nav .nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}


/* Rotating Text - ReplaceMe */
var checkReplace = document.querySelector('.replace-me');
if (checkReplace !== null) {
	var replace = new ReplaceMe(document.querySelector('.replace-me'), {
		animation: 'animated fadeIn',                       // Animation class or classes
		speed: 2000,                                        // Delay between each phrase in miliseconds
		separator: ',',                                     // Phrases separator
		hoverStop: false,                                   // Stop rotator on phrase hover
		clickChange: false,                                 // Change phrase on click
		loopCount: 'infinite',                              // Loop Count - 'infinite' or number
		autoRun: true,                                      // Run rotator automatically
		onInit: false,                                      // Function
		onChange: false,                                    // Function
		onComplete: false                                   // Function
	});
}


/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 575px
		575: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 20
		},

	}
});


/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});


/* Video Modal */
var videoBtn = document.querySelector('.video-btn')
var videoModal = document.getElementById('videoModal')
var video = document.getElementById('video')
var videoSrc

var checkVideoSrc = document.querySelector('.video-btn');
if (checkVideoSrc !== null) {
	videoBtn.addEventListener('click',function(e){
		videoSrc = videoBtn.getAttribute('data-bs-src')
	})
}

var checkVideoModal = document.getElementById('videoModal');
if (checkVideoModal !== null) {
	videoModal.addEventListener('shown.bs.modal',(e)=>{
		video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
	})

	videoModal.addEventListener('hide.bs.modal',(e)=>{
		video.setAttribute('src', videoSrc)
	})
}


/* Filter - Isotope */
const gridCheck = document.querySelector('.grid');

if (gridCheck !== null) {
	// init Isotope
	var iso = new Isotope( '.grid', {
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});

	// bind filter button click
	var filtersElem = document.querySelector('.filters-button-group');
	filtersElem.addEventListener( 'click', function( event ) {
		// only work with buttons
		if ( !matchesSelector( event.target, 'button' ) )  {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		// use matching filter function
		iso.arrange({ filter: filterValue });
	});

	// change is-checked class on buttons
	var buttonGroups = document.querySelectorAll('.button-group');
	for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
		var buttonGroup = buttonGroups[i];
		radioButtonGroup( buttonGroup );
	}

	function radioButtonGroup( buttonGroup ) {
		buttonGroup.addEventListener( 'click', function( event ) {
			// only work with buttons
			if ( !matchesSelector( event.target, 'button' ) )  {
				return;
			}
			buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
			event.target.classList.add('is-checked');
		});
	}
}


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

const languageData = {

  pt: {

    pageTitle1: 'Transformamos ideias em realidade, trazendo criatividade excepcional para impulsionar o seu negócio. Seja único, destaque-se da concorrência e alcance seu público-alvo de forma memorável. Vamos fazer da sua marca uma referência de sucesso.',
    pageTitleButton: 'Saiba mais',
    FormTittle: 'Preencha o formulário e nós entraremos em contato.',
    FormP1: 'Pronto para levar sua empresa para o próximo nível? Basta preencher o formulário abaixo e nossa equipe entrará em contato em breve. Estamos animados para discutir suas necessidades comerciais únicas, desenvolver ideias inovadoras e criar uma estratégia de marketing personalizada que gere resultados.',
    FormTitleP2:'<strong>Soluções Inovadoras: </strong>Temos orgulho de estar na vanguarda da inovação. Quando você entrar em contato conosco, forneceremos ideias novas e criativas para destacar sua marca da concorrência.',
    FormTitleP3:'<strong>Atenção Personalizada: </strong> O seu sucesso é a nossa prioridade. Quando você entrar em contato conosco, daremos a atenção personalizada que você merece.',
    FormTitleP4:'<strong>Colaboração:</strong> acreditamos no poder da colaboração. Ao entrar em contato conosco, você terá a oportunidade de colaborar com nossa equipe dedicada. Valorizamos suas informações e percepções e, juntos, criaremos uma parceria forte para alcançar o sucesso de longo prazo para sua marca.',
    FormName:'Nome',
    FormPhone:'Telefone',
    FormInterested:'Interessado em...',
    PrivacyTerms: 'Eu concordo com a <a href="privacy.html">Política de Privacidade</a> e os <a href="terms.html">Termos & Condições',
    FormInquireButton: 'Enviar',
    SolutionsH1: 'U-Innova Studios: impulsionando o crescimento do seu negócio com soluções de Software, Marketing Digital, Web Design, Design Gráfico e Digital Media.',
    SoftwareSolution: 'Oferecemos uma solução de software personalizada para o gerenciamento eficiente de empreiteiras. Nosso programa avançado simplifica e automatiza processos-chave, desde a busca e seleção de candidatos até o acompanhamento do processo de contratação e o gerenciamento.',
    MarketingSolution: 'Oferecemos uma solução de marketing abrangente para ajudar sua empresa a se destacar no mercado. Nossa solução personalizada combina estratégias criativas, análise de dados e tecnologia para impulsionar sua presença online, aumentar a visibilidade da marca e atrair clientes qualificados.',
    Details1: 'Impulsionando seu sucesso com soluções de Marketing, Design e Software.',
    DetaisP1: 'Aumente sua presença online, conquiste clientes e acelere seus negócios. Inovação e criatividade ao seu alcance com <a href="#your-link">U-Innova Studios',
    Details2: 'Software para gerenciamento de empreiteiras',
    DetaisP2: 'Com recursos robustos de rastreamento de candidatos, gestão de projetos e comunicação integrada, nosso <a target="_blank" href="https://u-innova.herokuapp.com/"><b>software</b></a> permite que as empresas de recrutamento otimizem sua eficiência operacional, melhorem a qualidade do serviço.',
    SolutionsH2: 'U-innova: Software de gerenciamento',
    pHeading1: 'A U-innova studios desenvolveu um software inovador que irá impulsionar o sucesso da sua empresa.',
    pHeading2: 'Com o software da u-innova você terá:',
    faIcon1: 'Gerenciamento de funcionários e candidatos',
    faIcon2: 'Relatórios e perfis detalhados',
    faIcon3: 'Painel de gerenciamento para cada tantousha',
    faIcon4: 'Gerenciamento de vagas e local de trabalho',
    faIcon5: 'Banco de dados',
    faIcon6: 'Fácil visualização de candidatos ativos e/ou inativos',
    faIcon7: 'Controle de cadastros em revisão',
    faIcon8: 'Controle de yuukyu*',
    faIcon8P: '*em desenvolvimento',
    FutureFeaturesTitle: 'RECURSOS FUTUROS',
    FutureFeatures1: 'Controle de yuukyu',
    FutureFeatures2: 'Controle de salário e horas extras',
    PlansTitle: 'Planos',
    PlansSubTitle: 'Pacotes de serviços',
    BasicPlan: 'BASICO',
    BasicPlanTitle: 'Gerenciamento de Redes Sociais e Software',
    BasicPlan1: '• Software para controle de funcionários e cadastros',
    BasicPlan2: '• Gerenciamento de redes sociais',
    BasicPlan3: '• Criação de artes para posts nas redes sociais',
    BasicPlan4: '• Suporte técnico especializado',
    BasicPlan5: '• Análise de dados e relatórios de desempenho',
    InquirePlansButton1: 'Escolher',
    AdvancedPlan: 'AVANÇADO',
    AdvancedPlanTitle: 'Gerenciamento de Redes Sociais, Software, Material Impresso e Artes',
    AdvancedPlan1: '*Tudo que o plano BASIC possui',
    AdvancedPlan2: '• Impulsionamento de publicações nas redes sociais',
    AdvancedPlan3: '• Design de material digital e impresso (ex.: panfletos, cartões de visita, banners)',
    AdvancedPlan4: '• Produção e entrega dos materiais impressos',
    InquirePlansButton2: 'Escolher',
    CompletePlan: 'COMPLETO',
    CompletePlanTitle: 'Solução Personalizada de Marketing Digital e Artes',
    CompletePlan1: '*Tudo que o plano BASIC e ADVANCED possuem',
    CompletePlan2: '• Campanhas de marketing personalizadas',
    CompletePlan3: '• Criação de website / landing page para a marca',
    CompletePlan4: '• Otimização de SEO (Search Engine Optimization)',
    CompletePlan5: '• Análise de dados e monitoramento do desempenho das campanhas',
    InquirePlansButton3: 'Escolher',
    testimonial1: 'O software da U-Innova revolucionou nosso gerenciamento de empreiteiras. Agora podemos facilmente acompanhar e gerenciar nossos funcionários e candidatos em um só lugar, tornando todo o processo mais eficiente.</p><p class="testimonial-author"> Empresa de recrutamento</p>',
    testimonial2: 'O painel de gerenciamento individual para cada tantousha no software da U-Innova é incrível. Agora podemos personalizar e controlar as atividades de cada membro da equipe, garantindo uma distribuição eficiente de tarefas e otimizando nossa produtividade.</p><p class="testimonial-author"> Empresa de recrutamento</p>',
    testimonial3: 'O gerenciamento de vagas e local de trabalho nunca foi tão fácil. Podemos atribuir rapidamente vagas aos candidatos e acompanhar o progresso de cada projeto, mantendo todos informados.</p><p class="testimonial-author"> Gerente de contratação</p>',
    testimonial4: 'O banco de dados integrado no software da U-Innova é um verdadeiro salva-vidas. Agora temos todas as informações dos candidatos e funcionários armazenadas de forma organizada e acessível, agilizando nosso fluxo de trabalho.</p><p class="testimonial-author">Cliente satisfeito</p>',
    testimonial5: 'A fácil visualização de candidatos ativos e/ou inativos é um dos recursos mais úteis do software. Podemos identificar rapidamente os candidatos que estão disponíveis para atribuições futuras, simplificando nosso processo de seleção.</p><p class="testimonial-author">Empreiteira</p>',
    testimonial6: 'O controle de cadastros em revisão no software da U-Innova é uma funcionalidade essencial. Agora podemos revisar, aprovar e atualizar os cadastros dos empreiteiros de forma rápida e eficiente, mantendo nosso banco de dados sempre atualizado.</p><p class="testimonial-author">Gerente de recursos humanos</p>',
    Statistics1: 'Clientes satisfeitos',
    Statistics2: 'Problemas resolvidos',
    Statistics3: 'Reviews positivos',
    Statistics4: 'Casos estudados',
    MissionLP: 'Nossa missão é fornecer soluções de software e marketing digital inovadoras que capacitem nossos clientes a alcançar o sucesso em um mundo digital em constante evolução.',
    AboutUsButton: 'Sobre nós',
    SubscribeAndFollowButton: 'Siga e se Inscreva',
    SubscribeAndFollowText: 'Fique por dentro das novidades da U-Innova Studios! Siga-nos no <a href="#your-link">instagram</a> e curta nossa página no <a href="#your-link">Facebook</a> Junte-se à nossa comunidade digital e faça parte da nossa jornada de inovação e crescimento!',
    SubscribeButton:'Inscreva-se',
    aboutWebsite: 'Sobre o site',
    aboutWebsiteText: 'Bem-vindo ao site da U-Innova Studios! Somos uma empresa apaixonada por inovação, software e marketing digital. Nossa missão é impulsionar o sucesso dos nossos clientes, fornecendo soluções criativas e eficazes. Explore nosso site para descobrir como podemos ajudar a transformar seu negócio no mundo digital!',
    ContactUsFooter: 'Entre em contato',

    english: 'English',
    portuguese: 'Português',
  },

  en: {

    pageTitle1: 'We turn ideas into reality, bringing exceptional creativity to power your business. Be unique, stand out from the competition and reach your target audience in a memorable way. Lets make your brand a successful reference.',
    pageTitleButton: 'Learn More',
    FormTittle: 'Just fill out the form and we\'ll call you',
    FormP1: 'Ready to take your business to the next level? Simply fill out the form below and our team\'ll contact you shortly. We are excited to discuss your unique business needs, develop innovative ideas, and create a customized marketing strategy that drives results.',
    FormTitleP2:'<strong>Innovative solutions: </strong>We pride ourselves on being at the forefront of innovation. When you reach out to us, we\'ll provide you with fresh and creative ideas to make your brand stand out from the competition.',
    FormTitleP3:'<strong>Personalized Attention: </strong> Your success is our priority. When you get in touch with us, we\'ll give you the personalized attention you deserve.',
    FormTitleP4:'<strong>Collaboration:</strong> We believe in the power of collaboration. By reaching out to us, you\'ll have the opportunity to collaborate with our dedicated team. We value your input and insights, and together, we\'ll create a strong partnership to achieve long-term success for your brand.',
    FormName:'Name',
    FormPhone:'Phone',
    FormInterested:'Interested in...',
    PrivacyTerms: 'I agree with the <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms & Conditions',
    FormInquireButton: 'Inquire',
    SolutionsH1: 'U-Innova Studios: Powering Business Growth with Software, Marketing, Web Design, Graphic Design, and Digital Media Solutions.',
    SoftwareSolution: 'We offer customized software solution for efficient management of contractors. Our advanced program simplifies and automates key processes, from candidate search and selection to hiring process tracking and management.',
    MarketingSolution: 'We offer a comprehensive marketing solution to help your business stand out in the marketplace. Our custom solution combines creative strategies, data analytics and technology to boost your online presence, increase brand awareness and attract qualified customers.',
    Details1: 'Driving Your Success with Marketing, Design, and Software Solutions.',
    DetaisP1: 'Increase your online presence, acquire customers and accelerate your business. Discover innovation and creativity at your fingertips with <a href="#your-link">U-Innova Studios',
    Details2: 'Recruitment company management software',
    DetaisP2: 'With robust applicant tracking, project management and integrated communication features, our <a target="_blank" href="https://u-innova.herokuapp.com/"><b>software</b></ a> allows recruitment companies to optimize their operational efficiency, improve service quality.',
    SolutionsH2: 'U-innova Management Software',
    pHeading1: 'U-innova studios has developed innovative software that will drive your company\'s success.',
    pHeading2: 'With the u-innova software you will have:',
    faIcon1: 'Employee and Candidate Management',
    faIcon2: 'Detailed reports and profiles',
    faIcon3: 'Management panel for each tantousha',
    faIcon4: 'Job and workplace management',
    faIcon5: 'Database',
    faIcon6: 'Easy viewing of active and/or inactive candidates',
    faIcon7: 'Control of registrations under review',
    faIcon8: 'Yuukyu control*',
    faIcon8P: '*under development',
    FutureFeaturesTitle: 'FUTURE FEATURES',
    FutureFeatures1: 'Yuukyu control',
    FutureFeatures2: 'Salary and extra hours control',
    PlansTitle: 'Plans',
    PlansSubTitle: 'Service Packages',
    BasicPlan: 'BASIC',
    BasicPlanTitle: 'Social Media and Software Management',
    BasicPlan1: '• Software for employee control and registration forms',
    BasicPlan2: '• Social media management',
    BasicPlan3: '• Design creation for social media posts',
    BasicPlan4: '• Specialized technical support',
    BasicPlan5: '• Data analysis and performance reports',
    InquirePlansButton1: 'Inquire',
    AdvancedPlan: 'ADVANCED',
    AdvancedPlanTitle: 'Management of Social Networks, Software, Printed Material and Graphic Design',
    AdvancedPlan1: '*Everything the BASIC plan has',
    AdvancedPlan2: '• Boosting publications on social networks',
    AdvancedPlan3: '• Design of digital and printed material (eg flyers, business cards, banners)',
    AdvancedPlan4: '• Production and delivery of printed materials',
    InquirePlansButton2: 'Inquire',
    CompletePlan: 'COMPLETE',
    CompletePlanTitle: 'Customized Digital Marketing and Graphic Design Solution',
    CompletePlan1: '*Everything the BASIC and ADVANCED plan has',
    CompletePlan2: '• Customized marketing campaigns',
    CompletePlan3: '• Website / landing page design',
    CompletePlan4: '• SEO optimization (Search Engine Optimization)',
    CompletePlan5: '• Data analysis and campaign performance monitoring',
    InquirePlansButton3: 'Inquire',
    testimonial1: 'U-Innova\'s software has revolutionized our contractor management. Now we can easily track and manage our employees and candidates in one place, making the whole process more efficient.</p><p class="testimonial-author"> Recruitment company</p>',
    testimonial2: 'The individual management panel for each tantousha in the U-Innova software is amazing. Now we can customize and control the activities of each team member, ensuring an efficient distribution of tasks and optimizing our productivity.</p><p class ="testimonial-author">Recruitment company</p>',
    testimonial3: 'Management of jobs and workplace has never been easier. We can quickly assign jobs to candidates and track the progress of each project, keeping everyone in the loop.</p><p class="testimonial-author"> Hiring Manager </p>',
    testimonial4: 'The database integrated into the U-Innova software is a real lifesaver. We now have all candidate and employee information stored in an organized and accessible way, streamlining our workflow.</p><p class= "testimonial-author">Satisfied customer</p>',
    testimonial5: 'Easy viewing of active and/or inactive candidates is one of the most useful features of the software. We can quickly identify candidates who are available for future assignments, streamlining our selection process.</p><p class="testimonial- author">Recruitment company</p>',
    testimonial6: 'The control of records under review in the U-Innova software is an essential feature. Now we can review, approve and update contractors\' records quickly and efficiently, keeping our database always up to date.</p><p class="testimonial-author">Human Resources Manager</p>',
    Statistics1: 'Satisfied Customers',
    Statistics2: 'Solved Problems',
    Statistics3: 'Positive Reviews',
    Statistics4: 'Case Studies',
    MissionLP: 'Our mission is to provide innovative software and digital marketing solutions that empower our customers to succeed in an ever-evolving digital world.',
    AboutUsButton: 'About Us',
    SubscribeAndFollowButton: 'Subscribe and Follow',
    SubscribeAndFollowText: 'Stay on top of news from U-Innova Studios! Follow us on <a href="#your-link">instagram</a> and like us on <a href="#your-link">Facebook</a> Join our digital community and make part of our journey of innovation and growth!',
    SubscribeButton:'Subscribe',
    aboutWebsite: 'About Website',
    aboutWebsiteText: 'Welcome to the U-Innova Studios website! We are a company passionate about innovation, software and digital marketing. Our mission is to drive our clients\' success by providing creative and effective solutions. Explore our site to find out how we can help transform your business in the digital world!',
    ContactUsFooter: 'Contact Us',

    english: 'English',
    portuguese: 'Português',
  }

};

function translatePage(language) {
  const data = languageData[language];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (element) {
        element.innerHTML = data[key];
      }
    }
  }
}

function changeLanguage(lang) {
  translatePage(lang);
}
