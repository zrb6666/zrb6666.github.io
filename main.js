/* =========================================================
   作品集 · 渲染与交互
   所有内容来自 data.js，此文件不需要改
   ========================================================= */

(function () {
  "use strict";

  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    gitee:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="6.6" cy="5.4" r="2.1"/><circle cx="6.6" cy="18.6" r="2.1"/><circle cx="17.4" cy="8.6" r="2.1"/><path d="M6.6 7.5v9M17.4 10.7c0 4.1-4.5 3.4-8.5 5.9"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.6"/><path d="m3.4 7 7.6 5.4a1.8 1.8 0 0 0 2 0L20.6 7"/></svg>',
    demo:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 13.8a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7L11.4 6.7"/><path d="M14 10.2a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.2-1.2"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.link;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- 截图窗 ---------------- */
  function shotHTML(p) {
    var cover = p.cover || "";
    var file = cover ? cover.split("/").pop() : "cover.png";
    var initial = (p.name || "?").trim().slice(0, 1).toUpperCase();

    var img = cover
      ? '<img src="' + esc(cover) + '" alt="' + esc(p.name) + ' 截图" loading="lazy" ' +
        'onerror="this.parentNode.parentNode.classList.add(\'no-shot\')">'
      : "";

    var fallback =
      '<div class="shot-fallback">' +
      '<span class="fallback-tag">screenshot pending</span>' +
      '<div class="fallback-initial">' + esc(initial) + "</div>" +
      '<span class="fallback-name">' + esc(p.name) + "</span>" +
      '<code class="fallback-file">' + esc(cover || "assets/screenshots/your-project.png") + "</code>" +
      "</div>";

    return (
      '<div class="shot' + (cover ? "" : " no-shot") + '">' +
      '<div class="shot-bar"><i></i><i></i><i></i><em>' + esc(file) + "</em></div>" +
      '<div class="shot-body">' + img + fallback + "</div>" +
      "</div>"
    );
  }

  function linksHTML(p) {
    var out = "";
    if (p.demo) {
      out +=
        '<a class="link solid" href="' + esc(p.demo) + '" target="_blank" rel="noopener">' +
        icon("demo") + "在线演示</a>";
    }
    (p.links || []).forEach(function (l) {
      out +=
        '<a class="link" href="' + esc(l.href) + '" target="_blank" rel="noopener">' +
        icon(l.icon) + esc(l.label) + "</a>";
    });
    return out ? '<div class="card-links">' + out + "</div>" : "";
  }

  function techHTML(p) {
    if (!(p.stack || []).length) return "";
    return (
      '<div class="stack-row">' +
      p.stack
        .map(function (t) {
          return '<span class="tech">' + esc(t) + "</span>";
        })
        .join("") +
      "</div>"
    );
  }

  function highlightsHTML(p) {
    if (!(p.highlights || []).length) return "";
    return (
      '<ul class="highlights">' +
      p.highlights
        .map(function (h) {
          return "<li>" + esc(h) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  /* ---------------- 各区块渲染 ---------------- */
  function renderIdentity() {
    document.title = SITE.name + " · 作品集";
    $("heroName").textContent = SITE.name;
    $("heroAlias").textContent = SITE.alias || "";
    $("heroAlias").style.display = SITE.alias ? "" : "none";
    $("heroRole").textContent = SITE.role || "";
    $("heroTag").textContent = SITE.tagline || "";
    $("heroPrompt").textContent = SITE.prompt || "whoami";
    $("brandText").textContent = SITE.name;
    $("brandMark").textContent = (SITE.avatarText || SITE.name).slice(0, 1).toUpperCase();
    $("footerName").textContent = SITE.name;
    $("year").textContent = new Date().getFullYear();

    var about = SITE.intro || "";
    $("aboutIntro").textContent = about;

    var chips = [];
    (SITE.stack || []).forEach(function (g) {
      (g.items || []).slice(0, 3).forEach(function (i) {
        chips.push(i);
      });
    });
    $("aboutChips").innerHTML = chips
      .slice(0, 9)
      .map(function (t) {
        return '<span class="chip">' + esc(t) + "</span>";
      })
      .join("");

    var facts = [
      ["location", SITE.location || "—"],
      ["role", "student / indie dev"],
      ["alias", SITE.alias || "—"],
      ["status", SITE.status || "OPEN", true],
    ];
    $("facts").innerHTML = facts
      .map(function (f) {
        return (
          "<div><dt>" + esc(f[0]) + "</dt>" +
          '<dd class="' + (f[3] ? "live" : "") + '">' +
          (f[3] ? "<i></i>" : "") + esc(f[1]) + "</dd></div>"
        );
      })
      .join("");

    var gh = (SITE.contacts || []).filter(function (c) {
      return c.icon === "github";
    })[0];
    if (gh) $("heroGithub").href = gh.href;
  }

  function renderStats() {
    $("stats").innerHTML = (SITE.stats || [])
      .map(function (s) {
        return (
          '<div class="stat"><dt>' + esc(s.k) + "</dt><dd>" + esc(s.v) + "</dd></div>"
        );
      })
      .join("");
  }

  function renderProjects() {
    var list = SITE.projects || [];
    var featured = list.filter(function (p) {
      return p.featured;
    })[0];
    var rest = list.filter(function (p) {
      return p !== featured;
    });

    var html = "";

    if (featured) {
      html +=
        '<article class="card featured reveal">' +
        shotHTML(featured) +
        '<div class="card-body">' +
        '<div class="card-top"><h3>' + esc(featured.name) + "</h3>" +
        (featured.status ? '<span class="badge">' + esc(featured.status) + "</span>" : "") +
        (featured.year ? '<span class="badge mute">' + esc(featured.year) + "</span>" : "") +
        "</div>" +
        (featured.subtitle ? '<p class="card-sub">' + esc(featured.subtitle) + "</p>" : "") +
        '<p class="card-desc">' + esc(featured.desc) + "</p>" +
        highlightsHTML(featured) +
        '<div class="card-foot">' + techHTML(featured) + linksHTML(featured) + "</div>" +
        "</div></article>";
    }

    var ghost =
      '<div class="ghost reveal"><b>更多项目整理中</b>' +
      "<code>在 data.js 里复制一段即可新增</code></div>";

    if (rest.length) {
      html +=
        '<div class="projects-grid">' +
        rest
          .map(function (p) {
            return (
              '<article class="card tcard reveal">' +
              shotHTML(p) +
              '<div class="card-body">' +
              '<div class="card-top"><h3>' + esc(p.name) + "</h3>" +
              (p.status ? '<span class="badge">' + esc(p.status) + "</span>" : "") +
              (p.year ? '<span class="badge mute">' + esc(p.year) + "</span>" : "") +
              "</div>" +
              (p.subtitle ? '<p class="card-sub">' + esc(p.subtitle) + "</p>" : "") +
              '<p class="card-desc">' + esc(p.desc) + "</p>" +
              highlightsHTML(p) +
              '<div class="card-foot">' + techHTML(p) + linksHTML(p) + "</div>" +
              "</div></article>"
            );
          })
          .join("") +
        ghost +
        "</div>";
    } else {
      html += ghost;
    }

    $("projectsList").innerHTML = html;
  }

  function renderStack() {
    $("stackGrid").innerHTML = (SITE.stack || [])
      .map(function (g) {
        return (
          '<div class="stack-item reveal"><h4>' + esc(g.group) + "</h4><ul>" +
          (g.items || [])
            .map(function (i) {
              return "<li>" + esc(i) + "</li>";
            })
            .join("") +
          "</ul></div>"
        );
      })
      .join("");
  }

  function renderTimeline() {
    $("timeline").innerHTML = (SITE.timeline || [])
      .map(function (t) {
        return (
          '<li class="reveal"><time>' + esc(t.time) + "</time><h4>" + esc(t.title) +
          "</h4><p>" + esc(t.desc) + "</p></li>"
        );
      })
      .join("");
  }

  function renderContacts() {
    $("contactLinks").innerHTML = (SITE.contacts || [])
      .map(function (c) {
        return (
          '<a class="contact-link" href="' + esc(c.href) + '" target="_blank" rel="noopener">' +
          '<span class="cl-left">' + icon(c.icon) +
          "<span><span class=\"cl-label\">" + esc(c.label) + "</span>" +
          '<span class="cl-value">' + esc(c.value) + "</span></span></span>" +
          '<span class="cl-arrow">↗</span>' +
          "</a>"
        );
      })
      .join("");
  }

  /* ---------------- 交互 ---------------- */
  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem("portfolio-theme");
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", saved || "dark");

    $("themeBtn").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (e) {}
    });
  }

  function initNav() {
    var nav = $("nav");
    var links = $("navLinks");
    var burger = $("burger");

    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    if ("IntersectionObserver" in window) {
      var anchors = Array.prototype.slice.call(links.querySelectorAll("a"));
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            anchors.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
            });
          });
        },
        { rootMargin: "-48% 0px -48% 0px" }
      );
      document.querySelectorAll("section[id]").forEach(function (s) {
        spy.observe(s);
      });
    }
  }

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (i) {
        i.classList.add("in");
      });
      return;
    }

    var ticking = false;

    function sweep(initial) {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var keep = [];
      items.forEach(function (i, idx) {
        var r = i.getBoundingClientRect();
        if (r.top < vh * 0.99 && r.bottom > -30) {
          if (initial) {
            i.style.transitionDelay = Math.min(idx, 6) * 55 + "ms";
          }
          i.classList.add("in");
        } else {
          keep.push(i);
        }
      });
      items = keep;
    }

    function onScroll() {
      if (ticking || !items.length) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        sweep(false);
      });
    }

    sweep(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderIdentity();
    renderStats();
    renderProjects();
    renderStack();
    renderTimeline();
    renderContacts();

    initTheme();
    initNav();
    initReveal();
  });
})();
