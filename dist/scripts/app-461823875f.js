!function(){"use strict";angular.module("desktop",["ngAnimate","ngRoute"])}(),function(){"use strict";angular.module("desktop").component("projectThumb",{templateUrl:"app/components/projectThumb/projectThumb.html",bindings:{project:"="},controllerAs:"vm"})}(),function(){"use strict";function e(e,s){e.isActive=function(e){return s.path()===e?"active":""}}e.$inject=["$scope","$location"],angular.module("desktop").component("navigationMenu",{templateUrl:"app/components/navigation/navigation.html",controller:e})}(),function(){"use strict";function e(){var e=this;e.visible=0}angular.module("desktop").component("imageCarousel",{templateUrl:"app/components/imageCarousel/imageCarousel.html",controller:e,controllerAs:"vm",bindings:{images:"=",source:"="}})}(),function(){"use strict";function e(){}angular.module("desktop").directive("myBanana",{templateUrl:"app/components/banana/banana.html",scope:{src:"=",animationClass:"="},link:e})}(),function(){"use strict";function e(){}angular.module("desktop").component("allProjects",{templateUrl:"app/components/allProjects/allProjects.html",controller:e,controllerAs:"vm",bindings:{projects:"="}})}(),function(){"use strict";function e(e,s,a){var t=this;t.unregisterFn=e.$on("$routeChangeSuccess",function(){a.scroll(0,0)}),t.timer=s(function(){e.mainClass="fade"},1e3),e.$on("$destroy",function(){s.cancel(t.timer),t.unregisterFn()}),t.projects=[{title:"Samsung",subtitle:"In-store customer experience ",img:"assets/projects/samsung/1.png",link:"#/projects/samsung",year:2017,"class":"samsung"},{title:"Trebo",subtitle:"Different way to check the weather ",img:"assets/projects/trebo/1.png",link:"#/projects/trebo",year:2017,"class":"wea"},{title:"Camper",subtitle:"Apps design",img:"assets/projects/camper/1.png",link:"#/projects/camper",year:2018,"class":"camper"},{title:"Vidahora",subtitle:"Branding + web + app",img:"assets/projects/vidahora/1.gif",link:"#/projects/vida-ahora",year:2016,"class":"vab"},{title:"Vigo timetravel",subtitle:"App to visit the past and present",img:"assets/projects/vigo-timetravel/1.png",link:"#/projects/vigo-timetravel",year:2015,"class":"vtt"},{title:"E-aditivos",subtitle:"Interactive list of food aditives",img:"assets/projects/e-aditivos/1.png",link:"#/projects/e-aditivos",year:2015,"class":"adi"},{title:"Editorial design handbook",subtitle:"Beginner's guide to editorial design",img:"assets/projects/manual/1.png",link:"#/projects/manual",year:2014,"class":"man"}]}e.$inject=["$rootScope","$timeout","$window"],angular.module("desktop").controller("ProjectsController",e)}(),function(){"use strict";function e(e,s,a,t,i){function o(t){a.$evalAsync(function(){t.deltaY>0&&(e.removeEventListener("wheel",o),s.path("/projects"))})}function r(e){e.on("click",function(){var s=angular.element(e.parent());s.addClass("animate"),i(function(){s.removeClass("animate")},1e3)})}function n(){var s=angular.element(e.document.querySelector(".b1"));s.on("click",function(){return s.hasClass("animate")?void(s.hasClass("animate")&&(s.addClass("reverse"),i(function(){s.removeClass("animate"),s.removeClass("reverse")},600))):void s.addClass("animate")})}i(function(){t.mainClass="slide-up"},1e3),e.addEventListener("wheel",o),e.addEventListener("touchmove",o);var c=angular.element(e.document.querySelector(".b1 .bot")),l=angular.element(e.document.querySelector(".b2 img")),p=angular.element(e.document.querySelector(".b3 img"));n(),r(l),r(p),i(function(){var e=angular.element(l.parent());e.addClass("animate"),i(function(){e.removeClass("animate")},2e3)},2e3),i(function(){var e=angular.element(p.parent());e.addClass("animate"),i(function(){e.removeClass("animate")},2e3)},6e3),i(function(){var e=angular.element(c.parent());e.addClass("animate")},9e3)}e.$inject=["$window","$location","$scope","$rootScope","$timeout"],angular.module("desktop").controller("MainController",e)}(),function(){"use strict";function e(e,s){s(function(){e.mainClass="fade"},1e3)}e.$inject=["$rootScope","$timeout"],angular.module("desktop").controller("AboutController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("desktop").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/main",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/projects",{templateUrl:"app/projects/projects.html",controller:"ProjectsController",controllerAs:"vm"}).when("/projects/e-aditivos",{templateUrl:"app/projects/e-aditivos.html"}).when("/projects/manual",{templateUrl:"app/projects/manual.html"}).when("/projects/vida-ahora-branding",{templateUrl:"app/projects/vida-ahora-branding.html"}).when("/projects/vigo-timetravel",{templateUrl:"app/projects/vigo-timetravel.html"}).when("/projects/camper",{templateUrl:"app/projects/camper.html"}).when("/projects/samsung",{templateUrl:"app/projects/samsung.html"}).when("/projects/trebo",{templateUrl:"app/projects/trebo.html"}).when("/projects/vida-ahora",{templateUrl:"app/projects/vida-ahora.html"}).when("/about",{templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider"],angular.module("desktop").config(e)}(),function(){"use strict";angular.module("desktop")}(),function(){"use strict";function e(e,s){e.debugEnabled(!1),s.debugInfoEnabled(!1)}e.$inject=["$logProvider","$compileProvider"],angular.module("desktop").config(e)}(),angular.module("desktop").run(["$templateCache",function(e){e.put("app/about/about.html",'<content class=about><navigation-menu></navigation-menu><header><span><strong>"I\'m not superstitious, but I am a little stitious" </strong>- Michael Scott</span></header><section><img src=assets/images/pic.jpg><div class=text><p>I\'m Estefanía Casal, an art director with a few years of experience under my belt. I like to work across different formats and mediums but tend to focus on UX/UI design and illustration. Born and raised in Galicia, Spain, I graduated with a Degree in Advertising and Public Relation from the Uvigo. In addition, I completed a Masters Degree in Art Direction in Advertising.</p><p>My work combines different styles with a strong eye on narrative because story does matter. I love to experiment with new designs and growing personally and professionally with every project. Probably I should mention that I am a big fan of martial arts and sports in general, zombies, videogames, travelling, <em style="text-decoration: line-through">beer</em> food, <a target=_blank href=http://cargocollective.com/FannyPhotoArchive style=font-weight:900>photography</a> and cinema. and cinema. My work combines different styles with a strong eye on narrative because story matters. I love to experiment with new designs and growing personally and professionally with every project. Probably I should mention that I am a big fan of martial arts, zombies, travelling, food</p><p>I had the pleasure to work with great clients. To mention some: Samsung, Camper, Mercedes Benz, Estrella Galicia, Iberia Express, Jac Motors and Mahou.</p><div class=cv><a target=_blank href=https://es.linkedin.com/in/estefaniacasal>view cv</a></div></div><div class=info><a target=_blank href=https://www.behance.net/Fannycasal><img class=social src=assets/images/behance.svg> </a><a target=_blank href=https://dribbble.com/stephcas><img class=social src=assets/images/dribble.svg> </a><a target=_blank href=http://cargocollective.com/FannyPhotoArchive><img class=social src=assets/images/cargo.svg></a><div class=field>Email me at:</div><div>Fannycasal.c@gmail.com</div><div class=field>Call me at:</div><div>664.18.64.68</div></div></section></content>'),e.put("app/main/main.html",'<content class=main><header><i class=i-menu ng-click="displayMenu = true"></i><div class=name>Estefanía Casal</div><nav><a href=#projects>Projects</a> <a href=#about>About</a> <a class=i-email href=mailto:fannycasal.c@gmail.com></a></nav><div class=info><a target=_blank href=https://www.behance.net/Fannycasal><img class=social src=assets/images/behance.svg></a><a target=_blank href=https://dribbble.com/stephcas><img class=social src=assets/images/dribble.svg></a><a target=_blank href=http://cargocollective.com/FannyPhotoArchive><img class=social src=assets/images/cargo.svg></a></div></header><section class=bananas><div class=b1><img class=top src=assets/images/b1t.png> <img class=bot src=assets/images/b1b.png></div><div class=b2><img src=assets/images/b2.png></div><div class=b3><img src=assets/images/b3.png></div></section><aside ng-show=displayMenu class=menu><i class=i-close ng-click="displayMenu = false"></i> <a href=#projects>Projects</a> <a href=#about>About</a> <a href=mailto:fannycasal.c@gmail.com>Send Email</a> <i class=i-view></i> <a target=_blank href=https://dribbble.com/stephcas>Dribbble</a> <a target=_blank href=http://cargocollective.com/FannyPhotoArchive>Cargo</a> <a target=_blank href=https://www.behance.net/Fannycasal>Behance</a></aside><span>PORTFOLIO</span></content>'),e.put("app/projects/camper.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">Camper</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>The shoe’s company Camper was looking several applications to use as selling tools. Three types of applications agreed upon: One for the stores, one to be used by the brand’s commercials and a last one for online shopping directed to customers. The design should follow the creative line already developed by Camper.</p></article><article><div class=tag>The solution</div><p>With black and red as the main colors, we developed a minimalistic aesthetic and a very easy user experience in order to highlight the content of the three apps:Camper Stores: An application for Ipad directed to Camper Stores worldwide. It enables customers to place orders from beginning to end with salesman help. Camper Sales: This app designed for the brand’s commercials allows products, prices, customers and news to be synchronized anytime. Camper App: Camper’s e-commerce application is available on Google Play and App Store.</p></article></section><div class=divider><div class=brand>Camper</div><div class=year>Year: 2017</div><div class=role>Role: Art Direction, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/camper/1.png> <img class=m src=assets/projects/camper/2.gif> <img class=m src=assets/projects/camper/3.gif> <img class=m src=assets/projects/camper/4.png> <img class=m src=assets/projects/camper/5.png> <img class=l src=assets/projects/camper/6.png></content><footer><a href=#/projects/trebo>Previous project</a> <a href=#/projects/vida-ahora>Next project</a></footer></content>'),e.put("app/projects/e-aditivos.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">E-aditivos</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>There are thousands of “unauthorized” food additives. Some of them are used illegally in countries with few UE controls.Additives are one of the most unknown topics in the food industry, therefore consumers are worried about their nutrition sources.</p></article><article><div class=tag>The solution</div><p><a target=_blank href=http://e-aditivos.com/ >E-aditivos</a> is a comprehensive and interactive guide. All additives are classified by their E number. Users can check its source (chemical, vegetable or animal), its level of health risk and the purpose which they were made for. In addition there is a list with vegetarian additives for these consumers in particular. We made an infinite scroll website with representative icons for each type. The site has bold colors and contrast to emphasize the chemical industry and to catch the user’s eye. This is an original idea of Ignacio Lago which was very well welcomed by consumers with positive feedback. You can download the app version now in <a target=_blank href="https://play.google.com/store/apps/details?id=com.talkingcherry.eaditivosapp">Google Play</a> to carry this list with you everywhere.</p></article></section><div class=divider><div class=brand>Brand: E-aditivos</div><div class=year>Year: 2014</div><div class=role>Role: Art Direction, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/e-aditivos/1.png> <img class=m src=assets/projects/e-aditivos/2.png> <img class=m src=assets/projects/e-aditivos/3.png> <img class=m src=assets/projects/e-aditivos/4.gif> <img class=m src=assets/projects/e-aditivos/5.png> <img class=l src=assets/projects/e-aditivos/6.gif></content><footer><a href=#/projects/manual>Previous project</a> <a href=#/projects/iberia>Next project</a></footer></content>'),e.put("app/projects/manual.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">Editorial design handbook</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>In the last year of University I was facing my Degree Final Project. After spending 4 years studying Advertising and Public Relations I was pretty sure about focusing my career in the design area. Back then I was digging into editorial design and falling in love with it. Thus, I chose to learn more about this field beside making something as beautiful as useful. There are thousands of books teaching about specific aspects of editorial design but few talking about its general principles. My decision was to make a handbook so readers can make an editorial design product successfully.</p></article><article><div class=tag>The solution</div><p>This personal project is an exhaustive guide to dig into the editorial design world. It consists of 127 pages with 30 chapters divided in 4 great sections: typography, composition and visual development, types/finishes and printing. The book follows the process of any editorial project: from the choice of layout and typography to getting the product ready for printing. The handbook includes an extensive glossary, graphic elements along with a careful selection of bibliography.</p></article></section><div class=divider><div class=brand>Brand: Editorial Manual Design</div><div class=year>Year: 2015</div><div class=role>Role: Author, Editorial design, contents</div></div></div><content class=media><img class=l src=assets/projects/manual/1.png> <img class=m src=assets/projects/manual/2.png> <img class=m src=assets/projects/manual/3.png> <img class=m src=assets/projects/manual/4.gif> <img class=m src=assets/projects/manual/5.png> <img class=l src=assets/projects/manual/6.png></content><footer><a href=#/projects/huarte>Previous project</a> <a href=#/projects/e-aditivos>Next project</a></footer></content>'),e.put("app/projects/projects.html",'<navigation-menu></navigation-menu><project-thumb project=project ng-repeat="project in vm.projects"></project-thumb><all-projects projects=vm.projects></all-projects>'),e.put("app/projects/samsung.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">SAMSUNG</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>In current times in which advertising goes beyond conventional media, Samsung wanted to show the benefits of its Galaxy mobile devices through an in-store experience. The project consisted in proposing the concept and developing it from scratch. A remote control customer experience was the winner idea. Thus users could know the benefits of each device and accessories related to them.</p></article><article><div class=tag>The solution</div><p>The customer can control the content shown in the store TV through any of the Galaxy mobile devices in display. The app created for mobile shows two very easy menus to interact with and other additional information. The main menu gathers benefits that the user can open to receive detailed information about each of them. The second menu is composed by accessories related to the phone being used by the customer. The creative line is dark, loyal to the minimalistic Samsung aesthetic. Bright blue icons representing all characteristics and great product photographs stand out. Also interaction gestures and subtle animations across the screens play an important role in this project.</p></article></section><div class=divider><div class=brand>Brand: SAMSUNG</div><div class=year>Year: 2017</div><div class=role>Role: Art Direction, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/samsung/1.png> <img class=m src=assets/projects/samsung/2.gif> <img class=m src=assets/projects/samsung/3.gif> <img class=m src=assets/projects/samsung/4.png> <img class=m src=assets/projects/samsung/5.png> <img class=l src=assets/projects/samsung/6.gif> <img class=m src=assets/projects/samsung/7.png> <img class=m src=assets/projects/samsung/8.png> <img class=m src=assets/projects/samsung/9.png> <img class=m src=assets/projects/samsung/10.gif></content><footer><a ng-href=""></a> <a ng-href=#/projects/trebo>Next project</a></footer></content>'),e.put("app/projects/trebo.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">SAMSUNG</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>This weather app was born from the desire of creating a personal project with short dimensions. I wanted to show a brief and direct way to present the basic meteorological data taking care of the visuals. The app limits were bounded to regional level to increase the project personality.</p></article><article><div class=tag>The solution</div><p>Trebo has a casual and close nature. Each meteorological status includes a Galician representative expression. Trebo is based on animated characters with a tender and comical style. The app shows several colors. Matching with texts and gifs. Along with Iago Lastra in the development side, we have tried to design an amusing user experience with swipe to share on social networks or tapping and holding to check the temperature features. Trebo is an entertaining way to see the meteorological predictions and empathize with Galician people in something so representative as their weather and sayings. The first version of the app is ready to download from Google Play!</p></article></section><div class=divider><div class=brand>Brand: TREBO</div><div class=year>Year: 2017</div><div class=role>Role: Art Direction, UX/UI, Co-founder</div></div></div><content class=media><img class=l src=assets/projects/trebo/1.png> <img class=m src=assets/projects/trebo/2.gif> <img class=m src=assets/projects/trebo/3.gif> <img class=m src=assets/projects/trebo/4.png> <img class=m src=assets/projects/trebo/5.png> <img class=l src=assets/projects/trebo/6.png> <img class=m src=assets/projects/trebo/7.png> <img class=m src=assets/projects/trebo/8.gif> <img class=m src=assets/projects/trebo/9.png><video class=m autoplay loop src=assets/projects/trebo/10.mp4></video></content><footer><a ng-href=#/projects/samsung>Previous Project</a> <a ng-href=#/projects/camper>Next project</a></footer></content>'),e.put("app/projects/vida-ahora.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">Wellness Program</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>Vidahora is a wellness program for companies aimed to build healthy habits among their employees. When its business model started being profitable Vidahora needed a new web platform and a mobile app with a personal expression of trust, innovation and harmony. One of the program’s distinguishing features is the gamification. Both the app and web should track the employee’s progress in the most fun way in order to get their fidelity. The users are able to access their personal programs, challenges and new content every week, they can also check statistics about their own progress, enjoy multiplayer tournaments and other special sport events.</p></article><article><div class=tag>The solution</div><p>The UX/UI challenge was huge. Due to the large amount of screens and sections, the wireframing process was the key. One of the final results is <a target=_blank href="https://itunes.apple.com/es/app/vidahora/id903830056?mt=8">the app of Vidahora </a>with an interactive illustrated route where the user can play and scroll. The overall brand\'s aesthetic is mainly based on affable and oneiric illustrations. We wanted web+app to feel refreshing and easy to use when compared to other programs related with wellness. For the logo we chose a character who goes with you along the way. In this case a lovely bird synonym of migration and freedom. This new identity design attracts users from different age ranges.</p></article></section><div class=divider><div class=brand>Brand: Vidahora</div><div class=year>Year: 2016</div><div class=role>Role: Art Direction, UX/UI, Illustration, Motion, Branding</div></div></div><content class=media><img class=l src=assets/projects/vidahora/1.gif> <img class=m src=assets/projects/vidahora/2.png> <img class=m src=assets/projects/vidahora/3.png> <img class=m src=assets/projects/vidahora/4.gif> <img class=m src=assets/projects/vidahora/5.gif> <img class=l src=assets/projects/vidahora/6.png> <img class=m src=assets/projects/vidahora/7.gif> <img class=m src=assets/projects/vidahora/8.png> <img class=m src=assets/projects/vidahora/9.png><video autoplay loop class=m src=assets/projects/vidahora/10.mp4></video><img class=m src=assets/projects/vidahora/11.gif> <img class=m src=assets/projects/vidahora/12.png></content><footer><a href=#/projects/camper>Previous project</a> <a href=#/projects/vigo-timetravel>Next project</a></footer></content>'),e.put("app/projects/vigo-timetravel.html",'<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href="">Vigo timetravel</a> <a ng-click="showinfo = showinfo ? false : true" href=""><strong ng-class="{\'rotated\' : showinfo}">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>For my thesis project I chose to focus in a digital product, an unique and useful app. I was living in Vigo at that time. The city owns a rich photographic file of its interesting past. The idea was to enable the possibility to visualize Vigo’s past and present at the same time. Thus, the app generates a new way to sightseeing as it brings out its architectural history.</p></article><article><div class=tag>The solution</div><p>“Vigo Timetravel” is an app’s concept to see Vigo in past decades. This product can be transferable to other cities if they have enough historical information and photographies. “Vigo Timetravel” works with geolocation and electronic compass of mobile devices. No internet is required. The user can choose a decade between 1910 and 1960 and several markers will show up on the map. The tourist or citizen can see all of the files in their action area, old photos of the area and information.</p></article></section><div class=divider><div class=brand>Brand: Vigo Timetravel</div><div class=year>Year: 2015</div><div class=role>Role: Owner, art direction, graphic design, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/vigo-timetravel/1.png> <img class=m src=assets/projects/vigo-timetravel/2.png> <img class=m src=assets/projects/vigo-timetravel/3.png> <img class=m src=assets/projects/vigo-timetravel/4.png> <img class=m src=assets/projects/vigo-timetravel/5.png> <img class=l src=assets/projects/vigo-timetravel/6.png> <img class=m src=assets/projects/vigo-timetravel/7.png> <img class=m src=assets/projects/vigo-timetravel/8.png></content><footer><a href=#/projects/vigo-timetravel>Previous project</a> <a href=""></a></footer></content>'),e.put("app/components/allProjects/allProjects.html",'<div class=media-wrapper><!-- <img ng-if="vm.project.thumb !== \'assets/projects/vida-ahora-webapp/1.png\'" class="media" ng-src="{{vm.project.img}}"> --><div class=project-info ng-class=vm.project.class><a ng-href={{vm.project.link}}>{{vm.project.title}} <i class=i-view></i></a> <a ng-href={{vm.project.link}}>{{vm.project.subtitle}}</a></div></div><nav ng-init="vm.project = vm.projects[0];"><div ng-class=vm.project.class class=bar></div><div class=content></div><div class=projects-wrapper><div class=projects><div ng-repeat="project in vm.projects"><a ng-mouseover="$parent.vm.project = project" href={{project.link}}><div class=number>0{{$index + 1}}</div><div class=text>{{project.title}}</div></a></div></div></div></nav>'),e.put("app/components/banana/banana.html",""),e.put("app/components/imageCarousel/imageCarousel.html",'<div><div ng-if="vm.visible > 0" ng-click="vm.visible = vm.visible - 1" class=carousel-prev><i class=i-left></i></div><img ng-if="$index === vm.visible" ng-repeat="img in vm.images" ng-src="{{vm.source + img + \'.png\'}}"><div ng-if="vm.visible < vm.images.length -1" ng-click="vm.visible = vm.visible + 1" class=carousel-next><i class=i-right></i></div></div>'),e.put("app/components/navigation/navigation.html","<nav class=navigation><a class=name href=#main>ESTEFANÍA CASAL</a><div class=nav><a ng-class=\"isActive('/projects')\" href=#projects>Projects</a> <a ng-class=\"isActive('/about')\" href=#about>About</a></div><a href=mailto:fannycasal.c@gmail.com><i class=i-email></i></a></nav>"),e.put("app/components/projectThumb/projectThumb.html","<a class=media ng-href={{vm.project.link}}><img ng-src={{vm.project.img}}></a><a class=info ng-href={{vm.project.link}}>{{vm.project.title}}</a>")}]);
//# sourceMappingURL=../maps/scripts/app-461823875f.js.map
