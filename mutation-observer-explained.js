// listen for mutation on element, then do something
      
// get element to watch
const elementToWatch = document.getElementById('element');

// options to pass to the observer
const config = { attributes: true, childList: true, subtree: true };

// callback function to run when mutation occurs
function uniqueCallback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    // each of the following conditions are optional, based on options passed to observer
    if (mutation.type === 'attributes') {
      // do something
    } else if (mutation.type === 'childList') {
      // do something else
    } else if (mutation.type === 'subtree') {
      // do something else
    }
  });
}

// instantiate observer and pass in callback function
const observer = new MutationObserver(uniqueCallback);

// pass observer the element to watch and options
observer.observe(elementToWatch, config);
// optional way to stop observing below
// observer.disconnect();
