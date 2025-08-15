/*
Q78. What is package.json and what are its most important fields?

Solution (concise):
- name, version, main/module/exports, scripts, dependencies/devDependencies, engines, type.
- For libraries: exports with subpath exports; for apps: scripts and engines.
*/

const importantFields = [
  'name','version','type','main','module','exports','scripts','dependencies','devDependencies','engines'
];

module.exports = { importantFields };

