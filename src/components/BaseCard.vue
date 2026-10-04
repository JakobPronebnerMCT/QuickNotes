<template>
  <div class="card-layout">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>
