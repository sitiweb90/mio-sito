document.addEventListener("DOMContentLoaded", () => {

  const boxes = document.querySelectorAll(".box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  boxes.forEach(box => {
    box.classList.add("fade");
    observer.observe(box);
  });

});