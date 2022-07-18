<script setup lang="ts">
import { Link } from '@/components/CLink.vue';

const links: Link[] = [
	{ href: 'https://twitter.com/cappic90', label: 'Twitter' },
	{ href: 'https://github.com/cappic90', label: 'GitHub' },
	{ href: 'https://www.xing.com/profile/Malik_Dirim/cv', label: 'Xing' },
	{ href: 'https:/www.linkedin.com/in/cappic90', label: 'LinkedIn' },
]
</script>

<template>
	<div>
		<p class="mb-2">Hey 👋, this is Malik from Germany ✌️. I currently
			work as a full stack web developer 👨‍💻.<br />
			Here are some links to find out more about me and to get in touch:
		</p>
		<ul class="mb-2">
			<li v-for="link in links" :key="link.href">
				<c-link :value="link" class="underline" />
			</li>
		</ul>
		<p class="mb-2">I am looking forward to hearing from you.</p>
	</div>
</template>
