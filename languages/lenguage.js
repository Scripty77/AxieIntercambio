const flagsElement = document.getElementById("flags");

const textElements = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textElement of textElements) {
        const section = textElement.dataset.section;
        const value = textElement.dataset.value;

        textElement.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});
