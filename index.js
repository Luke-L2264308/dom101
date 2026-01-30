/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here
function replaceText(elem, str) {
  elem.textContent = str 
}

function addTextTo(elem,str){
  elem.textContent += str 

}

function moreBears(){
  const animals = document.querySelector('#animals')
  animals.src = 	"http://placebear.com/400/200"
  animals.alt = 'A bear.'
  animals.title = 'A BEAR!'
}

function setId(elem,str){
  elem.id = str 
  return elem

}

function setClass(elem,str){
  elem.className = str
  return elem
}

function addAClass(elem,str){
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem,str){
    if (elem.classList.contains(str)) elem.classList.remove(str);
}

function newElement(name){
    const elem = document.createElement(name);
    
    return elem;
    
}

function findElementById(id){
  return document.querySelector('#' + CSS.escape(id));
}

function findElementsByQuery(query){
  return document.querySelectorAll(query);
}

function reverseList(query) {
  // Locate the first element that matches the provided CSS selector.
  // `querySelector` returns a single Element or `null` if none found.
  const parent = document.querySelector(query);

  // If no matching element exists, return the falsy value (usually `null`).
  if (!parent) return parent;

  // Convert the parent's live `HTMLCollection` of `children` into a static
  // array, then reverse the order of that array.
  const children = Array.from(parent.children).reverse();

  // Re-append each child to the parent in the reversed order. Because
  // `appendChild` moves existing nodes, this effectively reorders the DOM
  // children rather than creating duplicates.
  children.forEach(child => parent.appendChild(child));

  // Return the parent element after its children have been reordered.
  return parent;
}