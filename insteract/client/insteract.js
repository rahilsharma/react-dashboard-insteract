import React from 'react';
import ReactDOM from 'react-dom';
// Import css
import css from './styles/rahil.css';
// Import Components
import ChartComponent from './components/chart/ChartComponent';
import Cards from './components/Cards';
import GridTable from './components/GridTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import graphConfig from './data/ChartData';
import appData from './data/AppData';
const Insteract = React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title={appData.title} iconClassNameRight={appData.iconClassNameRight}/>
                        <ChartComponent graphConfig={graphConfig} />
                        <Cards/>
                        <GridTable/>
                </div>
            </MuiThemeProvider>
        )
    }
});
ReactDOM.render(
    <Insteract />,
    document.getElementById('root')
);

