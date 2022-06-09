// remove featured posts sections if no posts are present

const featuredPostsSections = document.querySelectorAll('.featured-posts');
if (featuredPostsSections[0]) {
  const featuredPosts = document.querySelectorAll('.featured-posts .column');
  if (!featuredPosts[0]) {
    featuredPostsSections.forEach((section) => {
      section.remove();
    });
  }
}
