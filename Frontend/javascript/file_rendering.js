const root = document.querySelector(".root");
const array = [
    ["peckage_1", ["package_1_1", "file_1.png", "fale_2.txt"]],
    ["peckage_2"],
];

function file_representation(array) {
    let item;
    for (item of array) {
        if (typeof item === "object") {
            file_representation(item);
        } else {
            const h4 = document.createElement("h4");
            h4.textContent = item;
            root.appendChild(h4);
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
