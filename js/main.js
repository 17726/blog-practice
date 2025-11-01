document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");

  // 切换文章及卡片图片颜色的函数（同时处理卡片和单篇文章图片）
  function updateCardImages(isDarkTheme) {
    const selectors = ".post-card__image, .post__image";
    const images = document.querySelectorAll(selectors);
    images.forEach((img) => {
      const src = img.src;
      if (src && src.includes("placehold.co")) {
        if (isDarkTheme) {
          // 深色主题：深色背景 + 蓝色文字
          img.src = src.replace(
            /\/[0-9a-fA-F]{6}\/[0-9a-fA-F]{6}/,
            "/111827/0a7fff"
          );
        } else {
          // 亮色主题：白色背景 + 深蓝文字
          img.src = src.replace(
            /\/[0-9a-fA-F]{6}\/[0-9a-fA-F]{6}/,
            "/ffffff/1e64c8"
          );
        }
      }
    });
  }

  if (themeToggle) {
    // 检查本地存储中的主题设置，默认为亮色
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      updateCardImages(true);
    } else {
      // 默认亮色主题
      updateCardImages(false);
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");

      // 更新卡片图片
      updateCardImages(isDark);

      // 保存主题设置到本地存储
      if (isDark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
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
