import React, {Component} from 'react';
import {MenuOutlined, SketchOutlined} from '@ant-design/icons';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-bg">
                <SketchOutlined className="logo-icon" />
                <span className="header-text-color">
                    Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopki...
                </span>
                <MenuOutlined className="menu-icon" />
            </div>

        )
    }
}

export default Header;
