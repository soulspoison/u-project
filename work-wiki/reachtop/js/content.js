var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var dateList = [
    ['2017-10-1', 1, 1, 1, 1, 1],
    ['2017-10-2', 1, 1, 1, 1, 0],
    ['2017-10-3', 1, 1, 1, 0, 0],
    ['2017-10-4', 1, 1, 0, 0, 0],
    ['2017-10-5', 1, 0, 0, 0, 0],
    ['2017-10-6', 1, 0, 1, 1, 1],
    ['2017-10-7', 1, 0, 0, 1, 1],
    ['2017-10-8', 1, 0, 0, 0, 1],
    ['2017-10-9', 0, 1, 1, 1, 1],
    ['2017-10-10', 0, 0, 1, 1, 1],
    ['2017-10-11', 0, 0, 0, 1, 1],
    ['2017-10-12', 0, 0, 0, 0, 1],
    ['2017-10-13', 1, 0, 0, 1, 0],
    ['2017-10-14', 1, 1, 0, 0, 1],
    ['2017-10-15', 1, 1, 0, 1, 1],
    ['2017-10-16', 0, 0, 0, 0, 0],
    ['2017-10-17', 0, 0, 0, 0, 0],
    ['2017-10-18', 0, 0, 0, 0, 0],
    ['2017-10-19', 0, 0, 0, 0, 0],
    ['2017-10-20', 0, 0, 0, 0, 0],
    ['2017-10-21', 0, 0, 0, 0, 0],
    ['2017-10-22', 0, 0, 0, 0, 0],
    ['2017-10-23', 0, 0, 0, 0, 0],
    ['2017-10-24', 0, 0, 0, 0, 0],
    ['2017-10-25', 0, 0, 0, 0, 0],
    ['2017-10-26', 0, 0, 0, 0, 0],
    ['2017-10-27', 0, 0, 0, 0, 0],
    ['2017-10-28', 0, 0, 0, 0, 0],
    ['2017-10-29', 0, 0, 0, 0, 0],
    ['2017-10-30', 0, 0, 0, 0, 0],
    ['2017-10-31', 0, 0, 0, 0, 0],
    ['2017-11-1', 0, 0, 1, 0, 0],
    ['2017-11-2', 1, 0, 0, 0, 0],
    ['2017-11-3', 0, 1, 0, 0, 0],
    ['2017-11-4', 0, 0, 0, 0, 0],
    ['2017-11-5', 0, 0, 0, 0, 0],
    ['2017-11-6', 0, 0, 0, 1, 0],
    ['2017-11-7', 0, 0, 0, 0, 0],
    ['2017-11-8', 0, 0, 0, 0, 1],
    ['2017-11-9', 0, 0, 0, 0, 0],
    ['2017-11-10', 0, 0, 0, 0, 0],
    ['2017-11-11', 0, 0, 0, 0, 0],
    ['2017-11-12', 0, 0, 0, 0, 0],
    ['2017-11-13', 0, 0, 0, 0, 0],
    ['2017-11-14', 0, 0, 0, 0, 0],
    ['2017-11-15', 0, 0, 0, 0, 0],
    ['2017-11-16', 0, 0, 0, 0, 0],
    ['2017-11-17', 0, 0, 0, 0, 0],
    ['2017-11-18', 0, 0, 0, 0, 0],
    ['2017-11-19', 0, 0, 0, 0, 0],
    ['2017-11-20', 0, 0, 0, 0, 0],
    ['2017-11-21', 0, 0, 0, 0, 0],
    ['2017-11-22', 0, 0, 0, 0, 0],
    ['2017-11-23', 0, 0, 0, 0, 0],
    ['2017-11-24', 0, 0, 0, 0, 0],
    ['2017-11-25', 0, 0, 0, 0, 0],
    ['2017-11-26', 0, 0, 0, 0, 0],
    ['2017-11-27', 0, 0, 0, 0, 0],
    ['2017-11-28', 0, 0, 0, 0, 0],
    ['2017-11-29', 0, 0, 0, 0, 0],
    ['2017-11-30', 0, 0, 0, 0, 0],
    ['2017-12-1', 0, 0, 0, 0, 0],
    ['2017-12-2', 0, 0, 0, 0, 0],
    ['2017-12-3', 0, 0, 0, 0, 0],
    ['2017-12-4', 0, 0, 0, 0, 0],
    ['2017-12-5', 0, 0, 0, 0, 0],
    ['2017-12-6', 0, 0, 0, 0, 0],
    ['2017-12-7', 0, 0, 0, 0, 0],
    ['2017-12-8', 0, 0, 0, 0, 0],
    ['2017-12-9', 0, 0, 0, 0, 0],
    ['2017-12-10', 0, 0, 0, 0, 0],
    ['2017-12-11', 0, 0, 0, 0, 0],
    ['2017-12-12', 0, 0, 0, 0, 0],
    ['2017-12-13', 0, 0, 0, 0, 0],
    ['2017-12-14', 0, 0, 0, 0, 0],
    ['2017-12-15', 0, 0, 0, 0, 0],
    ['2017-12-16', 0, 0, 0, 0, 0],
    ['2017-12-17', 0, 0, 0, 0, 0],
    ['2017-12-18', 0, 0, 0, 0, 0],
    ['2017-12-19', 0, 0, 0, 0, 0],
    ['2017-12-20', 0, 0, 0, 0, 0],
    ['2017-12-21', 0, 0, 0, 0, 0],
    ['2017-12-22', 0, 0, 0, 0, 0],
    ['2017-12-23', 0, 0, 0, 0, 0],
    ['2017-12-24', 0, 0, 0, 0, 0],
    ['2017-12-25', 0, 0, 0, 0, 0],
    ['2017-12-26', 0, 0, 0, 0, 0],
    ['2017-12-27', 0, 0, 0, 0, 0],
    ['2017-12-28', 0, 0, 0, 0, 0],
    ['2017-12-29', 0, 0, 0, 0, 0],
    ['2017-12-30', 0, 0, 0, 0, 0],
    ['2017-12-31', 0, 0, 0, 0, 0]
];

