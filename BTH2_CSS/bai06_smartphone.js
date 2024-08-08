window.onload = function() {
    let main = document.getElementById("main");
    let img = document.querySelectorAll(".thumb img");
    for(let im of img) {
        im.onclick = function() {
            main.src = this.src;
        };
    };
        let cin = document.getElementById("input");
        let name;
        cin.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                name = this.value.trim();
                console.log("Tên sản phẩm:", name); 
                event.preventDefault();
            }
        }); 
}
