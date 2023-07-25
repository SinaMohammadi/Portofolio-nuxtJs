import { LayoutsMainFooter, LayoutsMainHeader } from '../.nuxt/components';
<template>
  <div class="px-6 sm:px-36 sm:pt-10">
    <LayoutsMainHeader />
    <slot />
  </div>
  <LayoutsMainFooter />
</template>
