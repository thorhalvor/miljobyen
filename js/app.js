var chart;
var series = [{
    name: 'Strøm',
    data: [[1359327600000,2704],[1362265200000,3733],[1365026400000,4699]]
}, {
    name: 'Fjernvarme',
    data: [[1359327600000,1533],[1362265200000,2044],[1365026400000,2462]]
}]


$(document).on('pageshow', '#home', function(){
    $(document).ready(function() {

        if(chart == undefined)
        {
            createChart();
        }

        addClickHandlers();

    });
});

function addClickHandlers()
{
    $("#addMeasurement").click(function(){
        if(chart)
        {
            var newMeasurement = [1364166000000,1300];
            series[0].data.push(newMeasurement);
            series[0].data.sort();
            chart.series[0].setData(series[0].data);

            $.mobile.changePage("#home");
        }

    });
}

function createChart()
{
    var MEASUREMENT_UNIT = "KWh";
    var CHART_CONTAINER_ID = "container"
    var CHART_TYPE = 'line';
    var CHART_TITLE ='Energimålinger - Miljobyen';
    var CHART_SUB_TITLE = 'B2-2 H8-4';
    var Y_AXIS_TITLE = 'Målestand ('+MEASUREMENT_UNIT +')';

    chart = new Highcharts.StockChart({
        chart: {
            renderTo: CHART_CONTAINER_ID,
            type: CHART_TYPE,
            marginRight: 130,
            marginBottom: 25
        },
        title: {
            text: CHART_TITLE,
            x: -20 //center
        },
        subtitle: {
            text: CHART_SUB_TITLE,
            x: -20
        },
        rangeSelector:{enabled:false},
        navigator:{enabled:false},
        scrollbar:{enabled:false},
        credits:{enabled:false},
        xAxis: {       },
        yAxis: {
            title: {
                text: Y_AXIS_TITLE
            }
        },
        plotOptions:{
            line:{
                marker:{enabled:true}
            }
        },
        tooltip: {

        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 100,
            borderWidth: 0
        },
        series: series
    });
}