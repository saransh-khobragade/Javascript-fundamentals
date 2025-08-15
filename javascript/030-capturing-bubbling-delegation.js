/*
Q30. Event capturing vs bubbling and event delegation.

Solution (concise):
- Capturing: events travel from window → target. Bubbling: target → window.
- Delegation: attach one handler on ancestor; check event.target to handle children.
*/

// Pseudo-browser example
// document.getElementById('list').addEventListener('click', (e) => {
//   if (e.target.matches('li.item')) {
//     console.log('Clicked', e.target.dataset.id);
//   }
// });

module.exports = {};

