<template>
	<Content>
		<template v-slot:content>
			<!-- Google Map -->
			<div class="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style="border:0" allowfullscreen></iframe>
			</div>
			<!-- Google Map end -->

			<!-- Contact section  -->
			<section class="contact-section">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="contact-text">
								<h3>Get in touch</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
								<ul>
									<li>Main Str, no 23, NY, <br>New York PK 23589</li>
									<li>+546 990221 123</li>
									<li>contact@industryalinc.com</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-8">
							<form class="contact-form">
								<div class="row">
									<div class="col-lg-6">
										<input type="text" placeholder="Your Name">
									</div>
									<div class="col-lg-6">
										<input type="text" placeholder="Your Email">
									</div>
									<div class="col-lg-4">
									</div>
									<div class="col-lg-12">
										<input type="text" placeholder="Subject">
										<textarea class="text-msg" placeholder="Message"></textarea>
										<button class="site-btn" type="submit">send message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<!-- Contact section end  -->
		</template>
	</Content>
</template>

<script>
	import Content from "@/components/Content.vue"

	export default {
		name: 'Contact',
		components: {Content}
	}
</script>

<style></style>