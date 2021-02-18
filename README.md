# DocTools
Simple Codes
    
## Setup
Add this
    
```ts
// Imports
import $Document from './lib/Document';
import $Console from './lib/Console';

// Create
const doc = new $Document();
const con = new $Console();
```
    
# Enjoy

```ts
// console.log('CONSOLE');
con.log('CONSOLE');
```
----

```ts
// document.getElementById('demo').innerHTML = 'Hello';
doc.html('demo', 'Hello');
```