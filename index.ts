// Imports
import $Document from './lib/Document';
import $Console from './lib/Console';
import { dtf } from './lib/DocToolsFramework';


// Create
const doc = new $Document();
const con = new $Console();

con.log('Running App');

new dtf('app').elmt('div', '');
new dtf('app').full(`<div class="form"><div class="title">Welcome</div><div class="subtitle">Let's create your account!</div><div class="input-container ic1"><input id="firstname" class="input" type="text" placeholder=" " /><div class="cut"></div><label for="firstname" class="placeholder">First name</label></div><div class="input-container ic2"><input id="lastname" class="input" type="text" placeholder=" " /><div class="cut"></div><label for="lastname" class="placeholder">Last name</label></div><div class="input-container ic2"><input id="email" class="input" type="text" placeholder=" " /><div class="cut cut-short"></div><label for="email" class="placeholder">Email</></div><button type="text" class="submit">submit</button></div>`)