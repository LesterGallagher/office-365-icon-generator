import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import GooglePlayStore from '../../flux-stores/GooglePlayStore';
import { createImage } from '../../lib/image';
import slugify from 'slugify';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { sleep } from '../../lib/util';
import Loader from '../Loader/Loader';
import styles from './CustomIconGenerator.component.css';

class CustomIconGenerator extends Component {
    constructor(props) {
        super();
        this.state = {
            files: []
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    generate = async () => {
        if (this.state.files.length === 0) alert('No files selected');

        console.log(this.state.files);
        const zip = new JSZip();

        this.setState({
            loading: true
        });

        await sleep(1000);

        const blobs = await Promise.all(
            Array.from(this.state.files).map(file => new Promise((resolve, reject) => {
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 512;

                const url = window.URL.createObjectURL(file);

                createImage({
                    canvas,
                    firstLetter: file.name[0],
                    shape: 'auto',
                    url: url
                }).then(() => {
                    window.URL.revokeObjectURL(url);
                    canvas.toBlob(blob => {
                        const fileNameWithoutFileExtension = file.name.split('.').slice(0, -1).join('.');
                        resolve({ blob, app: { title: fileNameWithoutFileExtension } });
                    }, 'image/png');
                });
            })));
        blobs.forEach(({ blob, app }) => {
            const filename = slugify(app.title, { remove: /[*+~.()'"!:@]/g }).toLowerCase() + '.png';
            zip.file(filename, blob)
        });
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, 'custom-office-like-icons.zip');

        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <div className="CustomIconGenerator">
                <input onChange={e => this.setState({ files: e.target.files })} type="file" multiple accept="image/*" /> <br /><br />
                <Button onClick={this.generate}>Generate</Button> <br />
                {this.state.loading ? <Loader style={{ margin: '20px auto' }} /> : null}
            </div>
        );
    }
}

export default CustomIconGenerator;
