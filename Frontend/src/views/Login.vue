<template>
	<form @submit.prevent="submit">
		<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

		<div class="form-floating">
			<input v-model="data.name" type="text" class="form-control" id="floatingInput" placeholder="Name">
			<label for="floatingInput">Name</label>
		</div>
		<div class="form-floating">
			<input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
			<label for="floatingPassword">Password</label>
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
		<p v-if="isError">Ошибка входа : {{ errorMessage }}</p>
	</form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useLogoutStore } from '@/stores/logout'

const storeLogout = useLogoutStore()
const router = useRouter()
const data = reactive({
	name: '',
	password: ''
})

const isError = ref(false)
const errorMessage = ref('')

const submit = async () => {
	const result = await fetch('http://localhost:5050/auth/login', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		// credentials: 'include',
		body: JSON.stringify({
			username: data.name,
			password: data.password
		}),
	}).then((res) => res.json())
	console.log(result);
	if (result.ok) {
		await storeLogout.setAuth(true)
		localStorage.setItem("token", result.token);
		await router.push('/')
	} else {
		await storeLogout.setAuth(false)
		isError.value = true
		errorMessage.value = result.message
	}
}
</script>