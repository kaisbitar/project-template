<template>
	<div>
		<list v-for="(item, index) in items" :key="index">
			<div v-if="index !== 'top_level_region'">{{ index }}: {{ item }}</div>
		</list>
	</div>
</template>

<script>
export default {
	name: "appList",

	components: {},
	props: ["items"],

	data: () => ({}),
	methods: {},
	mounted() { },
};
</script>
