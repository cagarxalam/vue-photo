<template>
	<Content>
		<template v-slot:content>
			<!-- Portfolio section  -->
			<div class="portfolio-2-section">
				<ul class="portfolio-filter pf-2 controls">
					<li class="control" data-filter="all">All</li>
					<li class="control" data-filter=".nature">Nature</li>
					<li class="control" data-filter=".studio">Studio Photography</li>
					<li class="control" data-filter=".weddings">Weddings</li>
					<li class="control" data-filter=".lifestyle">Lifestyle</li>
					<li class="control" data-filter=".fashion">Fashion</li>
				</ul>
				<div class="portfolio-warp">
					<div class="row portfolio-gallery m-0">
						<div class="mix col-lg-4 col-sm-6 p-0 nature">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/1.jpg"></div>
								<h6>Shadow in the water</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 studio">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/2.jpg"></div>
								<h6>Winter in the Mountains</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 weddings">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/3.jpg"></div>
								<h6>Pink Flamingo</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 lifestyle">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/6.jpg"></div>
								<h6>Shadow in the water</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 fashion">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/4.jpg"></div>
								<h6>Winter in the Mountains</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 nature">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/5.jpg"></div>
								<h6>Pink Flamingo</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 studio">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/8.jpg"></div>
								<h6>Shadow in the water</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 weddings">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/10.jpg"></div>
								<h6>Winter in the Mountains</h6>
								<p>2019</p>
							</div>
						</div>
						<div class="mix col-lg-4 col-sm-6 p-0 lifestyle">
							<div class="portfolio-box">
								<div class="portfolio-item set-bg" data-setbg="img/portfolio/13.jpg"></div>
								<h6>Pink Flamingo</h6>
								<p>2019</p>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center">
					<button class="site-btn">Load More</button>
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

	jQueryBridget('masonry',Masonry,$)

	export default {
		name: 'Portfolio 1',
		components: {Content},
		mounted() {
			$('.set-bg').each(function() {
				var bg = $(this).data('setbg');
				$(this).css('background-image', 'url(' + bg + ')');
			});

			var PorfolioItemFix = function () {
				$( ".portfolio-item" ).each(function( index ) {
					var portfolioItem = $(this);
					var PIheight = portfolioItem.width();
					portfolioItem.css('height',PIheight);
				});
			}
			PorfolioItemFix();
			$(window).on('resize',function(){
				PorfolioItemFix();
			});

			var masonryLayout = function () {
				$('.portfolio-grid').masonry({
					itemSelector: '.grid-item',
					columnWidth: '.grid-sizer',
					percentPosition: true
				});
			}

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