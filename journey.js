function drawGraph() {
  // Themes begin
  am4core.useTheme(am4themes_material);
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
  chart.curveContainer.padding(100, 20, 50, 20);
  chart.levelCount = 3;
  chart.yAxisRadius = am4core.percent(20);
  chart.yAxisInnerRadius = am4core.percent(2);
  chart.maskBullets = false;

  var colorSet = new am4core.ColorSet();

  chart.dateFormatter.inputDateFormat = "yyyy-MM";
  chart.dateFormatter.dateFormat = "yyyy-MM";

  chart.data = [
  {
      "category": "",
      "start": "1996-06",
      "end": "2002-02",
      "text": "Bell Labs\nHigh Performance Database System",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2002-02",
      "end": "2005-07",
      "text": "Xebeo\nNext-Gen Router",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2005-10",
      "end": "2008-10",
      "text": "Roundbox\nMobile TV Broadcasting",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2009-01",
      "end": "2012-04",
      "text": "Mesh Capital\nHigh-Frequency Trading",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2012-06",
      "end": "2013-12",
      "text": "Konnect2\nTrading for Credit-Markets",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2014-01",
      "end": "2016-01",
      "text": "Betterpath\nHealthcare Data Access",
      "textDisabled": false,
      "color": colorSet.next(),
  },
    /*
  {
      "category": "",
      "start": "2016-02",
      "end": "2016-07",
      "text": "Netcore\nConsulting: Product Culture",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  {
      "category": "",
      "start": "2016-08",
      "end": "2017-02",
      "text": "Emissary",
      "textDisabled": false,
      "color": colorSet.next(),
  },
    */
  {
      "category": "",
      "start": "2017-02",
      "end": "2020-04",
      "text": "Target\nE-commerce Search ",
      "textDisabled": false,
      "color": colorSet.next(),
  },
  ];

  chart.fontSize = 10;
  chart.tooltipContainer.fontSize = 10;

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.labels.template.paddingRight = 25;
  categoryAxis.renderer.minGridDistance = 10;

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 70;
  dateAxis.baseInterval = { count: 5, timeUnit: "year" };
  //dateAxis.renderer.tooltipLocation = 0;
  //dateAxis.hideTooltipWhileZooming = true;
  dateAxis.cursorTooltipEnabled = false;
  dateAxis.renderer.line.strokeDasharray = "1,4";
  dateAxis.renderer.line.strokeOpacity = 0.5;

  //dateAxis.tooltip.background.fillOpacity = 0.2;
  //dateAxis.tooltip.background.cornerRadius = 5;
  //dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  //dateAxis.tooltip.label.paddingTop = 7;

  dateAxis.endLocation = 0.5;
  dateAxis.startLocation = 0;

  var labelTemplate = dateAxis.renderer.labels.template;
  labelTemplate.verticalCenter = "middle";
  labelTemplate.fillOpacity = 0.4;
  labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
  labelTemplate.background.fillOpacity = 1;
  labelTemplate.padding(7, 7, 7, 7);

  var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());

  series.dataFields.openDateX = "start";
  series.dataFields.dateX = "end";
  series.dataFields.categoryY = "category";
  series.baseAxis = categoryAxis;

  series.columns.template.height = am4core.percent(15);
  //series.columns.template.propertyFields.fill = "black";
  //series.columns.template.propertyFields.stroke = "black";
  series.columns.template.strokeOpacity = 0;
  series.columns.template.fillOpacity = 0.6;

  var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
  imageBullet1.locationX = 1;
  imageBullet1.propertyFields.stroke = "color";
  imageBullet1.background.propertyFields.fill = "color";
  imageBullet1.image = new am4core.Image();
  imageBullet1.image.propertyFields.href = "icon";
  imageBullet1.image.scale = 0.5;
  imageBullet1.circle.radius = am4core.percent(100);
  imageBullet1.dy = -5;

  var textBullet = series.bullets.push(new am4charts.LabelBullet());
  textBullet.label.propertyFields.fill = "color";
  textBullet.label.propertyFields.text = "text";
  textBullet.disabled = true;
  textBullet.propertyFields.disabled = "textDisabled";
  textBullet.label.strokeOpacity = 0;
  textBullet.locationX = 1;
  textBullet.dy = - 100;
  textBullet.label.textAlign = "middle";

  /*
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.align = "center"
  chart.scrollbarX.width = am4core.percent(75);
  chart.scrollbarX.opacity = 0.5;
  */

  var cursor = new am4plugins_timeline.CurveCursor();
  chart.cursor = cursor;
  cursor.xAxis = dateAxis;
  cursor.yAxis = categoryAxis;
  cursor.lineY.disabled = true;
  cursor.lineX.strokeDasharray = "1,4";
  cursor.lineX.strokeOpacity = 1;

  dateAxis.renderer.tooltipLocation2 = 0;
  categoryAxis.cursorTooltipEnabled = false;

  /*
  var label = chart.createChild(am4core.Label);
  label.text = "Another unlucky day in the office."
  label.isMeasured = false;
  label.y = am4core.percent(40);
  label.x = am4core.percent(50);
  label.horizontalCenter = "middle";
  label.fontSize = 20;
  */
}
window.onload = drawGraph;
