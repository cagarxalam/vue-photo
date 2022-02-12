<template>
	<Content>
		<template v-slot:content>
			<!-- Portfolio section  -->
			<div class="portfolio-3-section">
				<ul class="portfolio-filter pf-2 controls">
					<li class="control" data-filter="all">All</li>
					<li class="control" data-filter=".nature">Nature</li>
					<li class="control" data-filter=".studio">Studio Photography</li>
					<li class="control" data-filter=".weddings">Weddings</li>
					<li class="control" data-filter=".lifestyle">Lifestyle</li>
					<li class="control" data-filter=".fashion">Fashion</li>
				</ul>
				<div class="portfolio-grid portfolio-gallery nature">
					<div class="grid-sizer"></div>
					<div class="mix grid-item">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/1.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
					<div class="mix grid-item grid-width-1 studio">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/2.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
					<div class="mix grid-item weddings">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/3.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
					<div class="mix grid-item lifestyle">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/4.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
					<div class="mix grid-item fashion">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/5.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
					<div class="mix grid-item grid-width-2 nature">
						<div class="grid-portfolio">
							<img src="img/portfolio-2/6.jpg" alt="">
							<h6>Pink Flamingo</h6>
							<p>2019</p>
						</div>
					</div>
				</div>
				<div class="text-center text-sm-right load-more-warp">
					<button class="site-btn load-more">Load More</button>
				</div>
			</div>
			<!-- Portfolio section end  -->
		</template>
	</Content>
</template>

<script>
	import Content from "@/components/Content.vue"
	import Masonry from "masonry-layout/dist/masonry.pkgd"
	import mixitup from "mixitup"

	jQueryBridget("masonry",Masonry,$)
	export default {
		name: 'Portfolio 2',
		components: {Content},
		mounted() {
			/*---------------
				Masonry
			----------------*/
			var masonryLayout = function () {
				$('.portfolio-grid').masonry({
					itemSelector: '.grid-item',
					columnWidth: '.grid-sizer',
					percentPosition: true
				});
			}

			/*---------------
				Mixitup
			----------------*/
			masonryLayout();
			if($('.portfolio-gallery').length > 0 ) {
				var containerEl = document.querySelector('.portfolio-gallery');
				var mixer = mixitup(containerEl, {
					callbacks: {
						onMixEnd: function() {
							masonryLayout();
						}
					}
				});
			}
		}
	}
</script>

<style></style>