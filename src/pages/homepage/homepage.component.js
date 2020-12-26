import React from 'react';
import DirectoryMenu from '../../components/directory-menu/directoy-menu.component';

import './homepagestyle.scss';


function HomePage(props){
    console.log(props)

    return <div className='homepage'>
       <DirectoryMenu></DirectoryMenu>
    </div>


}

export default HomePage