document.addEventListener("DOMContentLoaded", () => {
  /* ============================
   * 1. SVG 곡선 라인 애니메이션
   * ============================ */
  const path = document.getElementById("curvy-line");

  if (path) {
    const length = path.getTotalLength();

    // CSS 변수로 길이 전달 (필요하면 CSS에서 사용 가능)
    path.style.setProperty("--path-length", length);

    // stroke 애니메이션 초기 세팅
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // CSS @keyframes drawLine 기준 애니메이션 적용
    path.style.animation = "drawLine 7s ease-in-out infinite";
  }

  /* ============================
   * 2. .popup-open 클릭 시 팝업 열기
   * ============================ */
  const popupOverlay = document.getElementById("previewPopup");

  if (popupOverlay) {
    const closeBtn = popupOverlay.querySelector(".popup-close");
    const openButtons = document.querySelectorAll(".preview .popup-open");

    // 열기 버튼(.popup-open) 클릭 → 팝업 활성화
    openButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        popupOverlay.classList.add("active");
      });
    });

    // 닫기 버튼 클릭 → 팝업 닫기
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popupOverlay.classList.remove("active");
      });
    }

    // 오버레이(검은 배경) 클릭 → 팝업 닫기
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        popupOverlay.classList.remove("active");
      }
    });
  }
});
