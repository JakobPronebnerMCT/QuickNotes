<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="search-layout">
    <label for="note-search">Notizen durchsuchen</label>
    <input
      id="note-search"
      type="search"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      placeholder="Titel, Text oder Tag suchen …"
    >
  </div>
</template>
