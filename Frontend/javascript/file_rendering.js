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
            ["package_1_1_1", "file_1.png"],
        ],
    ],
    ["peckage_2"],
];

function file_representation(array) {
    let item;
    for (item of array) {
        if (typeof item === "object") {
            file_representation(item);
        } else {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("h4");
            text.textContent = item;
            if (item.includes(".")) {
                img.src = "img/file.png";
                img.width = "80";
                img.height = "90";
                div.appendChild(img);
                text.style.marginLeft = "12px";
            } else {
                img.src = "img/folder.png";
                img.width = "80";
                img.height = "80";
                div.appendChild(img);
                text.style.marginLeft = "8px";
            }
            text.style.marginTop = "-1%";
            div.style.userSelect = "none";
            div.appendChild(text);
            root.appendChild(div);
        }
    }
}
file_representation(array);
console.log("stop");

// const num = eel
//     .file_rendering()()
//     .then((result) => {
//         p.textContent = result[0];
//     });
