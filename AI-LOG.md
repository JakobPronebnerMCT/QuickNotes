\### AI Log

\## The understanding notes below summarize the explanations to review:



\* Prompt: "Can you help me understand the assignment and identify which parts are missing from my starter files?"

&#x20; \* Übernommen: The required component structure and the implementation of the missing NoteForm, NoteCard, and note logic.

&#x20; \* Geändert/verstanden: Reviewed the responsibilities of each file: components handle input and display, useNotes manages notes, and useLocalStorage handles persistence. Later simplified the code and adjusted the search events explicitly.



\* Prompt: "How can I connect useNotes to useLocalStorage so that adding or deleting a note is saved automatically?"

&#x20; \* Übernommen: Calling useLocalStorage('quicknotes', \[]) inside useNotes and returning its reactive ref as notes.

&#x20; \* Geändert/verstanden: Storage access stays inside useLocalStorage. Changes to notes trigger its watcher, which stores JSON. Saved data is parsed when the composable starts.





\* Prompt: "Why does the storage watcher need the deep: true option?"

&#x20; \* Übernommen: The deep watcher in useLocalStorage, retained from the starter file.

&#x20; \* Geändert/verstanden: deep: true detects changes inside the array, including adding a note with push(). 



\* Prompt: "How can I remove empty and duplicate tags before saving a note?"

&#x20; \* Übernommen: Tag cleanup in addNote() using map(), trim(), filter(Boolean), and Set.

&#x20; \* Geändert/verstanden: NoteForm splits the comma-separated input into an array. useNotes removes surrounding whitespace and empty strings, removes exact duplicates with Set, and converts the result back to an array. Tags with different capitalization remain distinct.



\* Prompt: "What does $event contain for a browser input event vs a custom component event?"

&#x20; \* Übernommen: Reading the input text in SearchBar and sending it through a typed update event. NoteForm sends a note object through its add event.

&#x20; \* Geändert/verstanden: In SearchBars @input handler, $event is a browser event, so its target is treated as HTMLInputElement to read value. In App.vue's @update handler, $event is the emitted string. For NoteForm's add event, the emitted argument is the new note object without an ID, automatically passed to addNote.



\* Prompt: "Please create a clean arrangemnt of all components, so where they are placed in the UI (no coloring, just placement)

&#x20; \* Übernommen: layout.css file which contains all the positioning

&#x20; \* Geändert/verstanden: simple css grid placement.



\* Prompt: "Ok now please add clean coloring, fonts and spacing. Please do not overcomplicate it. Just a simple clean design"

&#x20; \* Übernommen: changed layout.css file with coloring, fonts and spacing.

&#x20; \* Geändert/verstanden: Connection between the classes, ids and the components. 

