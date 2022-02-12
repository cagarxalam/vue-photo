<template>
	<Content>
		<template v-slot:content>
			<!-- Contact section  -->
			<section class="elements-section">
				<div class="container">
					<!-- element -->
					<div class="element">
						<h3 class="el-title">Buttons</h3>
						<button class="site-btn mr-3 mb-3">send message</button>
						<button class="site-btn sb-line mr-3 mb-3">send message</button>
						<button class="site-btn sb-line sb-light-bg">send message</button>
					</div>
					<!-- element -->
					<div class="element">
						<h3 class="el-title">Accordions & Tabs</h3>
						<div class="row">
							<div class="col-xl-6">
								<!-- Accordions -->
								<div id="accordion" class="accordion-area">
									<div class="panel">
										<div class="panel-header" id="headingOne">
											<button class="panel-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">send Lorem ipsum dolor sit amet, consectetur</button>
										</div>
										<div id="collapse1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
											<div class="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
											</div>
										</div>
									</div>
									<div class="panel">
										<div class="panel-header" id="headingTwo">
											<button class="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Dolor sit amet, consectetur adipiscing elit</button>
										</div>
										<div id="collapse2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
											<div class="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
											</div>
										</div>
									</div>
									<div class="panel">
										<div class="panel-header active" id="headingThree">
											<button class="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">Opsum dolor sit amet, consectetur adipiscing elit</button>
										</div>
										<div id="collapse3" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
											<div class="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="tab-element">
									<ul class="nav nav-tabs" id="myTab" role="tablist">
										<li class="nav-item">
											<a class="nav-link" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false">send Lorem </a>
										</li>
										<li class="nav-item">
											<a class="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Dolor sit amet</a>
										</li>
										<li class="nav-item">
											<a class="nav-link active" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="true">Opsum dolor</a>
										</li>
									</ul>
									<div class="tab-content" id="myTabContent">
										<!-- single tab content -->
										<div class="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
										</div>
										<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
										</div>
										<div class="tab-pane fade show active" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis commodo.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- element -->
					<div class="element">
						<h3 class="el-title">Loaders</h3>
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div class="circle-progress" data-cptitle="Passion" data-cpid="id-1" data-cpvalue="100" data-cpcolor="#304a5f"></div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="circle-progress" data-cptitle="Models" data-cpid="id-2" data-cpvalue="75" data-cpcolor="#304a5f"></div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="circle-progress" data-cptitle="Studio" data-cpid="id-3" data-cpvalue="25" data-cpcolor="#304a5f"></div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="circle-progress" data-cptitle="Nature" data-cpid="id-4" data-cpvalue="50" data-cpcolor="#304a5f"></div>
							</div>
						</div>
					</div>
					<!-- element -->
					<div class="element">
						<h3 class="el-title">Milestones</h3>
						<div class="row">
							<div class="col-lg-3 col-sm-6">
								<div class="milestone">
									<h2>100K</h2>
									<p>IG Followers</p>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="milestone">
									<h2>3678</h2>
									<p>Pictures Taken</p>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="milestone">
									<h2>29</h2>
									<p>Weddings</p>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6">
								<div class="milestone">
									<h2>19k</h2>
									<p>Puppies Photots</p>
								</div>
							</div>
						</div>
					</div>
					<!-- element -->
					<div class="element">
						<h3 class="el-title">Icon Boxes</h3>
						<div class="row">
							<div class="col-lg-4">
								<div class="services-item">
									<img src="img/icons/1.png" alt="">
									<h4>Studio Photography</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid-idunt ut labore et dolore magna aliqua. </p>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="services-item">
									<img src="img/icons/2.png" alt="">
									<h4>Wedding Editing</h4>
									<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="services-item">
									<img src="img/icons/3.png" alt="">
									<h4>Photo on tape</h4>
									<p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Elements section end  -->
		</template>
	</Content>
</template>

<script>
	import Content from "@/components/Content.vue"
	import 'jquery-circle-progress'

	export default {
		name: 'Elements',
		components: {Content},
		mounted() {
			/*------------------
				Accordions
			--------------------*/
			$('.panel-link').on('click', function (e) {
				$('.panel-link').parent('.panel-header').removeClass('active');
				var $this = $(this).parent('.panel-header');
				if (!$this.hasClass('active')) {
					$this.addClass('active');
				}
				e.preventDefault();
			});

			/*------------------
				Circle progress
			--------------------*/
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