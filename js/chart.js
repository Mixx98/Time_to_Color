const chartContainer = document.querySelector("#container");
const svgNamespace = "http://www.w3.org/2000/svg";

function addChartElement(parent, name, attributes, text) {
  const element = document.createElementNS(svgNamespace, name);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  if (text) element.textContent = text;
  parent.append(element);
  return element;
}

async function drawSkills() {
  try {
    const response = await fetch("./json/data.json");
    if (!response.ok) throw new Error("Skills data could not be loaded");
    const { rows } = await response.json();
    const svg = addChartElement(chartContainer, "svg", {
      viewBox: "0 0 420 340",
      "aria-hidden": "true",
    });

    function point(index, radius) {
      const angle = index * 2 * Math.PI / rows.length - Math.PI / 2;
      return [210 + radius * Math.cos(angle), 170 + radius * Math.sin(angle)];
    }

    for (const radius of [32, 64, 96, 128]) {
      addChartElement(svg, "polygon", {
        points: rows.map((_, index) => point(index, radius).join(",")).join(" "),
        fill: "none",
        stroke: "#ddd3e7",
      });
    }

    rows.forEach(([label], index) => {
      const [x, y] = point(index, 128);
      const [labelX, labelY] = point(index, 151);
      addChartElement(svg, "line", { x1: 210, y1: 170, x2: x, y2: y, stroke: "#ddd3e7" });
      addChartElement(svg, "text", {
        x: labelX,
        y: labelY,
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        fill: "#35243e",
        "font-size": 16,
      }, label);
    });

    addChartElement(svg, "polygon", {
      points: rows.map(([, score], index) => point(index, score * 1.28).join(",")).join(" "),
      fill: "#6b38cc",
      "fill-opacity": ".3",
      stroke: "#6b38cc",
      "stroke-width": 2,
    });
  } catch {
    chartContainer.textContent = "HTML · CSS · JavaScript · C/C++ · Python · Java · R";
  }
}

drawSkills();
