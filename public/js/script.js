const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// ------------------------------------- -------------- dashboar page start


// const oneone = document.querySelectorAll('.filter_btn')


// oneone.forEach((oneone, one =>{
//   one.addEventListener('click', () =>{
//     console.log("");
//   })
// }))


document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter_btn');
  const cards = document.querySelectorAll('.block_filter_card');

  // Initially show only technology cards
  cards.forEach(card => {
    if (card.getAttribute('data-category') === 'technology') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      console.log("ishladi");

      // Hide all cards
      cards.forEach(card => card.style.display = 'none');

      // Show only the cards that match the category
      cards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        }
      });
    });
  });
});


