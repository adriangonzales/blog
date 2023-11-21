<template>
  <div class="flex flex-col items-center justify-between sm:flex-row">
    <NuxtLink to="/">
      <LogoFull class="w-64" />
    </NuxtLink>

    <nav class="flex items-center gap-6">
      <ButtonPrimary :to="'/blog/'">Blog</ButtonPrimary>
    </nav>
  </div>
</template>
