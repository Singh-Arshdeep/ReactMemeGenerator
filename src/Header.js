import React from 'react';

class Header extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        const styleHeader = {
            textAlign: 'center',
        }
        return(
            <div>
                <hr/>
                <h2 style={styleHeader}>Meme Generator</h2>
                <hr/>
            </div>
        );
    }
}

export default Header;