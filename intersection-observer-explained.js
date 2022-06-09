// listen for elements to enter viewport

// set up options for the observer
const config = {
  // you can specify the element to compare against, null = viewport
  root: null,
  // you can set a box to ignore, like '30px 20px 30px 20px'
  rootMargin: '0px',
  // how far into the root the element to watch can go before being noticed
  threshold: 0.3
};

// instantiate the observer
observer = new IntersectionObserver(
  function(entries, observer) {
    for (i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio > 0.29) {
        // do something to the element to watch
        entries[i].target.console.log();
        // stop watching element - remove if the above should be a recurring action
        observer.unobserve(entries[i].target);
      }
    }
  // pass in the options
  }, config
);

// manually add querySelectors of the elements to watch in to the array
const elementsToWatch = ['#one.element', '#two.element', '#three.element'];

// loop through the array to hide and observe elements
for (i = 0; i < elementsToWatch.length; i++) {
  // get element from DOM according to the querySelector from the array
  const elementToWatch = document.querySelector(elementsToWatch[i]);
  // do any preliminary actions defined here, then...
  // observe the elements to watch
  observer.observe(elementToWatch);
}
