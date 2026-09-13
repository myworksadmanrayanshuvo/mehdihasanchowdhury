(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Nav: scrolled state + mobile toggle ---------------- */
  var nav = document.getElementById("siteNav");
  var navToggle = document.getElementById("navToggle");
  var navLinksEl = document.getElementById("navLinks");

  function onScrollNav() {
    if (window.scrollY > 30) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinksEl.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Active nav link on scroll ---------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var navAnchors = Array.prototype.slice.call(navLinksEl ? navLinksEl.querySelectorAll("a") : []);

  function setActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navAnchors.forEach(function (a) {
      var isActive = a.getAttribute("href") === "#" + current.id;
      a.classList.toggle("is-active", isActive);
    });
  }
  if (navAnchors.length) {
    setActiveLink();
    window.addEventListener("scroll", setActiveLink, { passive: true });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

  if (prefersReducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------------- Animated counters ---------------- */
  var counters = document.querySelectorAll(".num[data-count]");

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var isDecimal = target % 1 !== 0;
    var duration = 1400;
    var start = null;

    if (prefersReducedMotion) {
      el.textContent = prefix + target + suffix;
      return;
    }

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = prefix + (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length && "IntersectionObserver" in window) {
    var counterIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      counterIo.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      var target = el.getAttribute("data-count");
      el.textContent = (el.getAttribute("data-prefix") || "") + target + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ---------------- Timeline growth-line draw ---------------- */
  var timelineFill = document.getElementById("timelinePathFill");
  var timelineWrap = document.querySelector(".timeline");

  if (timelineFill && timelineWrap) {
    var length = timelineFill.getTotalLength();
    timelineFill.style.strokeDasharray = length;
    timelineFill.style.strokeDashoffset = length;

    function updateTimelineDraw() {
      var rect = timelineWrap.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = rect.height;
      var scrolled = vh * 0.75 - rect.top;
      var ratio = Math.min(Math.max(scrolled / total, 0), 1);
      timelineFill.style.strokeDashoffset = String(length * (1 - ratio));
    }

    if (prefersReducedMotion) {
      timelineFill.style.strokeDashoffset = "0";
    } else {
      updateTimelineDraw();
      window.addEventListener("scroll", updateTimelineDraw, { passive: true });
      window.addEventListener("resize", updateTimelineDraw);
    }
  }
})();
