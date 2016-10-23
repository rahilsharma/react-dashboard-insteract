import React from 'react';
import ReactDOM from 'react-dom';


// Import css
 import css from './styles/rahil.css';

// Import Components
import Main from './components/Main';
import Cards from './components/Cards';
import GridTable from './components/GridTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Insteract = React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Insteract Dashboard" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                        <Main/>
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