var heatmapData = [];
var lunarData = [];
for (var i = 0; i < dateList.length; i++) {
    heatmapData.push([
        dateList[i][0],
        Math.random() * 300
    ]);
    lunarData.push([
        dateList[i][0],
        1,
        dateList[i][1],
        dateList[i][2],
        dateList[i][3],
        dateList[i][4],
        dateList[i][5],
        dateList[i][6]
    ]);
}

var date = new Date();
var MM = date.getMonth() + 1;
var YYYY = date.getFullYear();
var icon = new Array('√', '●', '◎', '★', '☆', ' ');

option = {
    calendar: [{
        left: 'center',
        top: 'middle',
        cellSize: [90, 80],
        yearLabel: {show: false},
        orient: 'vertical',
        dayLabel: {
            firstDay: 0,
            nameMap: 'cn'
        },
        monthLabel: {
            show: false
        },
        range: YYYY + '-' + MM
    }],
    //日记完成则value[2]值为1，显示★
    series: [{
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    var d = echarts.number.parseDate(params.value[0]);
                    console.log(params.value[4]);
                    if( params.value[2] == 1 ){
                        return d.getDate() + icon[0] + '\n\n';
                    } else {
                        return d.getDate() + icon[5] + '\n\n';
                    }
                    
                },
                textStyle: {
                    color: '#f00'
                }
            }
        },
        data: lunarData
    }, {
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    var d = echarts.number.parseDate(params.value[0]);
                    if( params.value[3] == 1 && params.value[4] == 1 && params.value[5] == 1 && params.value[6] == 1 ){
                        return '\n\n\n' + icon[1] + icon[2] + icon[3] + icon[4] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[4] == 1 && params.value[5] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[2] + icon[3] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[4] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[2] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[5] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[3] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[4] == 1 && params.value[5] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[2] + icon[3] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[4] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[2] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[5] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[3] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[4] == 1 && params.value[5] == 1 ) {
                        return '\n\n\n' + icon[2] + icon[3] + icon[5] + '\n\n';
                    } else if( params.value[4] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[2] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[5] == 1 && params.value[6] == 1 ) {
                        return '\n\n\n' + icon[3] + icon[4] + icon[5] + '\n\n';
                    } else if( params.value[3] == 1 ) {
                        return '\n\n\n' + icon[1] + icon[5] + '\n\n';
                    } else if( params.value[4] == 1 ) {
                        return '\n\n\n' + icon[2] + icon[5] + '\n\n';
                    } else if( params.value[5] == 1 ) {
                        return '\n\n\n' + icon[3] + icon[5] + '\n\n';
                    } else if( params.value[6] == 1 ) {
                        return '\n\n\n' + icon[4] + icon[5] + '\n\n';
                    } else {
                        return '\n\n\n' + icon[5] + '\n\n';
                    }
                    
                },
                textStyle: {
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0f0'
                }
            }
        },
        data: lunarData
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}