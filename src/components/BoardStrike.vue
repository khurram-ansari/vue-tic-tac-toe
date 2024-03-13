<template>
  <div class="strike h-full w-1 absolute bg-green-500"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.strike.dir-036,
.strike.dir-147,
.strike.dir-258 {
  transform: translateX(-50%);
}
.strike.dir-036 {
  top: 0;
  left: calc(1 / 6 * 100%);
}
.strike.dir-147 {
  top: 0;
  left: calc(3 / 6 * 100%);
}
.strike.dir-258 {
  top: 0;
  left: calc(5 / 6 * 100%);
}
.strike.dir-012,
.strike.dir-345,
.strike.dir-678 {
  left: 50%;
  transform: rotate(90deg) translate(50%, -50%);
  transform-origin: top;
}
.strike.dir-012 {
  top: calc(1 / 6 * 100%);
}
.strike.dir-345 {
  top: calc(3 / 6 * 100%);
}
.strike.dir-678 {
  top: calc(5 / 6 * 100%);
}

.strike.dir-048,
.strike.dir-246 {
  left: 50%;
}
.strike.dir-048 {
  transform: rotate(-45deg) scaleY(1.3);
}
.strike.dir-246 {
  transform: rotate(45deg) scaleY(1.3);
}
</style>
