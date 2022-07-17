<script setup lang="ts">
export interface Link {
	href: string;
	label: string;
};

const props = defineProps<{
	value: Link
}>()

</script>

<template>
	<a :href="value.href" target="_blank" rel="noopener noreferrer">{{
			value.label
	}}</a>
</template>