import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import styles from './GenerateIconsForMostPopularApps.component.css';
import GooglePlayStore from '../../flux-stores/GooglePlayStore';
import { createImage } from '../../lib/image';
import slugify from 'slugify';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { sleep } from '../../lib/util';
import Loader from '../Loader/Loader';


class GenerateIconsForMostPopularApps extends Component {
    constructor(props) {
        super();
        this.state = {
            topApps: []
        };

    }

    componentDidMount = async () => {
        await GooglePlayStore.fetchTopApps();
    }

    componentWillMount() {
        GooglePlayStore.on('change', this.handleGooglePlayStoreChange);
    }

    componentWillUnmount() {
        GooglePlayStore.removeListener('change', this.handleGooglePlayStoreChange);
    }

    handleGooglePlayStoreChange = action => {
        this.setState({
            topApps: GooglePlayStore.topApps,
        });
    }

    generate = async () => {
        console.log(this.state.topApps);
        const zip = new JSZip();

        this.setState({
            loading: true
        });

        await sleep(1000);

        const blobs = await Promise.all(
            this.state.topApps.map(app => new Promise((resolve, reject) => {
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 512;

                createImage({
                    canvas,
                    firstLetter: app.title[0],
                    shape: 'auto',
                    url: app.icon
                }).then(() => {
                    canvas.toBlob(blob => {
                        resolve({ blob, app });
                    }, 'image/png');
                });
            })));
        blobs.forEach(({ blob, app }) => {
            const filename = slugify(app.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase() + '.png';
            zip.file(filename, blob)
        });
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'top-apps-office-like-icons.zip');

        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <div className="GenerateIconsForMostPopularApps">
                <Button disabled={this.state.topApps.length === 0} onClick={this.generate}>Generate</Button>
                <br />
                { this.state.loading ? <Loader style={{ margin: '20px auto' }} /> : null }
            </div>
        );
    }
}

export default GenerateIconsForMostPopularApps;
