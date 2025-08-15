/*
Q44. What is event delegation and how do you implement it?

Solution (concise):
- Attach one listener to a common ancestor; inspect event.target to handle child events.
*/

// Pseudo-browser example
// document.addEventListener('click', (e) => {
//   const li = e.target.closest('li.item');
//   if (li && li.parentElement.id === 'list') {
//     console.log('Clicked item', li.dataset.id);
//   }
// });

module.exports = {};

