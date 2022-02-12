<template>
	<!-- Header section  -->
	<header class="header-section">
		<router-link to="/" class="site-logo"><img src="img/logo.png" alt="logo"></router-link>
		<div class="header-controls">
			<button class="nav-switch-btn"><i class="fa fa-bars"></i></button>
			<button class="search-btn"><i class="fa fa-search"></i></button>
		</div>
		<ul class="main-menu">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about">About the Artist </router-link></li>
			<li>
				<a href="#">Portfolio</a>
				<ul class="sub-menu">
					<li><router-link to="/portfolio">Portfolio 1</router-link></li>
					<li><router-link to="/portfolio-1">Portfolio 2</router-link></li>
					<li><router-link to="/portfolio-2">Portfolio 3</router-link></li>
				</ul>
			</li>
			<li><router-link to="/blog">Blog</router-link></li>
			<li><router-link to="/elements">Elements</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
			<li class="search-mobile">
				<button class="search-btn"><i class="fa fa-search"></i></button>
			</li>
		</ul>
	</header>
	<div class="clearfix"></div>
	<!-- Header section end  -->
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style></style>