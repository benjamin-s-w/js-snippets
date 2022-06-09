// get location info from page footer and add 

const locationTargets = document.querySelectorAll('.widget-contact-location-wrap');
if (locationTargets) {
  for (i = 0; i < locationTargets.length; i++) {
    const locationTitles = locationTargets[i].children[0];
    const locationAddresses = locationTargets[i].children[1];
    const locationPhones = locationTargets[i].children[2];
    const newLocations = document.querySelectorAll('#import-locations .location-wrap');
    const newTitle = document.createElement('h4');
    const locationAddress = document.createElement('p');
    const locationPhone = document.createElement('p');
    newTitle.innerText = locationTitles.innerText;
    locationAddress.innerHTML = locationAddresses.innerHTML;
    locationPhone.innerHTML = locationPhones.innerHTML;
    newLocations[i].prepend(locationPhone);
    newLocations[i].prepend(locationAddress);
    newLocations[i].prepend(newTitle);
  }
}
