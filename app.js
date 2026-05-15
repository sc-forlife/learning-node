// Globals - no window

//_dirname - path to current directory
//__filename - filename
//require - function to use modules (commonJs)
//module - info about current module (file)
//process - info about env where the program is being executed

import { sayHi } from "./5-utils.js";
import { secret } from "./4-names.js";
import { salem } from "./4-names.js";
import { john } from "./4-names.js";

sayHi(secret);
sayHi(salem);
sayHi(john);
