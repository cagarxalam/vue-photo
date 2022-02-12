<template>
	<Content>
		
		<template v-slot:content>
			<!-- Hero section  -->
			<div class="hero-section">
				<div class="hero-slider owl-carousel">
					<div v-for="x in 7" :index="x" class="hero-item portfolio-item set-bg" :data-setbg="`img/portfolio/${x+1}.jpg`">
						<router-link to="/portfolio" class="hero-link">
							<h2>Take a look at my Portfolio</h2>
						</router-link>
					</div>
				</div>
				<div class="hero-slider owl-carousel">
					<div v-for="x in 7" :key="x" class="hero-item portfolio-item set-bg" :data-setbg="`img/portfolio/${x+8}.jpg`">
						<router-link to="/portfolio-1" class="hero-link">
							<h2>Take a look at my Portfolio</h2>
						</router-link>
					</div>
				</div>
				<div class="hero-slider owl-carousel">
					<div v-for="x in 7" :key="x" class="hero-item portfolio-item set-bg" :data-setbg="`img/portfolio/${x+15}.jpg`">
						<router-link to="/portfolio-2" class="hero-link">
							<h2>Take a look at my Portfolio</h2>
						</router-link>
					</div>
				</div>
				<div class="hero-social-links">
					<a href=""><i class="fa fa-pinterest"></i></a>
					<a href=""><i class="fa fa-facebook"></i></a>
					<a href=""><i class="fa fa-twitter"></i></a>
					<a href=""><i class="fa fa-dribbble"></i></a>
					<a href=""><i class="fa fa-behance"></i></a>
				</div>
			</div>
			<!-- Hero section end  -->
			
			<!-- Intro section   -->
			<section class="intro-section">
				<div class="intro-warp">
					<div class="container-fluid">
						<div class="row">
							<div class="col-xl-6 col-lg-7 p-0">
								<div class="intro-text">
									<h2>My name is Sam. I’m a photographer</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo viverra maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
									<a href="#" class="sp-link">Take a look @my portfolio</a>
								</div>
							</div>
							<div class="col-xl-6 col-lg-5 p-0">
								<div class="skill-warp">
									<div class="single-progress-item">
										<div class="progress-bar-style" data-progress="75"></div>
										<p>Nature</p>
									</div>
									<div class="single-progress-item">
										<div class="progress-bar-style" data-progress="100"></div>
										<p>Passion</p>
									</div>
									<div class="single-progress-item">
										<div class="progress-bar-style" data-progress="90"></div>
										<p>Portraits</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Intro section end  -->
		</template>

	</Content>
</template>

<script>
	import Content from "@/components/Content.vue"
	
	//css
	import "owl.carousel/dist/assets/owl.carousel.min.css"
	// import js
	import "owl.carousel"

	export default {
		name: 'Home',
		components: {Content},
		mounted() {

			/*------------------
				Background Set
			--------------------*/
			$('.set-bg').each(function() {
				var bg = $(this).data('setbg');
				$(this).css('background-image', 'url(' + bg + ')');
			});

			/*------------------
				Hero Slider
			--------------------*/
			$('.hero-slider').owlCarousel({
				nav: false,
				dots: false,
				loop: true,
				autoplay: true,
				smartSpeed: 1000,
				responsive : {
					0 : {
						items: 1,
					},
					480 : {
						items: 2,
						
					},
					768 : {
						items: 3,
					},
					991 : {
						items: 4,
					},
					1200 : {
						items: 5,
					},
					1400 : {
						items: 7,
					}
				}
			});

			/*------------------
				Progress Bar
			--------------------*/
			$('.progress-bar-style').each(function() {
				var progress = $(this).data("progress");
				var prog_width = progress + '%';
				if (progress <= 100) {
					$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
				}
				else {
					$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
				}
			});
		}
	}
</script>

<style>
</style>