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
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.29) {
        // do something to the element to watch
        entry.target.console.log();
        // stop watching element - remove if the above should be a recurring action
        observer.unobserve(entry.target);
      }
    });
  // pass in the options
  }, config
);

// manually add querySelectors of the elements to watch in to the array
const elementsToWatch = ['#one.element', '#two.element', '#three.element'];

// loop through the array to hide and observe elements
elementsToWatch.forEach((element) => {
  // get element from DOM according to the querySelector from the array
  const observee = document.querySelector(element);
  // do any preliminary actions defined here, then...
  // observe the elements to watch
  observer.observe(observee);
});
