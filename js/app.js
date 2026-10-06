/* Less Plastic Life × RAMEN TECH 2026 — 동작 코드
   문구/설정은 js/content.js 에서 고치세요. */
(function () {
  "use strict";

  var CFG = window.LPL_CONFIG;
  var TXT = window.LPL_TEXT;
  var LANGS = ["en", "ja", "zh", "ko"];
  var LABELS = { en: "EN", ja: "日本語", zh: "中文", ko: "한국어" };
  var HTML_LANG = { en: "en", ja: "ja", zh: "zh-Hans", ko: "ko" };
  var N = CFG.materials.length;

  function $(id) { return document.getElementById(id); }
  var ring = $("ring"), hintEl = $("hint"), taglineEl = $("tagline"), langsEl = $("langs"), footEl = $("foot");
  var detail = $("detail"), flip = $("flip"), back = $("back");
  var frontImg = $("frontImg"), frontName = $("frontName"), dotsEl = $("dots"), toast = $("toast");

  /* ---------- 배경 사진 부드럽게 나타나기 ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".bg img"), function (im) {
    function show() { im.classList.add("in"); }
    if (im.complete && im.naturalWidth) show();
    else { im.addEventListener("load", show); im.addEventListener("error", function () {}); }
  });

  /* ---------- 언어 ---------- */
  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && TXT[q]) return q;
    try { var s = localStorage.getItem("lpl-lang"); if (s && TXT[s]) return s; } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i]).toLowerCase().slice(0, 2);
      if (TXT[l]) return l;
    }
    return CFG.defaultLang;
  }
  var lang = pickLang();
  function ui() { return TXT[lang].ui; }
  function mat(i) { return TXT[lang].materials[CFG.materials[i].id]; }

  /* ---------- 회전 카드 ---------- */
  var orbs = [];
  CFG.materials.forEach(function (m, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "orb";
    b.innerHTML = '<img alt="" draggable="false" src="' + m.thumb + '"><span class="orb-name"></span>';
    ring.appendChild(b);
    orbs.push(b);
    b.addEventListener("click", function () { if (!moved) openDetail(i); });
  });

  var rot = 0, inertia = 0, dragging = false, moved = false, lastX = 0, startX = 0, paused = false;
  var AUTO = 8; /* 초당 도(°) — 한 바퀴 약 45초 */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  ring.addEventListener("pointerdown", function (e) {
    dragging = true; moved = false; startX = lastX = e.clientX; inertia = 0;
  });
  window.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var dx = e.clientX - lastX; lastX = e.clientX;
    if (Math.abs(e.clientX - startX) > 6) moved = true;
    var d = dx * 0.45; rot += d; inertia = d;
  });
  function endDrag() { if (dragging) { dragging = false; setTimeout(function () { moved = false; }, 0); } }
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);

  function layout() {
    var s = ring.clientWidth, cs = s * 0.28, R = s * 0.355;
    for (var i = 0; i < N; i++) {
      var a = (rot + i * 360 / N - 90) * Math.PI / 180;
      var x = s / 2 + R * Math.cos(a) - cs / 2;
      var y = s / 2 + R * Math.sin(a) - cs / 2;
      var el = orbs[i];
      el.style.width = cs + "px"; el.style.height = cs + "px";
      el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
    }
  }
  var last = performance.now();
  function frame(t) {
    var dt = Math.min(50, t - last) / 1000; last = t;
    if (!dragging) {
      if (Math.abs(inertia) > 0.02) { rot += inertia; inertia *= 0.95; }
      else if (!paused && !reduce) { rot += AUTO * dt; }
    }
    layout();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------- 설문 링크 ---------- */
  function surveyHref(id) {
    var base = (CFG.surveyUrl && CFG.surveyUrl[lang]) || "";
    if (!base) return "";
    return base + (base.indexOf("?") > -1 ? "&" : "?") + "src=booth&card=" + encodeURIComponent(id) +
      "&lang=" + lang + "&viewed=" + Object.keys(seen).length;
  }
  var seen = {}; /* 지금까지 열어본 카드 (설문 분석용) */
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }

  /* ---------- 상세 카드 ---------- */
  var idx = 0;
  function fmt(s, vars) { return s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }); }

  function fillDetail() {
    var m = CFG.materials[idx], t = mat(idx), u = ui(), p = CFG.biomassPercent;
    seen[m.id] = 1;
    frontImg.src = m.image; frontName.textContent = t.name;
    var href = surveyHref(m.id);
    back.innerHTML =
      '<div class="chip"></div>' +
      '<p class="intro"></p>' +
      '<div class="block"><div class="label"></div><div class="forms"></div><p class="origin"></p></div>' +
      '<div class="block"><div class="label"></div>' +
        '<div class="bar" style="--p:' + p + '"><div class="l"></div><div class="r"></div></div>' +
        '<p class="nowline"></p><p class="sub reduce"></p></div>' +
      '<div class="block"><div class="label uselabel"></div><div class="uses"></div></div>' +
      '<a class="cta" rel="noopener"><span class="txt"></span><span class="arrow" aria-hidden="true">&#8594;</span></a>';
    var q = function (sel) { return back.querySelector(sel); };
    q(".chip").textContent = t.name;
    q(".intro").textContent = t.intro;
    q(".origin").textContent = t.origin;
    var labels = back.querySelectorAll(".label");
    labels[0].textContent = u.formsLabel;
    var formsEl = q(".forms");
    (t.forms || []).forEach(function (f, i) {
      var d = document.createElement("div");
      var ico = document.createElement("span"); ico.className = "ico"; ico.setAttribute("aria-hidden", "true");
      ico.textContent = (m.icons && m.icons[i]) || "";
      var cap = document.createElement("span"); cap.className = "cap"; cap.textContent = f;
      if (CFG.formPhotos) {
        /* 사진이 있으면 사진, 없거나 못 불러오면 이모지로 대체 */
        var ph = document.createElement("img");
        ph.className = "ph"; ph.alt = ""; ph.draggable = false;
        ph.src = "assets/img/forms/" + m.id + "-" + (i + 1) + ".jpg";
        ph.addEventListener("error", function () { d.classList.remove("has-photo"); ph.remove(); });
        d.classList.add("has-photo");
        d.appendChild(ph);
      }
      d.appendChild(ico); d.appendChild(cap); formsEl.appendChild(d);
    });
    labels[1].textContent = u.nowLabel;
    q(".bar .l").innerHTML = p + "%<small></small>";
    q(".bar .l small").textContent = t.name;
    q(".bar .r").innerHTML = (100 - p) + "%<small></small>";
    q(".bar .r small").textContent = u.plasticLabel;
    q(".nowline").textContent = fmt(u.nowLine, { pct: p, name: t.inline });
    q(".reduce").textContent = u.reduceLine + " " + u.adjustLine;
    q(".uselabel").textContent = u.useLabel;
    var usesEl = q(".uses");
    (CFG.useCases || []).forEach(function (c) {
      var f = document.createElement("figure");
      var im = document.createElement("img");
      im.src = c.image; im.alt = ""; im.draggable = false; im.style.objectPosition = c.pos || "50% 50%";
      var cap = document.createElement("figcaption");
      cap.textContent = u.uses[c.id];
      f.appendChild(im); f.appendChild(cap); usesEl.appendChild(f);
    });
    var cta = q(".cta");
    q(".cta .txt").textContent = u.cta;
    if (href) { cta.href = href; cta.target = "_blank"; }
    else { cta.href = "#"; cta.addEventListener("click", function (e) { e.preventDefault(); showToast(u.ctaSoon); }); }
    dotsEl.innerHTML = "";
    for (var i = 0; i < N; i++) { var d = document.createElement("i"); if (i === idx) d.className = "on"; dotsEl.appendChild(d); }
    back.scrollTop = 0;
  }

  var openTimer;
  function openDetail(i) {
    idx = i; fillDetail();
    detail.hidden = false; paused = true;
    document.body.classList.add("modal");
    flip.classList.remove("flipped");
    void detail.offsetWidth;
    detail.classList.add("open");
    clearTimeout(openTimer);
    openTimer = setTimeout(function () { flip.classList.add("flipped"); }, reduce ? 0 : 320);
    $("close").focus({ preventScroll: true });
  }
  function closeDetail() {
    detail.classList.remove("open"); paused = false;
    document.body.classList.remove("modal");
    setTimeout(function () { if (!detail.classList.contains("open")) detail.hidden = true; }, 260);
  }
  function go(step) {
    flip.classList.remove("flipped");
    clearTimeout(openTimer);
    openTimer = setTimeout(function () {
      idx = (idx + step + N) % N; fillDetail();
      requestAnimationFrame(function () { flip.classList.add("flipped"); });
    }, reduce ? 0 : 360);
  }
  $("close").addEventListener("click", closeDetail);
  $("backdrop").addEventListener("click", closeDetail);
  $("prev").addEventListener("click", function () { go(-1); });
  $("next").addEventListener("click", function () { go(1); });
  document.addEventListener("keydown", function (e) {
    if (detail.hidden) return;
    if (e.key === "Escape") closeDetail();
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
  /* 카드 자체를 누르면 앞/뒤로 다시 뒤집기 (버튼·링크 제외) */
  flip.addEventListener("click", function (e) {
    if (e.target.closest("a, button")) return;
    flip.classList.toggle("flipped");
  });

  /* ---------- 화면 문구 / 언어 버튼 ---------- */
  function renderStatic() {
    var u = ui();
    document.documentElement.lang = HTML_LANG[lang];
    taglineEl.textContent = u.tagline;
    hintEl.textContent = u.hint;
    footEl.textContent = u.event;
    orbs.forEach(function (b, i) { b.querySelector(".orb-name").textContent = mat(i).name; b.setAttribute("aria-label", mat(i).name); });
    $("close").setAttribute("aria-label", u.close);
    $("prev").setAttribute("aria-label", u.prev);
    $("next").setAttribute("aria-label", u.next);
    Array.prototype.forEach.call(langsEl.children, function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
  }
  LANGS.forEach(function (l) {
    var b = document.createElement("button");
    b.type = "button"; b.dataset.lang = l; b.textContent = LABELS[l];
    b.addEventListener("click", function () {
      lang = l;
      try { localStorage.setItem("lpl-lang", l); } catch (e) {}
      renderStatic();
      if (!detail.hidden) fillDetail();
    });
    langsEl.appendChild(b);
  });
  renderStatic();
})();
