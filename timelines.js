/* eslint space-before-function-paren: 0 */
/* eslint semi: 2 */

var global = window; // https://github.com/marmelab/EventDrops/issues/258

function drawGraph() {
  Date.prototype.diffDays = function(date) {
    const timeDiff = Math.abs(date.getTime() - this.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };

  Date.prototype.addDays = function(days) {
    const dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  Date.prototype.upto = function(endDate) {
    var d;
    var date;
    var dates = [];
    const start = new Date(this.getFullYear(), 1, 1);
    const end = new Date(endDate.getFullYear(), 12, 31);
    var days = start.diffDays(end);
    for (d = 0; d < days; d = d + 365) {
      date = start.addDays(d);
      dates.push(date);
    }
    return dates;
  };

  const concatDates = function() {
    var combined = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      combined = combined.concat(arguments[i]);
    }
    return combined;
  };

  var data = {};
  var ranges = {};
  var companies = {};

  const start = new Date(1985, 1, 1);
  const today = new Date();
  const today1Year = new Date().setFullYear(today.getFullYear() + 1);

  companies.belllabs = new Date(1996, 6, 1).upto(new Date(2002, 2, 1));
  companies.xebeo = new Date(2002, 2, 1).upto(new Date(2005, 7, 1));
  companies.roundbox = new Date(2005, 10, 1).upto(new Date(2008, 10, 1));
  companies.mesh = new Date(2009, 1, 1).upto(new Date(2012, 4, 1));
  companies.konnect2 = new Date(2012, 7, 1).upto(new Date(2013, 12, 1));
  companies.betterpath = new Date(2014, 1, 1).upto(new Date(2016, 1, 1));
  companies.netcore = new Date(2016, 2, 1).upto(new Date(2016, 7, 31));
  companies.emissary = new Date(2016, 8, 1).upto(new Date(2017, 2, 10));
  companies.verne = new Date(2017, 2, 1).upto(new Date(2018, 2, 1));
  companies.target = new Date(2017, 2, 13).upto(new Date(2020, 3, 31));
  companies.needl = new Date(2019, 3, 1).upto(today);
  companies.innovision = new Date(2020, 6, 1).upto(today);

  data.companies = [
    { name: 'Bell Labs ', dates: companies.belllabs },
    { name: 'Xebeo ', dates: companies.xebeo },
    { name: 'Roundbox ', dates: companies.roundbox },
    { name: 'Meshcapital ', dates: companies.mesh },
    { name: 'Konnect2  ', dates: companies.konnect2 },
    { name: 'Betterpath ', dates: companies.betterpath },
    { name: 'Emissary ', dates: companies.emissary },
    { name: 'Target ', dates: companies.target }
  ];

  ranges.basic = new Date(1987, 7, 1).upto(new Date(1990, 1, 1));
  //ranges.fortran = new Date(1990, 7, 1).upto(new Date(1990, 12, 1));
  // ranges.pascal = new Date(1991, 7, 1).upto(new Date(1992, 7, 1));
  ranges.cschool = new Date(1992, 7, 1).upto(new Date(1996, 7, 1));
  ranges.pythonschool = new Date(1992, 5, 1).upto(new Date(1994, 7, 1));

  ranges.c = concatDates(ranges.cschool, companies.xebeo);
  ranges.cp = concatDates(companies.belllabs, companies.roundbox, companies.target);
  ranges.objectivec = new Date(2008, 7, 1).upto(new Date(2010, 7, 1));
  ranges.java = concatDates(companies.mesh, companies.target);
  ranges.scala = concatDates(companies.konnect2, companies.betterpath);
  ranges.php = companies.verne;
  ranges.javascript = concatDates(companies.konnect2, companies.needl);
  ranges.python = concatDates(ranges.pythonschool, companies.xebeo, companies.emissary, companies.target, companies.needl);
  ranges.perl = concatDates(companies.belllabs, companies.roundbox);
  ranges.ruby = companies.mesh;

  data.lang = [
    { name: 'Basic ', dates: ranges.basic },
    { name: 'C/C++', dates: concatDates(ranges.c, ranges.cp) },
    { name: 'Java', dates: ranges.java },
    { name: 'Python', dates: ranges.python },
    { name: 'Perl ', dates: ranges.perl },
    { name: 'Ruby ', dates: ranges.ruby },
    { name: 'Objective-C', dates: ranges.objectivec },
    { name: 'PHP', dates: ranges.php },
    { name: 'Javascript', dates: ranges.javascript },
    { name: 'Scala', dates: ranges.scala }
  ];

  ranges.bash = new Date(1991, 7, 1).upto(today);
  ranges.ansible = concatDates(companies.konnect2, companies.betterpath, companies.verne, companies.target);
  ranges.helm = concatDates(companies.innovision);
  ranges.docker = concatDates(companies.betterpath, companies.verne, companies.emissary, companies.target, companies.needl, companies.innovision);
  ranges.k8s = concatDates(companies.target, companies.innovision);
  ranges.gcp = concatDates(companies.emissary);
  ranges.aws = concatDates(companies.konnect2, companies.needl, companies.innovision);

  data.script = [
    { name: 'Ansible ', dates: ranges.ansible },
    { name: 'Bash ', dates: ranges.bash },
    { name: 'Docker ', dates: ranges.docker },
    { name: 'Kubernetes ', dates: ranges.k8s },
    { name: 'Helm ', dates: ranges.helm },
    { name: 'Google GCP', dates: ranges.gcp },
    { name: 'AWS ', dates: ranges.aws }
  ];

  ranges.sablime = companies.belllabs;
  ranges.perforce = companies.xebeo;
  ranges.bugzilla = concatDates(companies.xebeo, companies.roundbox);
  ranges.github = concatDates(companies.mesh, companies.konnect2, companies.betterpath, companies.emissary, companies.needl);
  ranges.assembla = concatDates(companies.konnect2, companies.betterpath);
  ranges.asana = companies.betterpath;
  ranges.trello = concatDates(companies.betterpath, companies.netcore, companies.target, companies.innovision, companies.needl);
  ranges.jira = concatDates(companies.emissary, companies.target);
  ranges.basecamp = concatDates(companies.verne);

  data.tools = [
    { name: 'Asana ', dates: ranges.asana },
    { name: 'Assembla ', dates: ranges.assembla },
    { name: 'Bugzilla ', dates: ranges.bugzilla },
    { name: 'GitHub ', dates: ranges.github },
    { name: 'Jira ', dates: ranges.jira },
    { name: 'Basecamp ', dates: ranges.basecamp },
    { name: 'Perforce ', dates: ranges.perforce },
    { name: 'Sablime ', dates: ranges.sablime },
    { name: 'Trello ', dates: ranges.trello }
  ];

  ranges.spectrum = new Date(1987, 7, 1).upto(new Date(1990, 1, 1));
  ranges.systemV = new Date(1990, 7, 1).upto(new Date(1996, 1, 1));
  ranges.solaris = new Date(1996, 7, 1).upto(new Date(2002, 12, 1));
  ranges.freebsd = new Date(2002, 7, 1).upto(new Date(2005, 12, 1));
  ranges.linux = new Date(1994, 7, 1).upto(today);
  ranges.osx = new Date(2002, 7, 1).upto(today);
  ranges.ios = new Date(2008, 7, 1).upto(new Date(2010, 7, 1));
  ranges.android = new Date(2016, 1, 1).upto(new Date(2016, 6, 1));

  data.os = [
    { name: 'Android ', dates: ranges.android },
    { name: 'FreeBSD ', dates: ranges.freebsd },
    { name: 'IOS ', dates: ranges.ios },
    { name: 'Linux ', dates: ranges.linux },
    { name: 'OS X ', dates: ranges.osx },
    { name: 'Solaris ', dates: ranges.solaris },
    { name: 'Unix SVR ', dates: ranges.systemV },
    { name: 'ZX Sinclair ', dates: ranges.spectrum }
  ];

  const content = document.getElementById('content');

  const getChart = function() {
    return eventDrops({
      d3,
      drop: {
        date: d => new Date(d.date)
      },
      zoom: false,
      range: {
        start: start,
        end: today1Year
      },
      axis: {
        formats: {
          year: '%y'
        }
      },
      bound: {
        format: d3.timeFormat('%Y')
      },
      label: {
        text: d => `${d.name} (${d.data.length}y)`
      }
    });
  };

  const setData = function(name, data) {
    const chartData = data.map(d => ({
      name: d.name,
      data: d.dates.map(date => ({ date: date }))
    }));
    const chart = getChart();
    d3.select(content)
      .append('div')
      .append('h2')
      .html(name)
      .append('div')
      .attr('id', name);

    const div = document.getElementById(name);
    d3.select(div)
      .data([chartData])
      .call(chart);
  }

  // setData("Companies", data.companies);
  setData('Operating Systems', data.os);
  setData('Programming Languages', data.lang);
  setData('DevOps', data.script);
  setData('Product', data.tools);
  // d3.select(content).selectAll('svg g.extremum').remove();
  // d3.select(content).selectAll('svg').attr('width', 800);
  // d3.select(content).selectAll('svg').attr('transform', 'translate(-90, 0)');
   d3.select(content).selectAll('svg g.viewport').attr('transform', 'translate(-50, 20)');
  // d3.select(content).selectAll('svg g.axes').attr('transform', 'translate(120, 55)');
  // d3.select(content).selectAll('svg g.drops-container').attr('clip-path', '');
  // d3.select(content).selectAll('svg g.drops-container').attr('transform', 'translate(-90, 0)');
}

window.onload = drawGraph;
