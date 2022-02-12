<template>
	<Navbar/>

	<slot name="content"></slot>

	<Footer/>
</template>

<script>
	import Navbar from "./Navbar.vue"
	import Footer from "./Footer.vue"

	// import global css
	import "font-awesome/css/font-awesome.min.css"
	import "bootstrap/dist/css/bootstrap.min.css"
	import "slicknav/dist/slicknav.min.css"
	import "@/assets/style.css"

	// import global js
	import "slicknav/dist/jquery.slicknav"
	window.bootstrap = bootstrap
	export default {
		name: 'Content',
		components: {Navbar,Footer},
		mounted() {
			// Navbar
			$('.main-menu').slicknav({
				appendTo:'.header-section',
				closedSymbol: '<i class="fa fa-angle-down"></i>',
				openedSymbol: '<i class="fa fa-angle-up"></i>'
			});

			$('.nav-switch-btn').on('click', function() {
				if(localStorage.getItem("navMenu") == null) {
					localStorage.setItem("navMenu", "show");
					$('.main-menu').slideDown(400);
				} else if(localStorage.getItem("navMenu") == "show") {
					localStorage.removeItem("navMenu");
					$('.main-menu').slideUp(400);
				}
			});

			if(localStorage.getItem("navMenu") == "show") {
				$('.main-menu').slideDown(400);
			}

			// End Navbar

			// Search Modal
			$('.search-btn').on('click', function() {
				$('.search-model').fadeIn(400);
			});

			$('.search-close-switch').on('click', function() {
				$('.search-model').fadeOut(400,function(){
					$('#search-input').val('');
				});
			});
			// End Search Modal
		}
	}
</script>

<style>
	@import url("https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap")
</style>