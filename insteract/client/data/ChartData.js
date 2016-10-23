/**
 * Created by Rahil on 23-10-2016.
 */
const chartConfig = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2]
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