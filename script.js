const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Xabaringiz muvaffaqiyatli yuborildi!");

    form.reset();

});
