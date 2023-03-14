<script setup lang='ts'>
</script>
<template>
	<Suspense>
		<template #default>
			<router-view v-slot="{ Component, route }">
				<transition  mode="out-in">
					<component
						:is="Component"
						:key="route.path"
					/>
				</transition>
			</router-view>
		</template>
		<template #fallback>
			加载中。。。。
		</template>
	</Suspense>
</template>
<style scoped lang='scss'>

</style>