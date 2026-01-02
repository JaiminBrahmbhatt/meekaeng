(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    if (ud_header) {
      const sticky = ud_header.offsetTop;
      const logo = document.querySelectorAll(".header-logo");

      if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }

      if (logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src =
            "assets/images/logo/croped.svg"
        } else {
          document.querySelector(".header-logo").src =
            "assets/images/logo/croped.svg"
        }
      }
    }

    // show or hide the back-to-top button
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }

    // Highlight active link
    const sections = document.querySelectorAll(".ud-menu-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");

      if (val && val.startsWith("#")) {
        const refElement = document.querySelector(val);
        if (refElement) {
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            const activeLink = document.querySelector(".ud-menu-scroll.active");
            if (activeLink) {
              activeLink.classList.remove("active");
            }
            currLink.classList.add("active");
          } else {
            currLink.classList.remove("active");
          }
        }
      }
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("navbarTogglerActive");
      navbarCollapse.classList.toggle("hidden");
    });
  }

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        if (navbarToggler && navbarCollapse) {
          navbarToggler.classList.remove("navbarTogglerActive");
          navbarCollapse.classList.add("hidden");
        }
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.onclick = () => {
      scrollTo(document.documentElement);
    };
  }

  // ==== for menu scroll click
  const pageLink = document.querySelectorAll(".ud-menu-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const href = elem.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const refElement = document.querySelector(href);
        if (refElement) {
          window.scrollTo({
            top: refElement.offsetTop - 73,
            behavior: "smooth",
          });
        }
      }
    });
  });

  /* ========  themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  if (themeSwitcher) {
    // Theme Vars
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initial Theme Check
    const themeCheck = () => {
      if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        return;
      }
    };

    // Manual Theme Switch
    const themeSwitch = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        return;
      }

      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    };

    // call theme switch on clicking buttons
    themeSwitcher.addEventListener('click', () => {
      themeSwitch();
    });

    // invoke theme check on initial load
    themeCheck();
  }
  /* ========  themeSwitcher End ========= */

  // ===== Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!fullName || !email || !phone || !message) {
        alert("Please fill out all required fields.");
        return;
      }

      const subject = encodeURIComponent(`New Message from ${fullName}`);
      const body = encodeURIComponent(
        `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
      );
      const mailtoLink = `mailto:Info@MeekaEng.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
    });
  }
})();
