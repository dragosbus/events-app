import React from 'react';
import {Button} from 'semantic-ui-react';
import './Header.css';


const Header = () => {
    return(
        <header>
            <h1 className="logo">Logo</h1>
            <Button primary>Primary</Button>
        </header>
    );
};

export default Header;