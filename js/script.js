document.addEventListener("DOMContentLoaded", () => {
  const langToggleButton = document.getElementById("lang-toggle");
  const resumeLink = document.getElementById("resume-link");

  const translatableElements = document.querySelectorAll(".lang");

  let currentLang = "en";

  langToggleButton.addEventListener("click", () => {
    /**
     * Change <html>'s lang property and currentLang to
     * match the current language
     */
    if (currentLang == "en") {
      document.documentElement.lang = "pt-BR";
      currentLang = "pt";
    } else {
      document.documentElement.lang = "en";
      currentLang = "en";
    }

    // Update content language
    translatableElements.forEach((element) => {
      const text = element.dataset[currentLang];

      if (text) {
        element.innerHTML = text;
      }
    });

    // Update resume file to match the current language
    if (currentLang == "pt") {
      resumeLink.href = "assets/Mateus_Cabral_CV.pdf";
    } else {
      resumeLink.href = "assets/Mateus_Cabral_Resume.pdf";
    }

    if (currentLang === "pt") {
      // Update Language Toggle Button to match the opposite language
      langToggleButton.textContent = langToggleButton.dataset.langPt;
    } else {
      langToggleButton.textContent = langToggleButton.dataset.langEn;
    }
  });
});
