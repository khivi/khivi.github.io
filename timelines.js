function drawGraph() {
  Date.prototype.diffDays = function(date) { 
      const timeDiff = Math.abs(date.getTime() - this.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
  }
  Date.prototype.addDays = function(days)
  {
      const dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
  }
  Date.prototype.upto = function(endDate) {
      var d;
      var date;
      var dates = [];
      var start = new Date(this.getFullYear(), 1, 1);
      var end = new Date(endDate.getFullYear(), 12, 31);
      var days = start.diffDays(end);
      for (d = 0; d < days; d = d + 365) { 
          date = start.addDays(d);
          dates.push(date);
      }
      return dates;
  } 
  var data = {};
  var ranges = {};
  var companies = {};

  companies.belllabs = (new Date(1996, 7, 1)).upto(new Date(2002, 7, 1));
  companies.xebeo = (new Date(2002, 7, 1)).upto(new Date(2005, 7, 1));
  companies.roundbox = (new Date(2005, 7, 1)).upto(new Date(2008, 7, 1));
  companies.mesh = (new Date(2008, 7, 1)).upto(new Date(2012, 7, 1));
  companies.konnect2 = (new Date(2012, 7, 1)).upto(new Date(2014, 1, 1));
  companies.betterpath = (new Date(2014, 1, 1)).upto(new Date(2016, 2, 1));
  data.companies = [
      { name: "Bell Labs ", dates: companies.belllabs },
      { name: "Xebeo ", dates: companies.xebeo },
      { name: "Roundbox ", dates: companies.roundbox },
      { name: "Meshcapital ", dates: companies.mesh },
      { name: "Konnect2  ", dates: companies.konnect2 },
      { name: "Betterpath ", dates: companies.betterpath }
  ];

  const concatDates = function() {
      var combined = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        combined = combined.concat(arguments[i]);
      }
      return combined;
  }

  ranges.lang = {};
  ranges.lang.basic = (new Date(1987, 7, 1)).upto(new Date(1990, 1, 1));
  ranges.lang.fortran = (new Date(1990, 7, 1)).upto(new Date(1990, 12, 1));
  ranges.lang.pascal = (new Date(1991, 7, 1)).upto(new Date(1992, 7, 1));
  ranges.lang.c1 = (new Date(1992, 7, 1)).upto(new Date(1996, 7, 1));
  ranges.lang.c = concatDates(ranges.lang.c1, companies.xebeo);
  ranges.lang.cp = concatDates(companies.belllabs, companies.roundbox);
  ranges.lang.co = (new Date(2008, 7, 1)).upto(new Date(2010, 7, 1));
  ranges.lang.java = companies.mesh;
  ranges.lang.scala = concatDates(companies.konnect2, companies.betterpath);
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

  ranges.script = {};
  ranges.script.bash = (new Date(1991, 7, 1)).upto(new Date());
  ranges.script.python1 = (new Date(1992, 5, 1)).upto(new Date(1994, 7, 1));
  ranges.script.python2 = companies.xebeo;
  ranges.script.python3 = (new Date(2016, 1, 1)).upto(new Date());
  ranges.script.python = concatDates(ranges.script.python1, ranges.script.python2, ranges.script.python3);
  ranges.script.perl = concatDates(companies.belllabs,  companies.roundbox);
  ranges.script.ruby = companies.mesh;
  ranges.script.ansible = concatDates(companies.konnect2,  companies.betterpath);
  data.script = [
      { name: "Bash ", dates: ranges.script.bash },
      { name: "Python ", dates: ranges.script.python },
      { name: "Perl ", dates: ranges.script.perl },
      { name: "Ruby ", dates: ranges.script.ruby },
      { name: "Ansible ", dates: ranges.script.ansible }
  ];

  ranges.tools = {};
  ranges.tools.sablime = companies.belllabs;
  ranges.tools.perforce = companies.xebeo;
  ranges.tools.bugzilla = concatDates(companies.xebeo, companies.roundbox);
  ranges.tools.git = concatDates(companies.mesh, companies.konnect2, companies.betterpath);
  ranges.tools.assembla = concatDates(companies.konnect2, companies.betterpath);
  ranges.tools.asana = companies.betterpath;
  data.tools = [
      { name: "Sablime ", dates: ranges.tools.sablime },
      { name: "Perforce ", dates: ranges.tools.perforce },
      { name: "Bugzilla ", dates: ranges.tools.bugzilla },
      { name: "Git ", dates: ranges.tools.git },
      { name: "Assembla ", dates: ranges.tools.assembla },
      { name: "Asana ", dates: ranges.tools.asana }
  ];

  ranges.os = {};
  ranges.os.spectrum = (new Date(1987, 7, 1)).upto(new Date(1990, 1, 1));
  ranges.os.systemV = (new Date(1990, 7, 1)).upto(new Date(1996, 1, 1));
  ranges.os.solaris = (new Date(1996, 7, 1)).upto(new Date(2002, 12, 1));
  ranges.os.freebsd = (new Date(2002, 7, 1)).upto(new Date(2005, 12, 1));
  ranges.os.linux = (new Date(1994, 7, 1)).upto(new Date());
  ranges.os.osx = (new Date(2002, 7, 1)).upto(new Date());
  ranges.os.ios = (new Date(2008, 7, 1)).upto(new Date(2010, 7, 1));
  ranges.os.android = (new Date(2016, 1, 1)).upto(new Date(2016, 6, 1));
  data.os = [
      { name: "ZX Spectrum ", dates: ranges.os.spectrum },
      { name: "Unix System V ", dates: ranges.os.systemV },
      { name: "Linux ", dates: ranges.os.linux },
      { name: "Solaris ", dates: ranges.os.solaris },
      { name: "FreeBSD ", dates: ranges.os.freebsd },
      { name: "OS X ", dates: ranges.os.osx },
      { name: "IOS ", dates: ranges.os.ios },
      { name: "Android ", dates: ranges.os.android },
  ];

  const content = document.getElementById('content');

  const getChart = function() { 
      const color = d3.scale.category20();
      const chart = d3.chart.eventDrops()
      .width(1000)
      .eventLineColor(function(datum, index) { 
          return color(index);
      })
      .start(new Date(1985,1,1))
      .end(new Date(2020,1,1));
      return chart;
  }

  const setData = function(name, data) { 
      const chart = getChart();
      var element = d3.select(content).append('div');
      element.append('h2').html(name);
      element = element.append('div').datum(data);
      chart(element);
  }

  //setData("Companies", data.companies);
  setData("Operating Systems", data.os);
  setData("Programming Languages", data.lang);
  setData("Scripting Tools", data.script);
  setData("Process Tools", data.tools);
  d3.select(content).selectAll('svg g.extremum').remove();
  d3.select(content).selectAll('svg').attr('width', 800);
  d3.select(content).selectAll('svg').attr('transform', 'translate(-90, 0)');
  d3.select(content).selectAll('svg g.drops-container').attr('clip-path', '');
}

window.onload=drawGraph;

