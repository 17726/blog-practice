document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");

  // 切换卡片图片颜色的函数
  function updateCardImages(isLightTheme) {
    const images = document.querySelectorAll(".post-card__image");
    images.forEach((img) => {
      const src = img.src;
      if (src.includes("placehold.co")) {
        if (isLightTheme) {
          // 亮色主题：白色背景 + 深蓝文字
          img.src = src.replace(
            /\/[0-9a-fA-F]{6}\/[0-9a-fA-F]{6}/,
            "/ffffff/1e64c8"
          );
        } else {
          // 深色主题：深色背景 + 蓝色文字
          img.src = src.replace(
            /\/[0-9a-fA-F]{6}\/[0-9a-fA-F]{6}/,
            "/111827/0a7fff"
          );
        }
      }
    });
  }

  if (themeToggle) {
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      updateCardImages(true);
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");

      // 更新卡片图片
      updateCardImages(isLight);

      // 保存主题设置到本地存储
      if (isLight) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  const formContainer = document.getElementById("contact-form-container");
  const successMessage = document.getElementById("success-message");

  if (contactForm && formContainer && successMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // In a real application, you would handle form submission here,
      // e.g., via fetch() to an API endpoint.

      // For this example, we just hide the form and show the success message.
      formContainer.style.display = "none";
      successMessage.style.display = "block";
    });
  }
});
