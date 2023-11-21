<template>
  <main class="blog-post-text">
    <HeaderPrimary />
    <ContentDoc>
      <template v-slot="{ doc }">
        <Section id="blog-title" type="header" class="bg-chelsea-cucumber-50 mb-12 text-typography_primary">
          <div class="mb-12 flex flex-col items-center md:mb-8 md:flex-row md:justify-between md:text-right">
            <!-- Breadcrumbs -->
            <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="blog-breadcrumb">
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <NuxtLink itemprop="item" to="/"> <span itemprop="name">Home</span></NuxtLink>
                <meta itemprop="position" content="1" />
              </li>
              <li class="separator">/</li>
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <NuxtLink itemscope itemtype="https://schema.org/WebPage" itemprop="item" itemid="/blog/" to="/blog/"> <span itemprop="name">Blog</span></NuxtLink>
                <meta itemprop="position" content="2" />
              </li>
              <li class="separator">/</li>
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">{{ doc.headline }}</span>
                <meta itemprop="position" content="3" />
              </li>
            </ol>
            <!-- Publish date -->
            <span class="dark:text-typography_primary_dark/75 mt-2 font-light text-typography_primary/75 md:mt-0">{{ $formatDate(doc.date) }}</span>
          </div>
          <!-- Headline -->
          <h1 class="blog-post-text mb-4 text-center text-h3 font-bold leading-h3 md:mb-6 md:text-left md:text-h1 md:leading-h1">
            {{ doc.headline }}
          </h1>
          <p class="blog-post-text mb-8 text-center md:w-8/12 md:text-left md:text-lg md:leading-lg">{{ doc.excerpt }}</p>
        </Section>
        <!-- Content -->
        <Section id="main" class="relative grid grid-cols-10 gap-8 !pt-0 lg:gap-12">
          <!-- Table of Contents -->
          <aside class="col-span-full md:col-span-3 md:hidden">
            <div class="blog-post-text blog-aside-wrapper mb-2">
              <BlogTableOfContents :links="doc.body?.toc?.links" />
            </div>
          </aside>
          <article class="prose relative col-span-full md:col-span-7">
            <!-- Update date -->
            <span v-show="doc.dateUpdated" class="dark:text-typography_primary_dark/75 absolute -top-8 text-sm font-light italic leading-sm text-typography_primary/75">(Updated: {{ $formatDate(doc.dateUpdated) }})</span>
            <!-- Blog content -->
            <ContentRenderer :value="doc" class="blog-content blog-post-text" />
          </article>
          <aside class="blog-aside col-span-full h-fit md:col-span-3">
            <!-- Mobile Table of Content -->
            <div class="blog-aside-wrapper mb-4 !hidden md:!flex">
              <BlogTableOfContents :links="doc.body?.toc?.links" class="blog-post-text" />
            </div>
            <!-- Related articles -->
            <div v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0" class="blog-aside-wrapper">
              <BlogRelatedArticles :surround="data?.surround" class="blog-post-text" />
            </div>
          </aside>
        </Section>
        <!-- Scroll to top -->
        <NavScrollTopIcon />
      </template>
      <!-- Error in case not found -->
      <template #not-found>
        <SectionsError />
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
const { $formatDate } = useNuxtApp();
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, "");
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  // Remove a trailing slash in case the browser adds it, it might break the routing
  // fetch document where the document path matches with the cuurent route
  let article = queryContent("/blog").where({ _path: cleanPath }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent("/blog").sort({ date: -1 }).only(["_path", "headline", "excerpt"]).findSurround(cleanPath, { before: 1, after: 1 });
  return {
    article: await article,
    surround: await surround,
  };
});

// Get the authors
const { data: authorData } = await useAsyncData("home", () => queryContent("/authors").findOne());

// Set the meta
const baseUrl = "https://virexmachina.com";
const canonicalPath = baseUrl + (path + "/").replace(/\/+$/, "/");
const imageTwitter = baseUrl + (data.value?.article?.socialImage?.src || "/card-twitter.png");
const imageOg = baseUrl + (data.value?.article?.socialImage?.src || "/card-og.png");

// JSON+LD
const jsonScripts = [
  {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://virexmachina.com/",
      },
      url: canonicalPath,
      image: imageOg,
      headline: data.value?.article?.headline,
      abstract: data.value?.article?.excerpt,
      datePublished: data.value?.article?.date,
      dateModified: data.value?.article?.dateUpdated || data.value?.article?.date,
      author: authorData.value[data.value?.article?.author],
      publisher: authorData.value["Adrian Gonzales"],
    }),
  },
];
useHead({
  title: data.value?.article?.title,
  meta: [
    { name: "author", content: data.value?.article?.author },
    { name: "description", content: data.value?.article?.description },
    { property: "article:published_time", content: data.value?.article?.date.split("T")[0] },
    // OG
    { hid: "og:title", property: "og:title", content: data.value?.article?.headline },
    { hid: "og:url", property: "og:url", content: canonicalPath },
    { hid: "og:description", property: "og:description", content: data.value?.article?.description },
    { hid: "og:image", name: "image", property: "og:image", content: imageOg },
    { hid: "og:type", property: "og:type", content: "Article" },
    { hid: "og:image:type", property: "og:image:type", content: `image/${data.value?.article?.socialImage?.mime}` || "png" },
    { hid: "og:image:width", property: "og:image:width", content: data.value?.article?.socialImage?.width || 1200 },
    { hid: "og:image:height", property: "og:image:height", content: data.value?.article?.socialImage?.height || 630 },
    { hid: "og:image:alt", property: "og:image:alt", content: data.value?.article?.socialImage?.alt },

    { hid: "twitter:card", name: "twitter:card", content: "Summary" },
    { hid: "twitter:title", name: "twitter:title", content: data.value?.article?.headline },
    { hid: "twitter:url", name: "twitter:url", content: canonicalPath },
    { hid: "twitter:description", name: "twitter:description", content: data.value?.article?.description },
    { hid: "twitter:image", name: "twitter:image", content: imageTwitter },
    { hid: "twitter:image:alt", name: "twitter:image:alt", content: data.value?.article?.socialImage?.alt },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: canonicalPath,
    },
  ],
  script: jsonScripts,
});
</script>

<style scoped>
.blog-aside {
  @apply sticky;
  top: calc(theme("spacing.nav") + 0.25rem);
}
.blog-aside-wrapper {
  @apply flex flex-col border-t-2 border-b-2 border-typography_primary py-4;
}
.blog-post-text {
  @apply text-typography_primary;
}
.separator {
  @apply mx-1;
}
</style>
