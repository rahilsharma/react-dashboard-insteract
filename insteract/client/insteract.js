import React from 'react';
import ReactDOM from 'react-dom';
// Import css
import css from './styles/rahil.css';
// Import Components
import ChartComponent from './components/chart/ChartComponent';
import Cards from './components/cards/Cards';
import GridTable from './components/materialTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
//data variable till backend api is not integrated
import graphConfig from './data/ChartData';
import appData from './data/AppData';
import RecordsData from './data/RecordsData';
const Insteract = React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title={appData.title} iconClassNameRight={appData.iconClassNameRight}/>
                        <ChartComponent graphConfig={graphConfig} />
                        <Cards recordsData={RecordsData}/>
                        <GridTable/>
                </div>
            </MuiThemeProvider>
        )
    },
    componentDidMount : function () {
        //injecting tap event
        injectTapEventPlugin();
    }
});
ReactDOM.render(
    <Insteract />,
    document.getElementById('root')
);

