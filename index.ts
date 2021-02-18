// Imports
import $Document from './lib/Document';
import $Console from './lib/Console';

// Create
const doc = new $Document();
const con = new $Console();

// console.log('CONSOLE');
con.log('CONSOLE');

// document.getElementById('demo').innerHTML = 'Hello';
doc.html('demo', 'Hello');

//