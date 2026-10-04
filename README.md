# QuickNotes-Website
## Setup
### Prerequisites
  * Node.js >= 22.12.0
  * install dependencies
    ```
    npm install
    ```
### Clone the Repository:
```
  git clone https://github.com/JakobPronebnerMCT/QuickNotes.git
```
### Run Developer Server
```
npm run dev
```

### Open the URL 
 * After starting the developer server, the URL on which the website is hosted can be seen in the terminal. 


## Justification for Structure
 * The note-logic is placed in useNotes because it needs to be independent of the user interface and it can be reused.
 * Components handle input and display and communicate through props and events.
 * The useLocalStorage handles all the loading and saving which keeps all the storage access that are needed in one place

## Reflection Questions
  * Why should NoteCard not modify its note prop directly and how do I solve it? 
    * The parents own the note data. If NoteCard would change the data itself, the child could unexpectdly affect the parent and other components using the same note. This makes changes harder to track and creates a mess when multiple components access the same data. Instead using events to create a one-way data flow is important. Child just send events to the parent without affecting the node data itself.
  * Do two components calling useNotes() share the same notes? 
    * No they do not share the same notes as each call creates its own ref. Both read the same localStorage entry initially but changing this later does not automatically synchronize between them. This is why my code only runs useNotes() once in the App.vue file.

  * What is the purpose of the Note interface? 
    * It defines a structure of a note, so that it helps TypeScript catching incorrect types during developement. Moreover it documents the data that is passed between components and might improve editor suggestions. 
