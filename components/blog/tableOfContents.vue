<template>
  <nav class="toc">
    <header :class="['flex cursor-pointer flex-row items-center justify-between', isVisible ? 'mb-2' : '']" aria-label="Expand the table of contents." @click="toggleToc">
      <span class="blog-aside-title mb-0">Table of Contents</span>
      <IconsChevronDown :class="['h-6 w-6 transform', isVisible ? '' : 'rotate-180']" width="24" height="24" />
    </header>
    <ul v-if="links" :class="[isVisible ? 'block' : 'hidden']">
      <!-- render each link with depth class -->
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link_${link.depth} mt-2 first:mt-0 md:mt-1`">
        <a :href="`#${link.id}`" class="hover:text-brand_primary hover:underline">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};

import { ref } from "vue";
const isVisible = ref(true);
const toggleToc = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped>
.toc-link_3 {
  @apply pl-4;
}
.toc-link_3::before {
  @apply pr-2;
  content: "-";
}
</style>
