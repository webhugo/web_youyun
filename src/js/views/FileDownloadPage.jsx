import React from 'react';
import {FooterComponent} from '../components/index';
import {FileHeaderContainer, FileDownloadContainer} from '../containers';
import '../../scss/FileIndex.scss';


export default class FileDownloadPage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileDownloadContainer/>
                <FooterComponent/>
            </div>
        );
    }
}

