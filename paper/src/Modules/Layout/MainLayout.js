import React, { Component } from 'react'
import Header from './Header';
import CreatePaper from '../CreatePaper/CreatePaper';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreatePaper />
            </div>
        )
    }
}

export default MainLayout;
