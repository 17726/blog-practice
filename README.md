# 17726's Blog

一个简洁现代的个人技术博客，使用纯静态 HTML/CSS/JavaScript 构建。

## ✨ 特性

- 🎨 **现代渐变设计** - 使用渐变色和动画效果打造视觉吸引力
- 📱 **响应式布局** - 完美适配桌面、平板和移动设备
- 🌙 **深色主题** - 护眼的深色配色方案
- ⚡ **轻量快速** - 无需构建工具，纯静态页面
- 🎯 **简洁导航** - 清晰的页面结构和导航系统

## 📂 项目结构

```
blog-practice/
├── index.html          # 首页 - 文章列表
├── about.html          # 关于页面
├── contact.html        # 留言板
├── css/
│   ├── main.scss       # SCSS 源文件
│   └── main.css        # 编译后的 CSS
├── js/
│   └── main.js         # JavaScript 交互
└── posts/
    ├── post-1.html     # 文章页面
    ├── post-2.html
    ├── post-3.html
    └── post-4.html
```

## 🚀 快速开始

1. **克隆项目**

   ```bash
   git clone https://github.com/17726/blog-practice.git
   cd blog-practice
   ```

2. **本地预览**

   使用任何静态服务器打开项目，例如：

   ```bash
   # 使用 Python
   python -m http.server 8000

   # 或使用 Node.js 的 http-server
   npx http-server

   # 或使用 VS Code 的 Live Server 扩展
   ```

3. **访问网站**

   在浏览器中打开 `http://localhost:8000`

## 🛠️ 开发

### 编译 SCSS

如果修改了 `css/main.scss` 文件，需要重新编译：

```bash
# 安装 sass（如果还没安装）
npm install -g sass

# 编译 SCSS
sass css/main.scss css/main.css

# 或者使用 watch 模式
sass --watch css/main.scss css/main.css
```

## 🎨 技术栈

- **HTML5** - 语义化标记
- **SCSS/CSS3** - 样式和动画
- **JavaScript** - 表单交互
- **Google Fonts** - Inter 字体

## 📝 页面说明

- **首页** - 展示所有文章卡片，支持快速浏览
- **关于** - 个人介绍和技能展示
- **留言板** - 收集用户建议和反馈
- **文章页** - 详细的技术文章内容

## 🎯 设计特点

- 卡片式布局，悬停时有蓝色发光效果
- 渐变色标题和按钮
- 平滑的页面过渡动画
- 标签系统用于文章分类
- 毛玻璃效果的导航栏

## 🤝 反馈与建议

欢迎通过以下方式提出建议：

- 📋 [GitHub Issues](https://github.com/17726/blog-practice/issues)
- 💬 网站留言板
- 🐙 [GitHub Profile](https://github.com/17726)

## 📄 许可

本项目仅供学习和个人使用。

---

⭐ 如果觉得这个项目不错，欢迎给个 Star！
