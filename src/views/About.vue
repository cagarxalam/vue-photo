<template>
	<Content>
		<template v-slot:content>
			<!-- About section  -->
			<section class="about-section">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-6 p-0">
							<div class="about-bg set-bg" data-setbg="img/about.jpg"></div>
						</div>
						<div class="col-lg-6 p-0">
							<div class="about-text">
								<h2>About me. Sam Smith</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ac-cumsan lacus vel facilisis commodo viverra maecenas. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
								<h4>My Clients</h4>
								<p>Company INC, Management INc, Photo album INC, Magnum Express, Fachion Gala, Unnamed, </p>
								<h4>Editorials</h4>
								<p>Vougue, Elle, Company INC, Management INc, Photo album INC, Fashion Week, Fachion Gala, Unnamed, Vanity Fair, Vougue IT</p>
								<a href="#" class="site-btn">contact me</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- About section end  -->
			
			<!-- Skills section  -->
			<div class="skill-section set-bg" data-setbg="img/skills-bg.jpg">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="circle-progress text-white" data-cptitle="Passion" data-cpid="id-1" data-cpvalue="100" data-cpcolor="#ffffff"></div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="circle-progress text-white" data-cptitle="Models" data-cpid="id-2" data-cpvalue="75" data-cpcolor="#ffffff"></div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="circle-progress text-white" data-cptitle="Studio" data-cpid="id-3" data-cpvalue="25" data-cpcolor="#ffffff"></div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="circle-progress text-white" data-cptitle="Nature" data-cpid="id-4" data-cpvalue="50" data-cpcolor="#ffffff"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- Skills section end  -->
			
			<!-- Services section  -->
			<section class="services-section">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/1.png" alt="">
								<h4>Studio Photography</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ul-trices gravida. </p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/2.png" alt="">
								<h4>Wedding Editing</h4>
								<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/3.png" alt="">
								<h4>Photo on tape</h4>
								<p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/4.png" alt="">
								<h4>Modern Editing</h4>
								<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravi-da. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/5.png" alt="">
								<h4>Video Recording</h4>
								<p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="services-item">
								<img src="img/icons/6.png" alt="">
								<h4>Video Editing</h4>
								<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
							</div>
						</div>
					</div>
					<div class="text-center">
						<div class="site-btn">Ask for a Quote</div>
					</div>
				</div>
			</section>
			<!-- Services section end  -->
		</template>
	</Content>
</template>

<script>
	import Content from "@/components/Content.vue"

	import "jquery-circle-progress"

	export default {
		name: 'About',
		components: {Content},
		mounted() {
			$('.set-bg').each(function() {
				var bg = $(this).data('setbg');
				$(this).css('background-image', 'url(' + bg + ')');
			});

			$('.circle-progress').each(function() {
				var cpvalue = $(this).data("cpvalue");
				var cpcolor = $(this).data("cpcolor");
				var cptitle = $(this).data("cptitle");
				var cpid 	= $(this).data("cpid");

				$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

				if (cpvalue < 100) {

					$('.' + cpid).circleProgress({
						value: '0.' + cpvalue,
						size: 190,
						thickness: 3,
						fill: cpcolor,
						emptyFill: "rgba(0, 0, 0, 0)"
					});
				} else {
					$('.' + cpid).circleProgress({
						value: 1,
						size: 190,
						thickness: 3,
						fill: cpcolor,
						emptyFill: "rgba(0, 0, 0, 0)"
					});
				}

			});
		}
	}
</script>

<style></style>