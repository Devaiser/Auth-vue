import { defineStore } from 'pinia';

export const useLogoutStore = defineStore({
	id: 'logout',
	state: () => ({
		authenticated: false,
	}),
	actions: {
		setAuth(auth) {
			this.authenticated = auth;
		},
	},
});
