// Better Bioinformatics — shared site behaviour
(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // ---- Mark current nav link ----
  var here = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // ---- Talk status badges (schedule.html, speakers.html) ----
  // Any element with [data-talk-date] gets classified past / today / upcoming,
  // unless it also carries [data-talk-status="cancelled"].
  function startOfDay(d) {
    var x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  var today = startOfDay(new Date());

  document.querySelectorAll("[data-talk-date]").forEach(function (el) {
    var dateStr = el.getAttribute("data-talk-date");
    var explicit = el.getAttribute("data-talk-status");
    var status;

    if (explicit === "cancelled") {
      status = "cancelled";
    } else {
      var talkDate = startOfDay(new Date(dateStr + "T00:00:00"));
      if (talkDate.getTime() === today.getTime()) status = "today";
      else if (talkDate.getTime() < today.getTime()) status = "past";
      else status = "upcoming";
    }

    el.setAttribute("data-computed-status", status);
    el.classList.add("is-" + status);

    var badgeTargets = el.querySelectorAll("[data-badge-slot]");
    var label = { past: "Past", today: "Today", upcoming: "Upcoming", cancelled: "Cancelled" }[status];
    badgeTargets.forEach(function (slot) {
      slot.textContent = label;
      slot.className = "badge badge-" + status;
    });
  });

  // ---- Optional filter buttons (data-filter-group / data-filter-target) ----
  document.querySelectorAll("[data-filter-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.closest("[data-filter-bar]");
      var filter = btn.getAttribute("data-filter-btn");
      group.querySelectorAll("[data-filter-btn]").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      var scope = document.querySelector(group.getAttribute("data-filter-scope"));
      scope.querySelectorAll("[data-computed-status], [data-filter-item]").forEach(function (item) {
        if (filter === "all") {
          item.style.display = "";
          return;
        }
        var status = item.getAttribute("data-computed-status") || item.getAttribute("data-filter-item");
        item.style.display = status === filter ? "" : "none";
      });
    });
  });

  // ---- Materials modals (resources.html) ----
  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dialog = document.getElementById(btn.getAttribute("data-open-modal"));
      if (dialog) dialog.showModal();
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });
  document.querySelectorAll("dialog.materials-modal").forEach(function (dialog) {
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
  });

  // ---- Footer year ----
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
