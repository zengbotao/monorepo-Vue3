<script setup lang="ts">
import { defineProps, ref } from "vue";
defineProps<{
	color: "red" | "grey";
	name: String;
	list: Array<any>;
}>();
let text = ref<String>("botao");
let changeText = () => {
	text.value = "gaile";
};
</script>

<template>
	<div :style="{ color: color }" class="gg" @click="changeText">
		{{ color }}{{ name }}{{ list }}{{ text }}
	</div>
</template>

<style lang="sass" scoped>
.gg
  height: 200px
  width: 300px
  border: 1px solid red
</style>
