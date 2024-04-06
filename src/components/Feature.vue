<template>
	<div v-editable="blok" class="py-2">
		<h1 class="text-lg">{{ blok.name }}</h1>
	</div>
</template>

<script>
import { onMounted } from 'vue'

export default {
	props: {
		blok: {
			type: Object
		}
	},
	setup(props) {

		onMounted(() => {
			console.log('feature loaded!');
		})

	}
}
</script>