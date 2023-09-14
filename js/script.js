document.addEventListener("DOMContentLoaded", function () {
    const shapeForm = document.getElementById("shape-form");
    const shapeSelect = document.getElementById("shape");
    const squareFields = document.getElementById("square-fields");
    const rectangleFields = document.getElementById("rectangle-fields");
    const circleFields = document.getElementById("circle-fields");
    const calculateBtn = document.getElementById("calculateBtn");
    const areaResult = document.getElementById("areaResult");
    const perimeterResult = document.getElementById("perimeterResult");

    shapeSelect.addEventListener("change", function () {
        // Menampilkan input sesuai dengan bentuk yang dipilih
        const selectedShape = shapeSelect.value;
        squareFields.style.display = selectedShape === "square" ? "block" : "none";
        rectangleFields.style.display = selectedShape === "rectangle" ? "block" : "none";
        circleFields.style.display = selectedShape === "circle" ? "block" : "none";
    });

    shapeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedShape = shapeSelect.value;

        if (selectedShape === "square") {
            // Ambil panjang sisi dari input
            const sideLength = parseFloat(document.getElementById("sideLength").value);

            // Validasi input
            if (isNaN(sideLength) || sideLength <= 0) {
                alert("Panjang sisi harus berupa angka positif.");
                return;
            }

            // Hitung luas dan keliling persegi
            const area = sideLength * sideLength;
            const perimeter = 4 * sideLength;

            // Tampilkan hasil
            areaResult.textContent = "Luas: " + area.toFixed(2);
            perimeterResult.textContent = "Keliling: " + perimeter.toFixed(2);
        } else if (selectedShape === "rectangle") {
            // Ambil panjang dan lebar dari input
            const length = parseFloat(document.getElementById("length").value);
            const width = parseFloat(document.getElementById("width").value);

            // Validasi input
            if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
                alert("Panjang dan lebar harus berupa angka positif.");
                return;
            }

            // Hitung luas dan keliling persegi panjang
            const area = length * width;
            const perimeter = 2 * (length + width);

            // Tampilkan hasil
            areaResult.textContent = "Luas: " + area.toFixed(2);
            perimeterResult.textContent = "Keliling: " + perimeter.toFixed(2);
        } else if (selectedShape === "circle") {
            // Ambil jari-jari dari input
            const radius = parseFloat(document.getElementById("radius").value);

            // Validasi input
            if (isNaN(radius) || radius <= 0) {
                alert("Jari-jari harus berupa angka positif.");
                return;
            }

            // Hitung luas dan keliling lingkaran
            const area = Math.PI * Math.pow(radius, 2);
            const perimeter = 2 * Math.PI * radius;

            // Tampilkan hasil
            areaResult.textContent = "Luas: " + area.toFixed(2);
            perimeterResult.textContent = "Keliling: " + perimeter.toFixed(2);
        }
    });

    // Set default value untuk bentuk saat halaman pertama kali dimuat
    shapeSelect.dispatchEvent(new Event("change"));
});
