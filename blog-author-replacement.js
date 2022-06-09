// change a wordpress blog page's author for security and consistency when you have multiple authors and just want the brand name shown

const otherAuthors = document.querySelectorAll('.author a:not([href*="/brand-name/"])');
if (otherAuthors) {
  otherAuthors.forEach(author => {
    const brandName = document.createElement('span');
    brandName.textContent = 'Brand Name';
    author.parentNode.replaceChild(brandName, author);
  });
}
