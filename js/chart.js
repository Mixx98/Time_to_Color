// 차트
anychart.onDocumentReady(async () => {
  const fetchData = await fetch("./json/data.json").then((res) => res.json());
  const rows = fetchData.rows;

  const data = {
    header: ["#", "point"],
    rows,
  };

  const chart = anychart.radar();
  chart.defaultSeriesType("area");
  chart.palette(["blue"]);
  chart.yScale().minimum(0).maximum(100).ticks({ interval: 0 });

  chart.xGrid().stroke({
    color: "green",
    thickness: 1,
    dash: "10 5",
  });

  chart.yGrid().stroke({
    color: "red",
    thickness: 0,
    dash: "10 5",
  });

  chart.data(data);
  chart.container("container");
  chart.draw();
  const chartBackground = document.querySelector(
    "path[data-ac-wrapper-id='11']"
  );

  chartBackground.style.fill = "rgba(255, 255, 255, 0)";

  //* anyChart 공식 홈페이지 링크 dom 제거
  const hideAdLink = () => {
    document.querySelector("div.anychart-credits").remove();
  };

  //* Y축 눈금 및 레전드 제거
  const hideYAxis = () => {
    const pathYAxisElems = document.querySelectorAll("path");
    const gYAxisElems = document.querySelectorAll("g");
    const removePathYAxisIdList = ["33", "34"];
    pathYAxisElems.forEach((elem) => {
      if (
        removePathYAxisIdList.includes(elem.getAttribute("data-ac-wrapper-id"))
      ) {
        elem.remove();
      }
    });
    gYAxisElems.forEach((elem) => {
      if (elem.getAttribute("data-ac-wrapper-id") === "36") {
        elem.remove();
      }
    });
  };
  hideAdLink();
  hideYAxis();
});
