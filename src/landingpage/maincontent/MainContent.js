import React from 'react';
import Content1 from './content1/Content1'
import Content2 from './content2/Content2'
import Content3 from './content3/Content3'
const MainContent = () => {
    return (
        <div style={{'marginTop':'1em'}}>
            <Content1></Content1>
            <Content2></Content2>
            <Content3></Content3>
        </div>
    );
}

export default MainContent;