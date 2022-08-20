<template>
	<form @submit.prevent="submit">
		<h1 class="h3 mb-3 fw-normal">Please sign up</h1>

		<div class="form-floating">
			<input v-model="data.name" type="text" class="form-control" id="floatingInput" placeholder="Name">
			<label for="floatingInput">Name</label>
		</div>
		<div class="form-floating">
			<input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
			<label for="floatingPassword">Password</label>
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
	</form>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const data = reactive({
	name: '',
	password: ''
})
const submit = async () => {
	const result = await fetch('http://localhost:5050/auth/registration', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: data.name,
			password: data.password
		}),
	}).then((res) => res.json())
	console.log(result);
	await router.push('/login')
}
</script>
<style scoped>
</style>