<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="to" class="bg-chelsea-cucumber-500 hover:bg-chelsea-cucumber-400 text-chelsea-cucumber-950 transition-color rounded px-5 py-2.5 duration-300 ease-out">
    <slot />
  </NuxtLink>
</template>
