document.addEventListener("DOMContentLoaded", function () {
    const startRankingBtn = document.getElementById("start-ranking");
    const tierSection = document.getElementById("tier-section");
    const rankingSection = document.getElementById("ranking-section");

    if (startRankingBtn) {
        startRankingBtn.addEventListener("click", function () {
            console.log("Start Ranking clicked!"); // Debugging log
            tierSection.style.display = "none"; 
            rankingSection.style.display = "block";
        });
    }
});
