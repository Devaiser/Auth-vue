<template>
	<div>
		{{ message }}
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useLogoutStore } from '@/stores/logout'

const storeLogout = useLogoutStore()

const message = ref('You are not logged in!')

onMounted(async () => {

	const token = localStorage.getItem("token");
	const result = await fetch('http://localhost:5050/auth/users', {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		// credentials: 'include',
	}).then((res) => res.json())

	console.log(result);

	message.value = result.users ? result.users : result.message
	// if (result.ok) {
	// 	await storeLogout.setAuth(true)
	// } else {
	// 	await storeLogout.setAuth(false)
	// }
})

</script>
<style scoped>
</style>