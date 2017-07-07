angular.module("desktop").run(["$templateCache", function($templateCache) {$templateCache.put("app/about/about.html","<content class=about><navigation-menu></navigation-menu><header><span>Multitask adds value</span></header><section><img src=assets/images/pic.gif><div class=text><p>I\'m Estefanía Casal, an art director with a few years of experience under my belt. I like to work across different formats and mediums but tend to focus on UX/UI design and illustration. Born and raised in Galicia, Spain, I graduated with a Degree in Advertising and Public Relation from the Uvigo. In addition, I completed a Masters Degree in Art Direction in Advertising.</p><p>My work combines different styles with a strong eye on narrative because story matters. I love to experiment with new designs and growing personally and professionally with every project. Probably I should mention that I am a big fan of martial arts, zombies, travelling, <em style=\"text-decoration: line-through\">beer</em> food <a target=_blank href=http://fannycasal.tumblr.com style=font-weight:900>photography</a> and cinema.</p><p>I had the pleasure to work with great clients. To mention some: Estrella Galicia, Iberia Express, REUS, Mahou, Frinsa, GSK.</p><div class=cv><a target=_blank href=https://es.linkedin.com/in/estefaniacasal>view cv</a></div></div><div class=info><a href=https://fannycasal.tumblr.com target=_blank><img class=social src=assets/images/t.svg></a><a href=https://dribbble.com/stephcas target=_blank><img class=social src=assets/images/d.svg></a><div class=field>Email me at:</div><div>Fannycasal.c@gmail.com</div><div class=field>Call me at:</div><div>664.18.64.68</div></div></section></content>");
$templateCache.put("app/main/main.html","<content class=main><header><i class=i-menu ng-click=\"displayMenu = true\"></i><div class=name>ESTEFANIA CASAL</div><nav><a href=#projects>Projects</a> <a href=#about>About</a> <a class=i-email href=mailto:fannycasal.c@gmail.com></a></nav><div class=info><div>Portfolio</div><a target=_blank href=https://dribbble.com/stephcas><img class=social src=assets/images/d.svg></a><a target=_blank href=https://fannycasal.tumblr.com><img class=social src=assets/images/t.svg></a></div></header><section class=bananas><div class=b1><img class=top src=assets/images/b1t.png> <img class=bot src=assets/images/b1b.png></div><div class=b2><img src=assets/images/b2.png></div><div class=b3><img src=assets/images/b3.png></div></section><aside ng-show=displayMenu class=menu><i class=i-close ng-click=\"displayMenu = false\"></i> <a href=#projects>Projects</a> <a href=#about>About</a> <a href=mailto:fannycasal.c@gmail.com>Send Email</a> <i class=i-view></i> <a target=_blank href=https://dribbble.com/stephcas>Dribble</a> <a target=_blank href=https://fannycasal.tumblr.com>Tumblr</a></aside></content>");
$templateCache.put("app/projects/e-aditivos.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">E-aditivos</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>There are thousands of “unauthorized” food additives. Some of them are used illegally in countries with few UE controls.Additives are one of the most unknown topics in the food industry, therefore consumers are worried about their nutrition sources.</p></article><article><div class=tag>The solution</div><p><a target=_blank href=http://e-aditivos.com/ >E-aditivos</a> is a comprehensive and interactive guide. All additives are classified by their E number. Users can check its source (chemical, vegetable or animal), its level of health risk and the purpose which they were made for. In addition there is a list with vegetarian additives for these consumers in particular. We made an infinite scroll website with representative icons for each type. The site has bold colors and contrast to emphasize the chemical industry and to catch the user’s eye. This is a personal project which was very well welcomed by consumers with positive emails.</p></article></section><div class=divider><div class=brand>Brand: E-aditivos</div><div class=year>Year: 2014</div><div class=role>Role: Art Direction, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/e-aditivos/1.png> <img class=m src=assets/projects/e-aditivos/2.png> <img class=m src=assets/projects/e-aditivos/3.png> <img class=m src=assets/projects/e-aditivos/4.png> <img class=m src=assets/projects/e-aditivos/5.png> <img class=l src=assets/projects/e-aditivos/6.gif></content><footer><a href=#/projects/manual>Previous project</a> <a href=#/projects/iberia>Next project</a></footer></content>");
$templateCache.put("app/projects/hearty.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Hearthy</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>Applying new technologies like mobile devices in the healthcare industry can improve productivity and increase information access and communication. Patients can handle their medication easily, specially the ones with chronic conditions. It’s also a great way to generate population health data. A mobile health system helps developing countries by providing affordable healthcare.</p></article><article><div class=tag>The solution</div><p>“Hearthy” is a mobile health system aimed to give reliable and universal healthcare. It is composed by an extensive app and medical webapp. There are four areas available: consultations, clinical history, balance and treatments. “Hearthy” provides means for physicians to physically examine a patient remotely via teleconference or chat. The app sends messages with instructions and reminders about the medication orders. “Hearthy” is designed with bright colors and an easy interaction to allow everybody to use this service.</p></article></section><div class=divider><div class=brand>Brand: Hearhty m-health</div><div class=year>Year: 2014</div><div class=role>Role: Graphic design, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/hearty/1.png> <img class=m src=assets/projects/hearty/2.png> <img class=m src=assets/projects/hearty/3.png> <img class=l src=assets/projects/hearty/4.png> <img class=m src=assets/projects/hearty/5.png> <img class=m src=assets/projects/hearty/6.png></content><footer><a href=#/projects/vigo-timetravel>Previous project</a> <a href=#/projects/huarte>Next project</a></footer></content>");
$templateCache.put("app/projects/huarte.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Huarte International</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p><a target=_blank href=http://huarte.eu/en/ >Huarte International </a>is a law firm based in Vigo, Spain. It was founded with the aim of becoming a leading law firm of reference within the areas of Spanish, European and International Law. The project was to create the identity + branding + web design to show its qualities and services.</p></article><article><div class=tag>The solution</div><p>Driven by concepts of simplicity and elegance, we developed a classic, yet modern identity that would accurately show the purpose of the brand. The symbol itself is a geometric “H” shaped as a column which represents soundness and justice. A combination of raw blue and white highlights the specialization in maritime, fisheries and transportation law along other working areas. The web design mix super clean shapes with professional photographies along easy reading texts.</p></article></section><div class=divider><div class=brand>Brand: Huarte International</div><div class=year>Year: 2015</div><div class=role>Role: Identity, branding, art direction</div></div></div><content class=media><img class=l src=assets/projects/huarte/1.png> <img class=m src=assets/projects/huarte/2.png> <img class=m src=assets/projects/huarte/3.png> <img class=m src=assets/projects/huarte/4.png> <img class=m src=assets/projects/huarte/5.png> <img class=l src=assets/projects/huarte/6.png> <img class=m src=assets/projects/huarte/7.png> <img class=m src=assets/projects/huarte/8.png></content><footer><a href=#/projects/hearty>Previous project</a> <a href=#/projects/manual>Next project</a></footer></content>");
$templateCache.put("app/projects/iberia.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Iberia Express</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>Immfly working along with Iberia Express contacted me with a beautiful project: an illustration that represented the city of Vigo for the inflight magazine of the airline.</p></article><article><div class=tag>The solution</div><p>Vigo has grown gradually from a small fishing village to the most populated city in Galicia. Nowadays the town preserves part of the old architecture with small facades next to the galician estuary. Vigo is also called “Olive city” due to its history related with this tree. The illustration combines traditional and modern buildings all together which is distinctive of the city.</p></article></section><div class=divider><div class=brand>Brand: Iberia Express</div><div class=year>Year: 2015</div><div class=role>Role: Illustration</div></div></div><content class=media><img class=l src=assets/projects/iberia/1.png> <img class=m src=assets/projects/iberia/2.png> <img class=m src=assets/projects/iberia/3.png> <img class=l src=assets/projects/iberia/4.png></content><footer><a href=#/projects/e-aditivos>Previous project</a></footer></content>");
$templateCache.put("app/projects/manual.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Editorial design handbook</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>In the last year of University I was facing my Degree Final Project. After spending 4 years studying Advertising and Public Relations I was pretty sure about focusing my career in the design area. Back then I was digging into editorial design and falling in love with it. Thus, I chose to learn more about this field beside making something as beautiful as useful. There are thousands of books teaching about specific aspects of editorial design but few talking about its general principles. My decision was to make a handbook so readers can make an editorial design product successfully.</p></article><article><div class=tag>The solution</div><p>This personal project is an exhaustive guide to dig into the editorial design world. It consists of 127 pages with 30 chapters divided in 4 great sections: typography, composition and visual development, types/finishes and printing. The book follows the process of any editorial project: from the choice of layout and typography to getting the product ready for printing. The handbook includes an extensive glossary, graphic elements along with a careful selection of bibliography.</p></article></section><div class=divider><div class=brand>Brand: Editorial Manual Design</div><div class=year>Year: 2015</div><div class=role>Role: Author, Editorial design, contents</div></div></div><content class=media><img class=l src=assets/projects/manual/1.png> <img class=m src=assets/projects/manual/2.png> <img class=m src=assets/projects/manual/3.png> <img class=m src=assets/projects/manual/4.gif> <img class=m src=assets/projects/manual/5.png> <img class=l src=assets/projects/manual/6.png></content><footer><a href=#/projects/huarte>Previous project</a> <a href=#/projects/e-aditivos>Next project</a></footer></content>");
$templateCache.put("app/projects/projects.html","<navigation-menu></navigation-menu><project-thumb project=project ng-repeat=\"project in vm.projects\"></project-thumb><all-projects projects=vm.projects></all-projects>");
$templateCache.put("app/projects/vida-ahora-branding.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Vidahora Branding</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>With the service´s evolution it was the perfect time to create a more personal expression of Vidahora — a complete wellness program for employees. The goal was to increase user perception of trust, innovation and harmony. An entire new look made up of logo, offline/online communication and corporate web.</p></article><article><div class=tag>The solution</div><p>We wanted to motivate the audience so I created friendly interfaces with amusing illustrations and animations. I made several digital assets that are easily malleable in order for each communication type to have the same cheerful design. For the logo we chose a character who goes with you along the way. In this case a lovely bird synonym of migration and freedom. The new identity design attracts users from different age ranges.</p></article></section><div class=divider><div class=brand>Brand: Vidahora</div><div class=year>Year: 2016</div><div class=role>Role: Art Direction, UX/UI, Illustration, Motion, Branding</div></div></div><content class=media><img class=l src=assets/projects/vida-ahora-branding/6.gif> <img class=m src=assets/projects/vida-ahora-branding/2.png> <img class=m src=assets/projects/vida-ahora-branding/3.png> <img class=m src=assets/projects/vida-ahora-branding/4.png> <img class=m src=assets/projects/vida-ahora-branding/5.png> <img class=l src=assets/projects/vida-ahora-branding/1.png> <img class=m src=assets/projects/vida-ahora-branding/8.gif> <img class=m src=assets/projects/vida-ahora-branding/9.png> <img class=m src=assets/projects/vida-ahora-branding/10.png> <img class=m src=assets/projects/vida-ahora-branding/11.png></content><footer><a ng-href=#/projects/weather-app>Previous Project</a> <a ng-href=#/projects/vida-ahora-webapp>Next project</a></footer></content>");
$templateCache.put("app/projects/vida-ahora-webapp.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Wellness Program</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>“Vidahora” is a wellness program aimed to build healthy habits among employees. When its business model started to generate profits, “Vidahora” needed a new web platform and mobile app working properly. One of the program’s distinguishing features is the gamification. Both the app and web should track the employee’s progress in the most fun way to get loyalty by themselves. The user is able to access his personal program, challenges and new content every week, also they can check statistics about their own progress as enjoying multiplayer tournaments and special sport events.</p></article><article><div class=tag>The solution</div><p>The UX/UI challenge was huge. Due to the large amount of screens and sections, the wireframing process was the key. One of the final results is <a target=_blank href=\"https://itunes.apple.com/es/app/vidahora/id903830056?mt=8\">the app of Vidahora </a>with an interactive illustrated route where the user can play and scroll. The overall aesthetic is mainly based on affable and oneiric illustrations. The web platform is also colorful and clean. We want web+app to feel refreshing and easy to use when compared to other programs related with wellness. User can find in “Vidahora”: tests, beautiful calendars, recipes, videos, routes for running and biking along many other features.</p></article></section><div class=divider><div class=brand>Brand: Vidahora</div><div class=year>Year: 2016</div><div class=role>Role: Art Direction, UX/UI, Illustration, Motion, Branding</div></div></div><content class=media><img class=l src=assets/projects/vida-ahora-webapp/1.png> <img class=m src=assets/projects/vida-ahora-webapp/2.gif> <img class=m src=assets/projects/vida-ahora-webapp/3.gif><video autoplay loop class=m src=assets/projects/vida-ahora-webapp/video.f4v></video><img class=m src=assets/projects/vida-ahora-webapp/5.png><image-carousel source=\"\'assets/projects/vida-ahora-webapp/\'\" images=\"[\'c1\',\'c2\',\'c3\',\'c4\']\"></image-carousel><img class=m src=assets/projects/vida-ahora-webapp/6.gif> <img class=m src=assets/projects/vida-ahora-webapp/7.png></content><footer><a href=#/projects/vida-ahora-branding>Previous project</a> <a href=#/projects/vigo-timetravel>Next project</a></footer></content>");
$templateCache.put("app/projects/vigo-timetravel.html","<content class=project><nav class=project-nav><a href=#/projects>Close</a> <a class=name href=\"\">Vigo timetravel</a> <a ng-click=\"showinfo = showinfo ? false : true\" href=\"\"><strong ng-class=\"{\'rotated\' : showinfo}\">+</strong>Project info</a></nav><div ng-if=showinfo class=info-wrapper><section class=info><article><div class=tag>The idea</div><p>For my thesis project I chose to focus in a digital product, an unique and useful app. I was living in Vigo at that time. The city owns a rich photographic file of its interesting past. The idea was to enable the possibility to visualize Vigo’s past and present at the same time. Thus, the app generates a new way to sightseeing as it brings out its architectural history.</p></article><article><div class=tag>The solution</div><p>“Vigo Timetravel” is an app’s concept to see Vigo in past decades. This product can be transferable to other cities if they have enough historical information and photographies. “Vigo Timetravel” works with geolocation and electronic compass of mobile devices. No internet is required. The user can choose a decade between 1910 and 1960 and several markers will show up on the map. The tourist or citizen can see all of the files in their action area, old photos of the area and information.</p></article></section><div class=divider><div class=brand>Brand: Vigo Timetravel</div><div class=year>Year: 2015</div><div class=role>Role: Owner, art direction, graphic design, UX/UI</div></div></div><content class=media><img class=l src=assets/projects/vigo-timetravel/1.png> <img class=m src=assets/projects/vigo-timetravel/2.png> <img class=m src=assets/projects/vigo-timetravel/3.png> <img class=m src=assets/projects/vigo-timetravel/4.png> <img class=m src=assets/projects/vigo-timetravel/5.png> <img class=l src=assets/projects/vigo-timetravel/6.png> <img class=m src=assets/projects/vigo-timetravel/7.png> <img class=m src=assets/projects/vigo-timetravel/8.png></content><footer><a href=\"\"></a> <a href=#/projects/hearty>Next project</a></footer></content>");
$templateCache.put("app/components/allProjects/allProjects.html","<div class=media-wrapper><img ng-if=\"vm.project.thumb !== \'assets/projects/vida-ahora-webapp/1.png\'\" class=media ng-src={{vm.project.img}}><video ng-if=\"vm.project.thumb === \'assets/projects/vida-ahora-webapp/1.png\'\" class=media autoplay src=assets/projects/vida-ahora-webapp/video.f4v></video><div class=project-info><a ng-href={{vm.project.link}}>{{vm.project.title}} <i class=i-view></i></a> <a ng-href={{vm.project.link}}>{{vm.project.subtitle}}</a></div></div><nav ng-init=\"vm.project = vm.projects[0];\"><div ng-class=vm.project.class class=bar></div><div class=content></div><div class=projects-wrapper><div class=projects><div ng-repeat=\"project in vm.projects\"><a class=year ng-if=\"project.year !== vm.projects[$index-1].year\"><div class=number>{{project.year}}</div><div class=text></div></a><a ng-mouseover=\"$parent.vm.project = project\" href={{project.link}}><div class=number>0{{$index + 1}}</div><div class=text>{{project.title}}</div></a></div></div></div></nav>");
$templateCache.put("app/components/banana/banana.html","");
$templateCache.put("app/components/imageCarousel/imageCarousel.html","<div><div ng-if=\"vm.visible > 0\" ng-click=\"vm.visible = vm.visible - 1\" class=carousel-prev><i class=i-left></i></div><img ng-if=\"$index === vm.visible\" ng-repeat=\"img in vm.images\" ng-src=\"{{vm.source + img + \'.png\'}}\"><div ng-if=\"vm.visible < vm.images.length -1\" ng-click=\"vm.visible = vm.visible + 1\" class=carousel-next><i class=i-right></i></div></div>");
$templateCache.put("app/components/navigation/navigation.html","<nav class=navigation><a class=name href=#main>ESTEFANÍA CASAL</a><div class=nav><a ng-class=\"isActive(\'/projects\')\" href=#projects>Projects</a> <a ng-class=\"isActive(\'/about\')\" href=#about>About</a></div><a href=mailto:fannycasal.c@gmail.com><i class=i-email></i></a></nav>");
$templateCache.put("app/components/projectThumb/projectThumb.html","<a class=media ng-href={{vm.project.link}}><img ng-src={{vm.project.img}}></a><a class=info ng-href={{vm.project.link}}>{{vm.project.title}}</a>");}]);