// Pantone Colors of the Year from 2000 to 2024
const pantoneColors = [
    { year: 2024, colorName: "Radiant Red", hex: "#E74C3C" },
    { year: 2023, colorName: "Viva Magenta", hex: "#BB2649" },
    { year: 2022, colorName: "Very Peri", hex: "#6667AB" },
    { year: 2021, colorName: "Illuminating & Ultimate Gray", hex: "#F5DF4D, #939597" },
    { year: 2020, colorName: "Classic Blue", hex: "#34568B" },
    { year: 2019, colorName: "Living Coral", hex: "#FF6F61" },
    { year: 2018, colorName: "Ultra Violet", hex: "#5F4B8B" },
    { year: 2017, colorName: "Greenery", hex: "#88B04B" },
    { year: 2016, colorName: "Rose Quartz & Serenity", hex: "#F7CAC9, #92A8D1" },
    { year: 2015, colorName: "Marsala", hex: "#964F4C" },
    { year: 2014, colorName: "Radiant Orchid", hex: "#B163A3" },
    { year: 2013, colorName: "Emerald", hex: "#009473" },
    { year: 2012, colorName: "Tangerine Tango", hex: "#DD4124" },
    { year: 2011, colorName: "Honeysuckle", hex: "#D94F70" },
    { year: 2010, colorName: "Turquoise", hex: "#45B5AA" },
    { year: 2009, colorName: "Mimosa", hex: "#F0C05A" },
    { year: 2008, colorName: "Blue Iris", hex: "#5A5B9F" },
    { year: 2007, colorName: "Chili Pepper", hex: "#9B1B30" },
    { year: 2006, colorName: "Sand Dollar", hex: "#DECDBE" },
    { year: 2005, colorName: "Blue Turquoise", hex: "#53B0AE" },
    { year: 2004, colorName: "Tigerlily", hex: "#E2583E" },
    { year: 2003, colorName: "Aqua Sky", hex: "#7BC4C4" },
    { year: 2002, colorName: "True Red", hex: "#BF1932" },
    { year: 2001, colorName: "Fuchsia Rose", hex: "#C74375" },
    { year: 2000, colorName: "Cerulean", hex: "#98B2D1" }
];

// Generate the grid of colors
const colorGridContainer = document.getElementById("colorGrid");

pantoneColors.forEach(color => {
    const colorItem = document.createElement("div");
    colorItem.classList.add("color-item");

    const colorYear = document.createElement("div");
    colorYear.classList.add("color-year");
    colorYear.textContent = color.year;

    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.background = color.hex.includes(",") ? `linear-gradient(90deg, ${color.hex})` : color.hex;

    const colorName = document.createElement("div");
    colorName.classList.add("color-name");
    colorName.textContent = color.colorName;

    colorItem.appendChild(colorYear);
    colorItem.appendChild(colorBox);
    colorItem.appendChild(colorName);
    colorGridContainer.appendChild(colorItem);
});