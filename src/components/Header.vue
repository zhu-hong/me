<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="mb-8 flex justify-between items-center">
    <a href="/">
      <img src="/favicon.svg" alt="logo" class="w15 h15">
    </a>
    <div class="flex items-center gap-4">
      <a class="text-$lk-color font-medium" href="/thing">东西</a>
      <a class="text-$lk-color font-medium" href="/snippet">代码段</a>
      <a class="text-$lk-color font-medium" href="/config">配置</a>
      <button @click="toggleDark()">
        {{ isDark ? '🌞' : '🌚' }}
      </button>
    </div>
  </header>
</template>