<template>
	<div class="bg-gray-50">
		<div class="min-h-screen flex flex-col">
			<c-header />
			<main class="container flex flex-1 py-8">
				<slot />
			</main>
			<c-footer />
		</div>
	</div>
</template>
