document.addEventListener("DOMContentLoaded", function () {
  // Pārvērš HTML kodu par neinterpretētu tekstu
  document.querySelectorAll("pre code").forEach((block) => {
      block.textContent = block.textContent; // Saglabā HTML kā tekstu
  });

  hljs.highlightAll();
});
