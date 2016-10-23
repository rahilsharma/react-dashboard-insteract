import React from 'react';
import ReactDOM from 'react-dom';
// Import css
import css from './styles/rahil.css';
// Import Components
import ChartComponent from './components/chart/ChartComponent';
import Cards from './components/cards/Cards';
import GridTable from './components/gridTable/GridTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
//data variable till backend api is not integrated
import graphConfig from './data/ChartData';
import appData from './data/AppData';
import recordsData from './data/RecordsData';
import gridData from './data/gridData';
const backendUrl = "http://localhost:9000/";
const USE_BACKEND=false; // uses the data folder ///make it true
const Insteract = React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title={appData.title} iconClassNameRight={appData.iconClassNameRight}/>
                        <ChartComponent USE_BACKEND={USE_BACKEND} backendUrl={backendUrl} graphConfig={graphConfig} />
                        <Cards USE_BACKEND={USE_BACKEND} backendUrl={backendUrl} recordsData={recordsData}/>
                        <GridTable USE_BACKEND={USE_BACKEND} backendUrl={backendUrl} gridData={gridData}/>
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

