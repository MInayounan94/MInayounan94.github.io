<script>
  // Button click event
  document.getElementById("btn").onclick = function() {
    document.getElementById("text").innerHTML = "You clicked the button!";
  };

  // Contact form submission handler
  document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
  });




</script>
