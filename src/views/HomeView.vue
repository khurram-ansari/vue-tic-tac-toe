<script setup lang="ts"></script>

<template>
  <main>
    <section class="min-h-screen flex items-center justify-center px-10">
      <div
        class="board grid border-8 border-black grid-cols-3 grid-rows-3 aspect-square w-[100%] max-w-[700px]"
      >
        <div
          v-for="sq in 9"
          :key="sq"
          class="square text-red-500 text-xl border-black sm:text-6xl border-2 flex justify-center items-center"
        >
          X
        </div>
      </div>
    </section>
  </main>
</template>
