const root = document.querySelector(".root");
const array = [
    [
        "peckage_1",
        [
            "package_1_1",
            "file_1.png",
            "fale_2.txt",
            "fale_3.txt",
            "fale_4.txt",
            "fale_5.txt",
            ["package_1_1_1", "file_1.png", "file_2.png"],
        ],
    ],
    ["peckage_2"],
];

function file_representation(array, indent) {
    let item;
    for (item of array) {
        if (typeof item === "object") {
            file_representation(item, indent + 50);
        } else {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("h4");
            text.textContent = item;
            img.style.marginLeft = `${indent}px`;
            if (item.includes(".")) {
                img.src = "img/file.png";
                img.width = "60";
                img.height = "70";
                div.appendChild(img);
                text.classList.add("file_text");
                text.style.marginLeft = `${10 + indent}px`;
            } else {
                img.src = "img/folder.png";
                img.width = "60";
                img.height = "60";
                div.appendChild(img);
                text.classList.add("folder_text");
                text.style.marginLeft = `${6 + indent}px`;
            }
            div.classList.add("content_div");
            div.appendChild(text);
            root.appendChild(div);
        }
    }
}
file_representation(array, -50);
console.log("stop");

// const num = eel
//     .file_rendering()()
//     .then((result) => {
//         p.textContent = result[0];
//     });
