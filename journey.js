am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 4;
chart.yAxisRadius = am4core.percent(25);
chart.yAxisInnerRadius = am4core.percent(-25);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();
//colorSet.saturation = 0.5;


const today = (new Date()).toISOString().split('T')[0].slice(0,7);


  chart.data = [
  {
      "category": "Storage",
      "start": "1996-06",
      "end": "2002-02",
      "name": "Bell Labs",
      "color": colorSet.getIndex(5),
  },
  {
      "category": "Telecom",
      "start": "2002-02",
      "end": "2005-07",
      "name": "Xebeo",
      "color": colorSet.getIndex(7),
  },
  {
      "category": "Telecom",
      "start": "2005-10",
      "end": "2008-10",
      "name": "Roundbox",
      "color": colorSet.getIndex(7),
  },
  {
      "category": "FinTech",
      "start": "2009-01",
      "end": "2012-04",
      "name": "Mesh Capital",
      "color": colorSet.getIndex(9),
  },
  {
      "category": "FinTech",
      "start": "2012-06",
      "end": "2013-12",
      "name": "Konnect2",
      "color": colorSet.getIndex(9),
  },
  {
      "category": "Healthcare",
      "start": "2014-01",
      "end": "2016-01",
      "name": "Betterpath",
      "color": colorSet.getIndex(11),
  },
    /*
  {
      "category": "Netcore",
      "start": "2016-02",
      "end": "2016-07",
      "name": "Netcore",
      "color": colorSet.next(),
  },
  {
      "category": "Emissary",
      "start": "2016-08",
      "end": "2017-02",
      "name": "Emissary",
      "color": colorSet.next(),
  },
    */
  {
      "category": "Retail",
      "start": "2017-02",
      "end": "2020-04",
      "name": "Target",
      "color": colorSet.getIndex(13),
  },
  {
      "category": "Advisor",
      "start": "2016-01",
      "end": today,
      "name": "Advisor",
      "color": colorSet.getIndex(15),
  },
  ];

chart.dateFormatter.dateFormat = "yyyy-MM";
chart.dateFormatter.inputDateFormat = "yyyy-MM";
chart.fontSize = 11;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
//categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.labels.template.propertyFields.fill = "color";
categoryAxis.renderer.labels.template.propertyFields.stroke = "color";
categoryAxis.renderer.labels.template.strokeOpacity = 0;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 60;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 1, timeUnit: "month" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.6;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
dateAxis.tooltip.label.paddingTop = 7;

var labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.7;
labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);
  

var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(20);
series.columns.template.tooltipText = "{name}[/]";
series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color"; 
series.columns.template.propertyFields.stroke = "color";
series.columns.template.strokeOpacity = 0;

/*
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 3;
bullet.circle.strokeOpacity = 0;
bullet.propertyFields.fill = "color";
bullet.locationX = 0;


var bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.circle.radius = 3;
bullet2.circle.strokeOpacity = 0;
bullet2.propertyFields.fill = "color";
bullet2.locationX = 1;
*/


/*
var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "image1";

var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet2.disabled = true;
imageBullet2.propertyFields.disabled = "disabled2";
imageBullet2.locationX = 0;
imageBullet2.circle.radius = 20;
imageBullet2.propertyFields.stroke = "color";
imageBullet2.background.propertyFields.fill = "color";
imageBullet2.image = new am4core.Image();
imageBullet2.image.propertyFields.href = "image2";
*/


var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = "eventDate";
eventSeries.dataFields.categoryY = "category";
eventSeries.data = [
    { category: "Storage", eventDate: "1999-06", letter: "Award", description: "Bell Labs President's Silver Award" },
    { category: "Retail", eventDate: "2019-09", letter: "Award", description: "Chief Data Officer Award" },
  { category: "Advisor", eventDate: "2015-10", letter: "Author", description: "Culture Seeds: Process, People and Companies" },
  { category: "FinTech", eventDate: "2009-01", letter: "CTO", description: "" },
  //{ category: "Retail", eventDate: "2018-03", letter: "Director", description: "" },
  { category: "Retail", eventDate: "2017-03", letter: "Sr. Director", description: "" },
  { category: "Healthcare", eventDate: "2014-01", letter: "CTO", description: "" },
  { category: "Telecom", eventDate: "2006-01", letter: "Manager", description: "" },
  { category: "Telecom", eventDate: "2017-05", letter: "Patent", description: "Location specific event broadcasting " },
  { category: "Telecom", eventDate: "2014-04", letter: "Patent", description: "Reliable event broadcaster with multiplexing and bandwidth control functions " },
    ];
eventSeries.strokeOpacity = 0;


var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
flagBullet.label.propertyFields.text = "letter";
flagBullet.locationX = 0;
flagBullet.tooltipText = "{description}";

/*
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center"
chart.scrollbarX.width = am4core.percent(85);
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
dateAxis.cursorTooltipEnabled = false;


});
