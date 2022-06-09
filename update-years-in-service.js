// display updated years in service number

const yearsInServiceSpans = document.querySelectorAll('span.years-in-service');

if (yearsInServiceSpans[0]) {
  function calcYears(date) {
    const then = new Date(date).getFullYear();
    const now = new Date().getFullYear();
    const diff = now - then;
    const years = document.getElementById('years');
    years.textContent = diff;
  }
  const yearsNum = calcYears('January 1, 1982');
  yearsInServiceSpans.forEach((yearsSpan) => {
    yearsSpan.textContent = yearsNum;
  });
}
