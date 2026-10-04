import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes',([]))

  function addNote(note) {
    const title = note.title.trim()
    const content = note.content.trim()
    if (!title || !content) return
    const id = crypto.randomUUID()
    const tags = [...new Set(note.tags.map((tag) => tag.trim()).filter(Boolean))]
    notes.value.push({ id, title, content, tags })
  }

  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id)
  }


  function filteredNotes(term) {
    return computed(() => {
      const query = term.value.trim().toLocaleLowerCase('de')
      return notes.value.filter((note) =>
        [note.title, note.content, ...note.tags].some((text) =>
          text.toLocaleLowerCase('de').includes(query),
        ),
      )
    })
  }

  return { notes, addNote, deleteNote, filteredNotes }
}
