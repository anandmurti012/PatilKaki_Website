document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const target = button.getAttribute('data-tab');
          tabContents.forEach(content => {
              content.classList.remove('active');
              if (content.id === target) {
                  content.classList.add('active');
              }
          });
      });
  });
});
 
