document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Проверяем, что ссылка ведет на другую страницу того же сайта
    if (this.hostname === window.location.hostname && !this.hash && this.target !== "_blank") {
      e.preventDefault(); // Стоп переход
      let destination = this.href;

      document.body.classList.add('fade-out'); // Запускаем исчезновение

      setTimeout(() => {
        window.location.href = destination; // Переходим через 400мс
      }, 400);
    }
  });
});