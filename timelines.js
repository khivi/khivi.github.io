function drawGraph() {
  Date.prototype.diffDays = function(date) { 
      var timeDiff = Math.abs(date.getTime() - this.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
  }
  Date.prototype.addDays = function(days)
  {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
  }
  Date.prototype.upto= function(endDate) {
      var d;
      var date;
      var dates = [];
      var days = this.diffDays(endDate);
      for (d = 0; d < days; d = d + 30) { 
          date = this.addDays(d);
          dates.push(date);
      }
      return dates;
  } 
  var data = {};
  var ranges = {};
  ranges.lang = {};
  ranges.lang.basic = (new Date(1987, 7, 1)).upto(new Date(1990, 1, 1));
  ranges.lang.fortran = (new Date(1990, 7, 1)).upto(new Date(1990, 12, 1));
  ranges.lang.pascal = (new Date(1991, 7, 1)).upto(new Date(1992, 7, 1));
  ranges.lang.c1 = (new Date(1992, 7, 1)).upto(new Date(1996, 7, 1));
  ranges.lang.c2 = (new Date(2002, 7, 1)).upto(new Date(2005, 7, 1));
  ranges.lang.c = ranges.lang.c1.concat(ranges.lang.c2)
  ranges.lang.cp1 = (new Date(1996, 7, 1)).upto(new Date(2002, 7, 1));
  ranges.lang.cp2 = (new Date(2005, 7, 1)).upto(new Date(2008, 7, 1));
  ranges.lang.cp = ranges.lang.cp1.concat(ranges.lang.cp2)
  ranges.lang.co = (new Date(2008, 7, 1)).upto(new Date(2010, 7, 1));
  ranges.lang.java = (new Date(2008, 7, 1)).upto(new Date(2012, 7, 1));
  ranges.lang.scala = (new Date(2012, 7, 1)).upto(new Date());
  data.lang = [
      { name: "Basic ", dates: ranges.lang.basic },
      { name: "Fortran ", dates: ranges.lang.fortran },
      { name: "Pascal ", dates: ranges.lang.pascal },
      { name: "C ", dates: ranges.lang.c },
      { name: "C++ ", dates: ranges.lang.cp },
      { name: "Objective-C ", dates: ranges.lang.co },
      { name: "Java ", dates: ranges.lang.java },
      { name: "Scala ", dates: ranges.lang.scala }
  ];

  ranges.os = {};
  ranges.os.spectrum = (new Date(1987, 7, 1)).upto(new Date(1990, 1, 1));
  ranges.os.systemV = (new Date(1990, 7, 1)).upto(new Date(1996, 1, 1));
  ranges.os.solaris = (new Date(1996, 7, 1)).upto(new Date(2002, 12, 1));
  ranges.os.freebsd = (new Date(2002, 7, 1)).upto(new Date(2005, 12, 1));
  ranges.os.linux = (new Date(1994, 7, 1)).upto(new Date());
  ranges.os.osx = (new Date(2002, 7, 1)).upto(new Date());
  data.os = [
      { name: "ZX Spectrum ", dates: ranges.os.spectrum },
      { name: "Unix System V ", dates: ranges.os.systemV },
      { name: "Linux ", dates: ranges.os.linux },
      { name: "Solaris ", dates: ranges.os.solaris },
      { name: "FreeBSD ", dates: ranges.os.freebsd },
      { name: "OS X ", dates: ranges.os.osx }
  ];

  var body = document.getElementById('content');
  var color = d3.scale.category20();

  var getChart = function(number) { 
      var chart = d3.chart.eventDrops()
      .width(700)
      .eventLineColor(function(datum, index) { 
          return color(index);
      })
      .start(new Date(1971,6,1));
      return chart;
  }

  var setData = function(name, number, data) { 
      var chart = getChart(number);
      var element = d3.select(body).append('div');
      element.append('h2').html(name);
      element = element.append('div').datum(data);
      chart(element);
  }

  var sideBar = document.getElementById("sidebarContainer");
  sideBar.parentNode.removeChild(sideBar);
  setData("Programming Languages", 1, data.lang);
  setData("Operating Systems", 12,  data.os);
}

window.onload=drawGraph;

