// ==================== 課程資料 ====================
const courses = [
  {
    title: "營運數據解讀與資源爭取實",
    description:
      "學習如何解讀營運數據，掌握數據分析技巧，有效進行資源爭取與決策支援。",
    image: "images/營運數據解讀與資源爭取實戰.png",
    sessions: [
      {
        batch: "單一梯次",
        date: "04/02(四)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3417",
      },
    ],
  },
  {
    title: "AI 打造企業致勝佈局與高階策略",
    description:
      "深入了解AI技術如何協助企業制定高階策略，打造致勝佈局，提升競爭優勢。",
    image: "images/AI 打造企業致勝佈局與高階策略.jpg",
    sessions: [
      {
        batch: "單一梯次",
        date: "05/11(一)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3888",
      },
    ],
  },
  {
    title: "Gen AI 驅動的品質管理工作流實戰",
    description:
      "運用生成式AI技術優化品質管理流程，提升工作效率與品質控制能力。",
    image: "images/Gen AI 驅動的品質管理工作流實戰.png",
    sessions: [
      {
        batch: "單一梯次",
        date: "06/17、18、24、25(三四)",
        time: "09:00-17:00",
        url: "https://store.cpc.org.tw/Train/Contents/TD3578",
      },
    ],
  },
  {
    title: "AI 賦能時間管理與聰明授權",
    description:
      "學習運用AI工具提升時間管理效率，掌握聰明授權技巧，優化團隊協作能力。",
    image: "images/AI 賦能時間管理與聰明授權-.png",
    sessions: [
      {
        batch: "單一梯次",
        date: "07/01(三)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3415",
      },
    ],
  },
  {
    title: "AI 革命：把 SOP 從紙上談兵變成企業戰鬥力",
    description:
      "透過AI技術將傳統SOP轉化為實際執行力，提升企業營運效能與競爭力。",
    image: "images/AI 革命：把 SOP 從紙上談兵變成企業戰鬥力.jpg",
    sessions: [
      {
        batch: "單一梯次",
        date: "08/21(五)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3890",
      },
    ],
  },
  {
    title: "破局突圍：AI時代的高效能團隊構建術",
    description:
      "在AI時代下，學習如何構建高效能團隊，突破組織瓶頸，提升團隊協作與創新能力。",
    image: "images/破局突圍：AI時代的高效能團隊構建術.png",
    sessions: [
      {
        batch: "單一梯次",
        date: "09/29(二)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3416",
      },
    ],
  },
  {
    title: "微觀數據洞察與AI問題解決實戰",
    description:
      "深入微觀數據分析，結合AI技術解決實際問題，提升數據驅動決策能力。",
    image: "images/微觀數據洞察與AI問題解決實戰.jpg",
    sessions: [
      {
        batch: "單一梯次",
        date: "11/09(一)",
        time: "09:30~16:30",
        url: "https://store.cpc.org.tw/Train/Contents/TD3889",
      },
    ],
  },
];

// ==================== 生成課程卡片 ====================
function renderCourses() {
  const coursesGrid = document.getElementById("coursesGrid");

  courses.forEach((course, index) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.style.animationDelay = `${index * 0.1}s`;

    // 生成梯次資訊 HTML
    const sessionsHTML = course.sessions
      .map(
        (session) => `
            <div class="session-item">
                <div class="session-header">
                    <span class="session-batch">${session.batch}</span>
                    <span class="session-date">📅 ${session.date}</span>
                </div>
                <div class="session-details">
                    <span class="session-time">⏰ ${session.time}</span>
                    <a href="${session.url}" target="_blank" class="session-link">立即報名</a>
                </div>
            </div>
        `
      )
      .join("");

    courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-sessions">
                    ${sessionsHTML}
                </div>
            </div>
        `;

    coursesGrid.appendChild(courseCard);
  });
}

// ==================== 平滑滾動效果 ====================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll(
    ".experience-item, .course-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// ==================== 初始化所有功能 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 生成內容
  renderCourses();

  // 初始化功能
  initSmoothScroll();
  initNavbarScroll();

  // 延遲初始化滾動動畫，確保元素已渲染
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log("✅ 網站已成功載入！");
  console.log(`🎓 共載入 ${courses.length} 門課程`);
});
