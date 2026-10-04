import { ref, watch } from 'vue'

export function useLocalStorage(key, initialValue) {
  const value = ref(initialValue)
  try {
    const stored = localStorage.getItem(key)
    if (stored !== null) value.value = JSON.parse(stored)
  } catch (error) {
    console.warn('Gespeicherte Daten konnten nicht geladen werden.', error)
  }

  watch(value, (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.warn('Daten konnten nicht lokal gespeichert werden.', error)
    }
  }, { deep: true })

  return value
}
