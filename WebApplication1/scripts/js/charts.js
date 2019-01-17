/* global console: false, $: false, Modernizr: false */

$(document).ready(function () {

    // Chart characteristics
    var chartWidth = $('chart-cont');

    // Chart data-objects
    var subVsCou = {
            chartTitle: 'Subscription vs Coupons Burned',
            subscription: {
                chartSetting: {
                    title: 'Total Subscription',
                    color: '#73cdd7'
                },
                data: [
                    {
						"date": "2015-06-01",
						"value": 5458
					},
					{
						"date": "2015-07-01",
						"value": 52603
					}
                ]
            },
            coupons: {
                chartSetting: {
                    title: 'Total Coupons Burned',
                    color: '#ec1c23'
                },
                data: [
                    {
						"date": "2015-06-01",
						"value": 5
					},
					{
						"date": "2015-07-01",
						"value": 1562
					}
                ]
            }
        },
        subVsCou2 = {
            chartTitle: 'Subscription Channels',
            online: {
                chartSetting: {
                    title: 'Online',
                    color: '#73cdd7'
                },
                data: [
                    {
                        date: '22-Feb-15',
                        value: 20
                    },
                    {
                        date: '23-Feb-15',
                        value: 25
                    },
                    {
                        date: '24-Feb-15',
                        value: 32
                    },
                    {
                        date: '25-Feb-15',
                        value: 25
                    },
                    {
                        date: '26-Feb-15',
                        value: 38
                    },
                    {
                        date: '27-Feb-15',
                        value: 23
                    },
                    {
                        date: '28-Feb-15',
                        value: 34
                    },
                    {
                        date: '1-Mar-15',
                        value: 31
                    },
                    {
                        date: '2-Mar-15',
                        value: 43
                    },
                    {
                        date: '3-Mar-15',
                        value: 23
                    }
                ]
            },
            SMS: {
                chartSetting: {
                    title: 'SMS Short Code',
                    color: '#ec1c23'
                },
                data: [
                    {
                        date: '22-Feb-15',
                        value: 41
                    },
                    {
                        date: '23-Feb-15',
                        value: 52
                    },
                    {
                        date: '24-Feb-15',
                        value: 32
                    },
                    {
                        date: '25-Feb-15',
                        value: 20
                    },
                    {
                        date: '26-Feb-15',
                        value: 31
                    },
                    {
                        date: '27-Feb-15',
                        value: 24
                    },
                    {
                        date: '28-Feb-15',
                        value: 37
                    },
                    {
                        date: '1-Mar-15',
                        value: 55
                    },
                    {
                        date: '2-Mar-15',
                        value: 22
                    },
                    {
                        date: '3-Mar-15',
                        value: 43
                    }
                ]
            },
            IVR: {
                chartSetting: {
                    title: 'IVR',
                    color: '#b0d235'
                },
                data: [
                    {
                        date: '22-Feb-15',
                        value: 22
                    },
                    {
                        date: '23-Feb-15',
                        value: 55
                    },
                    {
                        date: '24-Feb-15',
                        value: 32
                    },
                    {
                        date: '25-Feb-15',
                        value: 15
                    },
                    {
                        date: '26-Feb-15',
                        value: 29
                    },
                    {
                        date: '27-Feb-15',
                        value: 35
                    },
                    {
                        date: '28-Feb-15',
                        value: 22
                    },
                    {
                        date: '1-Mar-15',
                        value: 44
                    },
                    {
                        date: '2-Mar-15',
                        value: 33
                    },
                    {
                        date: '3-Mar-15',
                        value: 34
                    }
                ]
            }
        },
        subVsCouPerSegment = {
            chartTitle: 'Subscription vs Coupons Burned per segment',
            chartSetting: [
                {
                    title: 'Flex 20',
                    color: '#73cdd7'
                },
                {
                    title: 'Flex 40',
                    color: '#ec1c23'
                },
                {
                    title: 'Flex 60',
                    color: '#11887c'
                },
                {
                    title: 'Flex 80',
                    color: '#b1d235'
                }
            ],
            chartData: [
                {
                    title: 'Subscriptions',
                    value: [
                        {
                            date: '20-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 20
                                },
                                {
                                    key: 'Flex 40',
                                    value: 30
                                },
                                {
                                    key: 'Flex 60',
                                    value: 25
                                },
                                {
                                    key: 'Flex 80',
                                    value: 41
                                }
                            ]
                        },
                        {
                            date: '21-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 24
                                },
                                {
                                    key: 'Flex 40',
                                    value: 18
                                },
                                {
                                    key: 'Flex 60',
                                    value: 30
                                },
                                {
                                    key: 'Flex 80',
                                    value: 12
                                }
                            ]
                        },
                        {
                            date: '22-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 35
                                },
                                {
                                    key: 'Flex 40',
                                    value: 7
                                },
                                {
                                    key: 'Flex 60',
                                    value: 52
                                },
                                {
                                    key: 'Flex 80',
                                    value: 12
                                }
                            ]
                        },
                        {
                            date: '23-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 34
                                },
                                {
                                    key: 'Flex 40',
                                    value: 24
                                },
                                {
                                    key: 'Flex 60',
                                    value: 16
                                },
                                {
                                    key: 'Flex 80',
                                    value: 33
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Coupons',
                    value: [
                        {
                            date: '20-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 12
                                },
                                {
                                    key: 'Flex 40',
                                    value: 15
                                },
                                {
                                    key: 'Flex 60',
                                    value: 31
                                },
                                {
                                    key: 'Flex 80',
                                    value: 40
                                }
                            ]
                        },
                        {
                            date: '21-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 21
                                },
                                {
                                    key: 'Flex 40',
                                    value: 32
                                },
                                {
                                    key: 'Flex 60',
                                    value: 24
                                },
                                {
                                    key: 'Flex 80',
                                    value: 07
                                }
                            ]
                        },
                        {
                            date: '22-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 12
                                },
                                {
                                    key: 'Flex 40',
                                    value: 9
                                },
                                {
                                    key: 'Flex 60',
                                    value: 34
                                },
                                {
                                    key: 'Flex 80',
                                    value: 24
                                }
                            ]
                        },
                        {
                            date: '23-Feb-15',
                            data: [
                                {
                                    key: 'Flex 20',
                                    value: 40
                                },
                                {
                                    key: 'Flex 40',
                                    value: 16
                                },
                                {
                                    key: 'Flex 60',
                                    value: 33
                                },
                                {
                                    key: 'Flex 80',
                                    value: 42
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        subVsCat = {
            chartTitle: 'Subscriptions/Categories',
            chartSetting: [
                {
                    title: 'F & B',
                    color: '#73cdd7'
                },
                {
                    title: 'Electronics',
                    color: '#ec1c23'
                },
                {
                    title: 'Fashion',
                    color: '#11887c'
                },
                {
                    title: 'Travel',
                    color: '#b1d235'
                }
            ],
            chartData: [
                {
                    title: 'Subscription',
                    value: [45, 52, 11, 30]
                },
                {
                    title: 'Coupons Burned',
                    value: [21, 33, 40, 12]
                }
            ]
        },
        regions = {
            chartTitle: 'Regions',
            chartSetting: [
                {
                    title: 'Cairo',
                    color: '#73cdd7'
                },
                {
                    title: 'Alex',
                    color: '#ec1c23'
                },
                {
                    title: 'Delta',
                    color: '#11887c'
                },
                {
                    title: 'Giza',
                    color: '#b1d235'
                }
            ],
            chartData: [
                {
                    title: 'Regions',
                    value: [45, 52, 11, 30]
                }
            ]
        };

    // Chart functions
    function lineChart(parent, chartHeight, data, ticksNumber) {
            var margin = { top: 20, right: 20, bottom: 30, left: 40 },
                width = $(parent).width() - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom,
                verticalAxis = new function (min, max) {
                    this.setMin = function (min) {
                        this.min = this.min ? min < this.min ? min : this.min : min;
                    };
                    this.setMax = function (max) {
                        this.max = this.max ? max > this.max ? max : this.max : max;
                    }
                },
                chartSide;

            // Add chart-title to <h3> element
            $('.chart-title', $(parent).parent()).text(data.chartTitle);

            var parseDate = d3.time.format("%Y-%m-%d").parse;

            // get the max and min values
            for (var key in data) {
                if (key !== 'chartTitle') {
                    if (data[key].data && data[key].data.length > 0) {
                        data[key].data.forEach(function (d) {
                            d.date = parseDate(d.date);
                            d.value = parseInt(d.value, 10);
                        });

                        // d3.extent returns [min, max] of the given data
                        var subData = data[key].data,
                            crtVerticalAxis = d3.extent(data[key].data, function (d) {
                                return d.value;
                            });

                        verticalAxis.setMin(crtVerticalAxis[0]);
                        verticalAxis.setMax(crtVerticalAxis[1]);
                    }
                }
            }

            var x = d3.time.scale()
                .range([0, width]);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
				.ticks(ticksNumber);

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(ticksNumber);

            var line = d3.svg.line()
                .x(function (d) {
                    return x(d.date);
                })
                .y(function (d) {
                    return y(d.value);
                });

            var svg = d3.select(parent).append("svg")
                .attr("width", $(parent).width())
                .attr("height", chartHeight)
                .append("g")
                .attr("class", "path-cont")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // Chart data
            for (var key in data) {
                if (key !== 'chartTitle') {
                    if (data[key].data && data[key].data.length > 0) {
                        subData = data[key].data

                        x.domain(d3.extent(data[key].data, function (d) {
                            return d.date;
                        }));
                        y.domain([verticalAxis.min, verticalAxis.max]);


                        svg.append("path")
                            .datum(subData)
                            .attr("class", "line")
                            .attr("stroke", data[key].chartSetting.color)
                            .attr('title', function (d) {
                                return getValuesSum(data[key].data) / data[key].data.length;
                            })
                            .attr("d", line);

                        // Add chart-side content
                        chartSide = '<div>' +
                        '<h6>' + data[key].chartSetting.title + '</h6>' +
                        '<h4 style="color: ' + data[key].chartSetting.color + '">' + getValuesSum(data[key].data) + '</h4>' +
                        '</div>';

                        $(parent).parent().siblings('.chart-side').find('.chart-side-data').append(chartSide);
                    }
                }
            }
            if (data[key].data) {
                x.domain(d3.extent(data[key].data, function (d) {
                    return d.date;
                }));
                y.domain([verticalAxis.min, verticalAxis.max]);
            }
            // Chart axises
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // chart circles
            var YScale = height / (verticalAxis.max - verticalAxis.min);
            //console.log(data);console.log("greg");
            for (var key in data) {
                if (key !== 'chartTitle') {
                    if (data[key].data && data[key].data.length > 0) {
                        subData = data[key].data;

                        crtVerticalAxis = d3.extent(subData, function (d) {
                            return d.value;
                        });

                        var circleTitle = data[key].chartSetting.title + ': ';
                        console.log(subData); console.log("greg");
                        svg.select('.x.axis')
                            .selectAll('.tick')
                            .append('circle')
                            .attr({
                                class: 'chart-tooltip',
                                cx: 0,
                                cy: function (d, i) {
                                    // TODO: Check why i == subData.length
                                    if (subData[i])
                                        return -(subData[i].value - verticalAxis.min) * YScale;
                                    else
                                        return -(0 - verticalAxis.min) * YScale;
                                },
                                title: function (d, i) {
                                    // TODO: Check why i == subData.length
                                    if (subData[i])
                                        return circleTitle + subData[i].value;// +subData[i].date;
                                    else
                                        return circleTitle + 0;
                                }
                            });
                    }
                }
            }

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            // Chart horizontal-grid
            svg.selectAll('.y.axis')
                .selectAll('.tick')
                .append('line')
                .attr('x1', 0)
                .attr('x2', width);

            $('.path-cont', parent).prepend($('svg .axis.y', parent));
            $('.axis.x', parent).prepend($('svg .axis.x .domain', parent));
        }

    function barChart(parent, chartHeight, data, barsSpace, subGroupsSpace, sunChartsSpace, ticksNumber, xTitleFormat) {
        var margin = {top: 40, right: 20, bottom: 30, left: 40},
            width = $(parent).width() - sunChartsSpace - margin.right - margin.left,
            height = chartHeight - margin.top - margin.bottom,
            subChartsNum = 0,
            subBarGroupWidth,
            singleBarWidth,
            chartIndex = 0,
            chartSide;
//console.log(data);
        // Add chart-title to <h3> element
        $('.chart-title', $(parent).parent()).text(data.chartTitle);

        // Add chart-side content
        $.each(data.chartSetting, function (i, item) {
            chartSide = '<div>' +
            '<h6 class="small-margin-top"><span class="chart-bar-indicator" style="background: ' + item.color + ';"></span>' + item.title + '</h6>' +
            '</div>';

            $(parent).parent().siblings('.chart-side').find('.chart-side-data').append(chartSide);
        });

        var parseDate = d3.time.format('%d-%b-%y').parse;

        // Get sub-charts number && get randomSingleData
        subChartsNum = data.chartData.length;

        var x = d3.time.scale()
            .range([0, width / subChartsNum]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(ticksNumber);

        if (subChartsNum > 0) { // Check if there's one subChartData as min
            $.each(data.chartData, function (i, item) {

                 var subChartIndex = i;

                subBarGroupWidth = width / subChartsNum / data.chartData[i].value.length - subGroupsSpace;
                singleBarWidth = subBarGroupWidth / data.chartData[i].value[0].data.length;

                var svg = d3.select(parent).append('svg')
                    .attr('width', ($(parent).width() - sunChartsSpace) / subChartsNum)
                    .attr('height', chartHeight)
                    .attr('style', 'margin-left:' + (i * sunChartsSpace - 10) + ';');

                var innerSvg = svg.append('g')
                    .attr('class', 'sub-chart')
                    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

                // getMaxDataValue
                var maxDataValue = 0;
                $.each(item.value, function (i, val) {
                    $.each(val.data, function (i, val) {
                        if (val.value > maxDataValue) {
                            maxDataValue = val.value;
                        }
                    });
                });

                y.domain([0, maxDataValue]);

                $.each(item.value, function (i, subData) {

                    var bar = innerSvg.append('g')
                        .attr('class', 'bars-group')
                        .attr('transform', 'translate(' + (i * (subBarGroupWidth + subGroupsSpace) + subBarGroupWidth / 2) + ', 0)')
                        .selectAll('g')
                        .data(subData.data)
                        .enter()
                        .append('g')
                        .attr('transform', function (d, i) {
                            return 'translate(' + i * singleBarWidth + ', 0)';
                        });

                    bar.append('rect')
                        .attr('y', function (d) {
                            return y(d.value);
                        })
                        .attr('class', 'chart-tooltip')
                        .attr('title', function (d, i) {
                            return subData.data[i].key + ': ' + d.value;
                        })
                        .attr('height', function (d) {
                            return height - y(d.value);
                        })
                        .attr('width', singleBarWidth - barsSpace > 12 ? 12 : singleBarWidth - barsSpace)
                        .data(data.chartSetting)
                        .attr('fill', function (d,i) {
                            return data.chartSetting[i].color;
                        });
                });

                // Chart axises
                innerSvg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .append('line')
                    .attr('x1', 0)
                    .attr('x2', width);

                var textWidth;

                innerSvg.select('.x.axis').selectAll('g')
                    .data(item.value)
                    .enter()
                    .append('g')
                    .attr('transform', function (d, i) {
                        return 'translate(' + (i * (subBarGroupWidth + subGroupsSpace) + subGroupsSpace / 2 + subBarGroupWidth / 2) + ', 20)';
                    })
                    .append('g')
                    .append('text')
                    .text(function (d) {
						if(xTitleFormat == "d")
						{
							return (d.date.split('-')[0])
						}
						else if(xTitleFormat == "m")
						{
							return (d.date.split('-')[1])
						}
						else if(xTitleFormat == "md")
						{
							return (d.date.split('-')[1] + ' ' + d.date.split('-')[0])
						}
						else if(xTitleFormat == "dm")
						{
							return (d.date.split('-')[0] + ' ' + d.date.split('-')[1])
						}
						else if(xTitleFormat == "my")
						{
							return (d.date.split('-')[1] + ' ' + d.date.split('-')[2])
						}
                        else if(xTitleFormat == "y")
						{
							return (d.date.split('-')[2])
						}
                    })
                    .each(function () {
                        textWidth = this.getBBox().width
                    })
                    .attr('transform', 'translate(' + -textWidth / 2 + ', 0)');

                innerSvg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                // Chart horizontal-grid
                svg.selectAll('.y.axis')
                    .selectAll('.tick')
                    .append('line')
                    .attr('x1', 0)
                    .attr('x2', width);

                // sub-chart title
                var titleDimensions = {};
                svg.append('g')
                    .attr('class', 'subChart-title')
                    .attr('transform', 'translate(' + (margin.left + width / 4) + ', 0)')
                    .append('text')
                    .text(function () {
                        return item.title; // bar charts 
                    })
                    .each(function () {
                        titleDimensions.width = this.getBBox().width;
                        titleDimensions.height = this.getBBox().height;
                    })
                    .attr('transform', 'translate(' + -titleDimensions.width / 2 + ', ' + titleDimensions.height + ')');
            });

            $('.sub-chart', parent).each(function () {
                $(this).prepend($('.axis', this));
            });
        }
    }

    function pieChart(parent, chartHeight, data, subChartsSpace) {
        var margin = {top: 60, right: 20, bottom: 0, left: 40},
            width = $(parent).width() - subChartsSpace - margin.right - margin.left,
            height = chartHeight - margin.top - margin.bottom,
            radius = Math.min(width, height) / 2,
            subChartsNum = 0,
            chartSide;

        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        // Add chart-title to <h3> element
        $('.chart-title', $(parent).parent()).text(data.chartTitle);

        // Add chart-side content
        $.each(data.chartSetting, function (i, item) {
            chartSide = '<div>' +
            '<h6 class="small-margin-top"><span class="chart-bar-indicator" style="background: ' + item.color + ';"></span>' + item.title + '</h6>' +
            '</div>';

            $(parent).parent().siblings('.chart-side').find('.chart-side-data').append(chartSide);
        });

        var parseDate = d3.time.format('%d-%b-%y').parse;

        // Get sub-charts number && get randomSingleData
        subChartsNum = data.chartData.length;

        // sub-chart width
        var subChartWidth = (width - subChartsSpace) / subChartsNum;

        if (subChartsNum > 0) { // Check if there's one subChartData as min
            $.each(data.chartData, function(i, item){
                var pie = d3.layout.pie()
                    .sort(null);

                var svg = d3.select(parent).append('svg')
                    .attr('width', subChartWidth)
                    .attr('height', chartHeight)
                    .attr('style', 'margin-left:' + (i * subChartsSpace - 10) + ';');

                var parentG = svg.append('g')
                    .attr('transform', 'translate(' + subChartWidth / 2 + "," + (chartHeight / 2 + 15) + ')');

                var g = parentG.selectAll('.arc')
                    .data(pie(item.value))
                    .enter()
                    .append('g')
                    .attr('class', 'arc')
                    .attr('stroke', 'white')
                    .attr('stroke-width', '2');

                g.append('path')
                    .attr('d', arc)
                    .data(data.chartSetting)
                    .attr('class', 'chart-tooltip')
                    .attr('title', function (d, i) {
                        return d.title + ': ' + item.value[i];
                    })
                    .style('fill', function (d) {
                        return d.color;
                    });

                // sub-chart title
                var titleDimensions = {};
                svg.append('g')
                    .attr('class', 'subChart-title')
                    .attr('transform', 'translate(0, 10)')
                    .append('text')
                    .text(item.title)
                    .each(function () {
                        titleDimensions.width = this.getBBox().width;
                        titleDimensions.height = this.getBBox().height;
                    })
                    .attr('transform', 'translate(' + (subChartWidth - titleDimensions.width) / 2 + ', ' + titleDimensions.height + ')');

                console.log(subChartWidth)
            });

            $(parent).css('text-align', 'center');

            $('.sub-chart', parent).each(function () {
                $(this).prepend($('.axis', this));
            });
        }
    }
	
	function pieChartSide(parent, chartHeight, data, subChartsSpace) {
        var margin = {top: 0, right: 0, bottom: 20, left: 0},
            width = $(parent).width() - subChartsSpace - margin.right - margin.left,
            height = chartHeight - margin.top - margin.bottom,
            radius = Math.min(width, height) / 2,
            subChartsNum = 0,
            chartSide;

        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        // Add chart-title to <h3> element
        $('.chart-title', $(parent).parent()).text(data.chartTitle);

        // Add chart-side content
        $.each(data.chartSetting, function (i, item) {
            chartSide = '<div>' +
            '<h6 class="small-margin-top"><span class="chart-bar-indicator" style="background: ' + item.color + ';"></span>' + item.title + '</h6>' +
            '</div>';

            $(parent).parent().find('.chart-side-data').append(chartSide);
        });

        var parseDate = d3.time.format('%d-%b-%y').parse;

        // Get sub-charts number && get randomSingleData
        subChartsNum = data.chartData.length;

        // sub-chart width
        var subChartWidth = (width - subChartsSpace) / subChartsNum;

        if (subChartsNum > 0) { // Check if there's one subChartData as min
            $.each(data.chartData, function(i, item){
                var pie = d3.layout.pie()
                    .sort(null);

                var svg = d3.select(parent).append('svg')
                    .attr('width', subChartWidth)
                    .attr('height', chartHeight)
                    .attr('style', 'margin-left:' + (i * subChartsSpace - 10) + ';');

                var parentG = svg.append('g')
                    .attr('transform', 'translate(' + subChartWidth / 2 + "," + (chartHeight / 2 + 15) + ')');

                var g = parentG.selectAll('.arc')
                    .data(pie(item.value))
                    .enter()
                    .append('g')
                    .attr('class', 'arc')
                    .attr('stroke', 'white')
                    .attr('stroke-width', '2');

                g.append('path')
                    .attr('d', arc)
                    .data(data.chartSetting)
                    .attr('class', 'chart-tooltip')
                    .attr('title', function (d, i) {
                        return d.title + ': ' + item.value[i];
                    })
                    .style('fill', function (d) {
                        return d.color;
                    });

                // sub-chart title
                var titleDimensions = {};
                svg.append('g')
                    .attr('class', 'subChart-title')
                    .attr('transform', 'translate(0, 10)')
                    .append('text')
                    //.text(item.title)
                    .each(function () {
                        titleDimensions.width = this.getBBox().width;
                        titleDimensions.height = this.getBBox().height;
                    })
                    .attr('transform', 'translate(' + (subChartWidth - titleDimensions.width) / 2 + ', ' + titleDimensions.height + ')');

                console.log(subChartWidth)
            });

            $(parent).parent().css('position', 'relative');
			$(parent).parent().find('.chart-side').css({position:'absolute',top:'50%',transform:'translateY(-50%)'});
			$(parent).parent().siblings('.chart-side').css('height', $(parent).parent().height());

            $('.sub-chart', parent).each(function () {
                $(this).prepend($('.axis', this));
            });
        }
    }
	
	

    function circleChart(parent, chartHeight, data) {
        var margin = {top: 60, right: 20, bottom: 0, left: 40},
            width = $(parent).width() - margin.right - margin.left,
            height = chartHeight - margin.top - margin.bottom,
            radius = Math.min(width, height) / 2,
            subChartsNum = 0;

        // Get sub-charts number && get randomSingleData
        subChartsNum = data.chartData.length;

        if(subChartsNum > 0){
            $.each(data.chartData, function(i, item) {
                $(parent).append(
                    '<div class="chart-item clearfix">' +
                        '<div class="col-xs-6">' +
                            '<h5>' + item.title + '</h5>' +
                            '<div class="item-info">' +
                                '<h6>' + item.total.title + '</h6>' +
                                '<h4 style="color: ' + data.chartSetting.colors.total + '">' + item.total.value + '</h4>' +
                            '</div>' +
                            '<div>' +
                                '<h6>' + item.current.title + '</h6>' +
                                '<h4 style="color: ' + data.chartSetting.colors.value + '">' +  item.current.value + '</h4>' +
                            '</div>' +
                        '</div>' +
                        '<div class="zero-padding col-xs-6" id="item-' + i + '"></div>' +
                    '</div>'
                );

                width = $('#item-' + i).parent().width() / 2,
                    radius = Math.min(width, height) / 2;

                var pie = d3.layout.pie()
                    .sort(null);

                var arc1 = d3.svg.arc()
                    .innerRadius(radius - 15)
                    .outerRadius(radius - 5)
                    .startAngle(0)
                    .endAngle(Math.PI * 2);

                var arc2 = d3.svg.arc()
                    .innerRadius(radius - 20)
                    .outerRadius(radius)
                    .startAngle(0)
                    .endAngle(Math.PI * 2 * item.current.value / item.total.value);

                var svg = d3.select('#item-' + i).append("svg")
                    .attr("width", width)
                    .attr("height", height);

                var parentG = svg.append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                parentG.append('path')
                    .attr('d', arc1)
                    .style('fill', data.chartSetting.colors.total);

                parentG.append('path')
                    .attr('d', arc2)
                    .style('fill', data.chartSetting.colors.value);

                var percentageTextHeight;
                parentG.append("text")
                    .style('text-anchor', 'middle')
                    .attr('class', 'percentage')
                    .text(parseInt(item.current.value / item.total.value * 100) + '%')
                    .each(function(){ percentageTextHeight = this.getBBox().height; })
                    .attr('transform', 'translate(0, ' + (radius / 2 - percentageTextHeight / 2) + ')');
            });
        }
    }

    function getValuesSum(data) {
        var sum = 0;
        $.each(data, function (i, val) {
            sum += val.value;
        });
        return sum;
    }

    // Call charts
    lineChart('#lineChart', 250, subVsCou, 2);
    lineChart('#lineChart2', 250, subVsCou2, 7);
    barChart('#barChart', 250, subVsCouPerSegment, 0, 40, 50, 5,"y");
    pieChart('#pieChart', 200, subVsCat, 50);
    pieChartSide('#regionsCharts', 160, regions,0);

    // Report-period
    $('.month-datepicker').datepicker({
        changeMonth: true,
        showButtonPanel: true,
        dateFormat: "MM",
        beforeShow: function (e, t) {
            $(this).datepicker("hide");
            $("#ui-datepicker-div").addClass("hide-calendar");
            $("#ui-datepicker-div").addClass('MonthDatePicker');
            $("#ui-datepicker-div").addClass('HideTodayButton');
        },
        onClose: function(dateText, inst){
            var n = Math.abs($("#ui-datepicker-div .ui-datepicker-month :selected").val() - 1) + 2;
            $(this).datepicker("setDate", new Date(null, n, null));
            setTimeout(function () {
                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                console.log('remove classes');
            }, 200);
        }
    });
    $('.year-datepicker').datepicker({
        changeYear: true,
        showButtonPanel: true,
        dateFormat: "yy",
        beforeShow: function (e, t) {
            $(this).datepicker("hide");
            $("#ui-datepicker-div").addClass("hide-calendar");
            $("#ui-datepicker-div").addClass('YearDatePicker');
            $("#ui-datepicker-div").addClass('HideTodayButton');
        },
        onClose: function(dateText, inst){
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, 1));
            setTimeout(function () {
                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                console.log('remove classes');
            }, 200);
        }
    });
    $('.custom-datepicker').datepicker({
        showButtonPanel: true,
        beforeShow: function () {
            console.log('custom');
        },
        onClose: function(dateText, inst){
            setTimeout(function () {
                $("#ui-datepicker-div").removeClass('hide-calendar MonthDatePicker YearDatePicker HideTodayButton');
                console.log('remove classes');
            }, 200);
        }
    });

    $(document).on('change', '.period-select', function () {
        var val = parseInt($(this).val()),
            parentSibling = $(this).parent().siblings('.report-period');

        $('input', parentSibling).hide();

        if(val === 0) {
            $('.custom-period input', parentSibling).css('display', 'inline-block');
        } else if(val === 1) {
            $('.monthly-period input', parentSibling).fadeIn();
        } else if(val === 2) {
            $('.yearly-period input', parentSibling).css('display', 'inline-block');
        }
    });

    // Initialize chart circles tooltip
    $('.chart-tooltip').tooltip({
        container: 'body'
    });

});