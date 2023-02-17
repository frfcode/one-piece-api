"use strict";
console.log("ok");
let getAllLinks = document.querySelectorAll("#nakama_link_copy");
getAllLinks.forEach((createButtonCopy, index) => {
    createButtonCopy.addEventListener("click", () => {
        let assingStatusCopy = document.querySelectorAll("#nakama_link_status");
        let createTmpElement = document.createElement("textarea");
        createTmpElement.value = createButtonCopy.textContent.trim();
        document.body.appendChild(createTmpElement);
        createTmpElement.select();
        if (document.execCommand("copy")) {
            createTmpElement.remove();
            assingStatusCopy[index].innerHTML = `<p class="bg-primary p-2 rounded text-white">Copy Success Nakama</p>`;
            setTimeout(() => {
                assingStatusCopy[index].innerHTML = "";
            }, 1800);
        }
    });
});
