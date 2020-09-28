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

  companies.belllabs = new Date(1996, 7, 1).upto(new Date(2002, 7, 1));
  companies.xebeo = new Date(2002, 7, 1).upto(new Date(2005, 7, 1));
  companies.roundbox = new Date(2005, 7, 1).upto(new Date(2008, 7, 1));
  companies.mesh = new Date(2008, 7, 1).upto(new Date(2012, 7, 1));
  companies.konnect2 = new Date(2012, 7, 1).upto(new Date(2014, 1, 1));
  companies.betterpath = new Date(2014, 1, 1).upto(new Date(2016, 31, 1));
  companies.emissary = new Date(2016, 8, 1).upto(new Date(2017, 2, 10));
  companies.netcore = new Date(2016, 2, 1).upto(new Date(2016, 7, 31));
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

  ranges.lang = {};
  ranges.lang.basic = new Date(1987, 7, 1).upto(new Date(1990, 1, 1));
  // ranges.lang.fortran = new Date(1990, 7, 1).upto(new Date(1990, 12, 1));
  // ranges.lang.pascal = new Date(1991, 7, 1).upto(new Date(1992, 7, 1));
  ranges.lang.cschool = new Date(1992, 7, 1).upto(new Date(1996, 7, 1));
  ranges.lang.pythonschool = new Date(1992, 5, 1).upto(new Date(1994, 7, 1));

  ranges.lang.c = concatDates(ranges.lang.cschool, companies.xebeo);
  ranges.lang.cp = concatDates(companies.belllabs, companies.roundbox, companies.target);
  ranges.lang.co = new Date(2008, 7, 1).upto(new Date(2010, 7, 1));
  ranges.lang.java = concatDates(companies.mesh, companies.target);
  ranges.lang.scala = concatDates(companies.konnect2, companies.betterpath);
  ranges.lang.php = companies.verne;
  ranges.lang.javascript = concatDates(companies.konnect2, companies.needl);
  ranges.lang.python = concatDates(ranges.lang.pythonschool, companies.xebeo, companies.emissary, companies.target, companies.needl);
  data.lang = [
    { name: 'Basic ', dates: ranges.lang.basic },
    { name: 'C/C++', dates: concatDates(ranges.lang.c, ranges.lang.cp) },
    { name: 'Java', dates: ranges.lang.java },
    { name: 'Python', dates: ranges.lang.python },
    { name: 'Objective-C', dates: ranges.lang.co },
    { name: 'php', dates: ranges.lang.php },
    { name: 'Javascript', dates: ranges.lang.javascript },
    { name: 'Scala', dates: ranges.lang.scala }
  ];

  ranges.script = {};
  ranges.script.bash = new Date(1991, 7, 1).upto(today);

  ranges.script.perl = concatDates(companies.belllabs, companies.roundbox);
  ranges.script.ruby = companies.mesh;
  ranges.script.ansible = concatDates(companies.konnect2, companies.betterpath, companies.verne, companies.target);
  ranges.script.docker = concatDates(companies.betterpath, companies.verne, companies.emissary, companies.target, companies.needl);
  ranges.script.k8s = concatDates(companies.target, companies.innovision);
  ranges.script.gcp = concatDates(companies.emissary);
  ranges.script.aws = concatDates(companies.konnect2, companies.needl, companies.innovision);
  data.script = [
    { name: 'Ansible ', dates: ranges.script.ansible },
    { name: 'Bash ', dates: ranges.script.bash },
    { name: 'Perl ', dates: ranges.script.perl },
    { name: 'Ruby ', dates: ranges.script.ruby },
    { name: 'Docker ', dates: ranges.script.docker },
    { name: 'Kubernetes ', dates: ranges.script.k8s },
    { name: 'Google GCP', dates: ranges.script.gcp },
    { name: 'AWS ', dates: ranges.script.aws }
  ];

  ranges.tools = {};
  ranges.tools.sablime = companies.belllabs;
  ranges.tools.perforce = companies.xebeo;
  ranges.tools.bugzilla = concatDates(companies.xebeo, companies.roundbox);
  ranges.tools.github = concatDates(companies.mesh, companies.konnect2, companies.betterpath, companies.emissary, companies.needl);
  ranges.tools.assembla = concatDates(companies.konnect2, companies.betterpath);
  ranges.tools.asana = companies.betterpath;
  ranges.tools.trello = concatDates(companies.betterpath, companies.netcore, companies.target, companies.innovision, companies.needl);
  ranges.tools.jira = concatDates(companies.emissary, companies.target);
  ranges.tools.basecamp = concatDates(companies.verne);
  data.tools = [
    { name: 'Asana ', dates: ranges.tools.asana },
    { name: 'Assembla ', dates: ranges.tools.assembla },
    { name: 'Bugzilla ', dates: ranges.tools.bugzilla },
    { name: 'GitHub ', dates: ranges.tools.github },
    { name: 'Jira ', dates: ranges.tools.jira },
    { name: 'Basecamp ', dates: ranges.tools.basecamp },
    { name: 'Perforce ', dates: ranges.tools.perforce },
    { name: 'Sablime ', dates: ranges.tools.sablime },
    { name: 'Trello ', dates: ranges.tools.trello }
  ];

  ranges.os = {};
  ranges.os.spectrum = new Date(1987, 7, 1).upto(new Date(1990, 1, 1));
  ranges.os.systemV = new Date(1990, 7, 1).upto(new Date(1996, 1, 1));
  ranges.os.solaris = new Date(1996, 7, 1).upto(new Date(2002, 12, 1));
  ranges.os.freebsd = new Date(2002, 7, 1).upto(new Date(2005, 12, 1));
  ranges.os.linux = new Date(1994, 7, 1).upto(today);
  ranges.os.osx = new Date(2002, 7, 1).upto(today);
  ranges.os.ios = new Date(2008, 7, 1).upto(new Date(2010, 7, 1));
  ranges.os.android = new Date(2016, 1, 1).upto(new Date(2016, 6, 1));
  data.os = [
    { name: 'Android ', dates: ranges.os.android },
    { name: 'FreeBSD ', dates: ranges.os.freebsd },
    { name: 'IOS ', dates: ranges.os.ios },
    { name: 'Linux ', dates: ranges.os.linux },
    { name: 'OS X ', dates: ranges.os.osx },
    { name: 'Solaris ', dates: ranges.os.solaris },
    { name: 'Unix SVR ', dates: ranges.os.systemV },
    { name: 'ZX Sinclair ', dates: ranges.os.spectrum }
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
