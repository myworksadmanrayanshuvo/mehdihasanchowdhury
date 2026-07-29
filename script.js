(function () {
  "use strict";

  var root = document.documentElement;
  var header = document.getElementById("siteHeader");
  var themeToggle = document.getElementById("themeToggle");
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Theme: dark by default (brand identity), toggle to light for this session ---- */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  applyTheme("dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  /* ---- Mobile menu ---- */
  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    if (menuToggle) menuToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }
  function openMenu() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    if (menuToggle) menuToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      if (mobileNav && mobileNav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---- Header hide/show + shadow on scroll ---- */
  var lastScroll = window.scrollY;
  window.addEventListener(
    "scroll",
    function () {
      var current = window.scrollY;
      if (header) {
        if (current > 40) {
          header.style.boxShadow = "0 6px 24px rgba(0,0,0,.12)";
        } else {
          header.style.boxShadow = "none";
        }
      }
      lastScroll = current;
    },
    { passive: true }
  );

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
