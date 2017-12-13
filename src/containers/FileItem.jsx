/**
 * Created by GEK on 2017/12/3.
 */

import React from 'react';
import {FileHeaderContainer, FileItemBody, Footer} from '../components/index';
import '../scss/FileIndex.scss';


class FileItem extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer />
                <FileItemBody/>
                <Footer/>
            </div>
        );
    }
}

export default FileItem;