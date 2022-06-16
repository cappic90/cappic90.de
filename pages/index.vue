<script setup lang="ts">
const links = [
	{ id: 'twitter', href: 'https://twitter.com/cappic90', label: 'Twitter' },
	{ id: 'github', href: 'https://github.com/cappic90', label: 'GitHub' },
	{ id: 'xing', href: 'https://www.xing.com/profile/Malik_Dirim/cv', label: 'Xing' },
]

</script>

<template>
  <NuxtLayout>
	<div class="container mx-auto flex-1">
		<h1 class="mb-4">Cappic90</h1>
		<p class="mb-2">Hey 👋, this is Malik from Germany ✌️. I currently work as a full stack web developer 👨‍💻. Here are some links to find out more about me and get in touch:</p>
		<ul class="mb-2">
			<li v-for="link in links" :key="link.id">
				<a :href="link.href" target="_blank" rel="noopener noreferrer" class="underline">{{ link.label }}</a>
			</li>
		</ul>
		<p class="mb-2">I am looking forward to hearing from you.</p>
	</div>
  </NuxtLayout>
</template>
