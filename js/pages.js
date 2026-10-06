/* ============================================================
   CLUB HOTEK TSS — PAGES.JS (page-specific logic)
============================================================ */
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /* ---- CURRICULUM TABS (trades.html) ---- */
    const tabs = document.querySelectorAll(".curriculum-tab");
    const panels = document.querySelectorAll(".curriculum-panel");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            tab.classList.add("active");
            const target = document.getElementById("tab-" + tab.dataset.tab);
            if (target) target.classList.add("active");
        });
    });

    /* ---- PERFORMANCE SECTION (performance.html) ---- */
    let perfStarted = false;
    function animatePerformance() {
        const section = document.querySelector(".performance-section");
        if (!section || perfStarted) return;
        const rect = section.getBoundingClientRect();
        if (rect.top > window.innerHeight - 120) return;
        perfStarted = true;

        document.querySelectorAll(".performance-kpi .kpi-number").forEach(el => {
            const target = parseInt(el.getAttribute("data-count"), 10) || 0;
            let current = 0;
            const inc = Math.max(1, Math.ceil(target / 50));
            const timer = setInterval(() => {
                current += inc;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = current + "%";
            }, 30);
        });
        document.querySelectorAll(".performance-bar-fill").forEach(bar => {
            setTimeout(() => { bar.style.width = bar.getAttribute("data-width") + "%"; }, 200);
        });
        document.querySelectorAll(".performance-stat-value").forEach(el => {
            const target = parseInt(el.getAttribute("data-count"), 10) || 0;
            let current = 0;
            const inc = Math.max(1, Math.ceil(target / 50));
            const timer = setInterval(() => {
                current += inc;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = current + "%";
            }, 30);
        });
    }
    window.addEventListener("scroll", animatePerformance);
    window.addEventListener("load", animatePerformance);
    setTimeout(animatePerformance, 800);

    /* ---- CAMPUS TOUR VIDEO (gallery.html) ---- */
    const campusPlay = document.getElementById("campusPlay");
    if (campusPlay) {
        campusPlay.addEventListener("click", () => {
            const videoModal = document.getElementById("videoModal");
            const eventVideo = document.getElementById("eventVideo");
            if (videoModal && eventVideo) {
                eventVideo.src = "assets/videos/campus-tour.mp4";
                videoModal.classList.add("show");
                document.body.style.overflow = "hidden";
                eventVideo.play().catch(() => {});
            }
        });
    }
    const videoModalClose = document.getElementById("videoModalClose");
    if (videoModalClose) {
        videoModalClose.addEventListener("click", () => {
            const videoModal = document.getElementById("videoModal");
            const eventVideo = document.getElementById("eventVideo");
            if (eventVideo) { eventVideo.pause(); eventVideo.currentTime = 0; eventVideo.src = ""; }
            if (videoModal) {
                videoModal.classList.remove("show");
                document.body.style.overflow = "";
            }
        });
    }

    /* ---- NEWS POST MODAL (news.html) ---- */
    const postModal = document.getElementById("postModal");
    if (postModal) {
        const postModalClose = document.getElementById("postModalClose");
        const postModalCloseBtn = document.getElementById("postModalCloseBtn");
        const postModalImage = document.getElementById("postModalImage");
        const postModalTitle = document.getElementById("postModalTitle");
        const postModalDate = document.getElementById("postModalDate");
        const postModalCategory = document.getElementById("postModalCategory");

        function openPost(title, date, image, category) {
            if (postModalTitle) postModalTitle.textContent = title || "";
            if (postModalDate) postModalDate.textContent = date || "";
            if (postModalCategory) postModalCategory.textContent = category || "News";
            if (postModalImage) { postModalImage.src = image || ""; postModalImage.alt = title || ""; }
            postModal.classList.add("show");
            document.body.style.overflow = "hidden";
        }
        function closePost() {
            postModal.classList.remove("show");
            document.body.style.overflow = "";
        }

        document.querySelectorAll(".post-item, .recent-post-item").forEach(card => {
            card.addEventListener("click", () => {
                openPost(
                    card.getAttribute("data-title"),
                    card.getAttribute("data-date"),
                    card.getAttribute("data-image"),
                    card.getAttribute("data-category")
                );
            });
        });
        if (postModalClose) postModalClose.addEventListener("click", closePost);
        if (postModalCloseBtn) postModalCloseBtn.addEventListener("click", closePost);
        postModal.addEventListener("click", e => { if (e.target === postModal) closePost(); });
        document.addEventListener("keydown", e => {
            if (e.key === "Escape" && postModal.classList.contains("show")) closePost();
        });
    }
});