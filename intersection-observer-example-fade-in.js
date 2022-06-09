// fade in when scrolled into view - a practical example of using the Intersection Observer API

// set up options for the observer
const config = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

// instantiate the observer
observer = new IntersectionObserver(
  function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.29) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, config
);

// add querySelectors of the elements to hide and fade in to the array
const hiddenElements = ['#one.element', '#two.element', '#three.element'];

// loop through the array to hide and observe elements
hiddenElements.forEach((element) => {
  const observee = document.querySelector(element);
  observee.classList.add('hidden');
  observer.observe(observee);
});
