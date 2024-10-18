// JavaScript for toggling pricing plans (if needed)
const plans = document.querySelectorAll('.plan');
const buttons = document.querySelectorAll('.btn');

plans.forEach(plan => {
  plan.addEventListener('click', () => {
    // You can add logic here to toggle between different plans
    // For example, you could hide other plans and show the clicked one.
    // ...
  });
});

// Add event listeners for button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // You can add logic here for button clicks, 
    // such as redirecting to a subscription page.
    // ...
  });
});