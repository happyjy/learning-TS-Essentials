"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone);
var isOk = true;
/*
  type 'Boolean' is not assignable to type 'boolean'.
  'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
  */
// let isNotOK: boolean = new Boolean(true);
