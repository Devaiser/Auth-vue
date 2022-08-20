<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
		<div class="container-fluid">
			<RouterLink to="/" class="navbar-brand" href="#">Home</RouterLink>
			<div>
				<ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
					<li class="nav-item">
						<RouterLink to="/login" class="nav-link active" href="#">Login</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/register" class="nav-link active" href="#">Register</RouterLink>
					</li>
				</ul>
				<ul class="navbar-nav me-auto mb-2 mb-md-0" v-else>
					<li class="nav-item" @click="logout">
						<RouterLink to="/login" class="nav-link active" href="#">Logout</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
import { computed } from 'vue'
import { useLogoutStore } from '@/stores/logout'

const storeLogout = useLogoutStore()

const auth = computed(() => {
	return storeLogout.authenticated
})
const logout = () => {
	localStorage.clear()
	storeLogout.setAuth(false)
}
</script>
<style >
</style>