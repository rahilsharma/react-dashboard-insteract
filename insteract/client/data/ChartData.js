/**
 * Created by Rahil on 23-10-2016.
 */
const chartConfig = {
    xAxis: {
        categories: ['10/16/2016', '10/17/2016', '10/18/2016', '10/19/2016','10/20/2016', '10/21/2016', '10/22/2016']
    },
    series: [{
        data: [29, 71, 106, 129, 12,72,199]
    }],
    chart: {
        backgroundColor: '#039eb2',
        height:300,
        polar: false,
        type: 'line',
        style: {
            fontFamily: 'Roboto',

        }
    },
    title:{
        text:'Records',color:'white',fontFamily: 'Roboto',
        color: "white"
    },
    subtitle:{
        text:'20 Oct 2016 - 20 Nov 2016',color:'white',fontFamily: 'Roboto',
        color: "white"
    },
};

export default chartConfig;