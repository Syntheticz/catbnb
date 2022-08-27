import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import style from '../styles/TestForm.module.css'

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginFileEncode, FilePondPluginImagePreview,FilePondPluginImageResize, FilePondPluginImageExifOrientation)

export default function TestForm() {
  const [files, setFiles] = useState([]);

  return (
    <div className={style.formContainer}>
            <div className={style.imageContainer}>          
                <FilePond
                    files={files}
                    imageResizeTargetHeight={10}
                    imageResizeTargetWidth={10} 
                    name='catImage'
                    onupdatefiles={setFiles}
                />
            </div>
            <Form className={style.form}>
                <Form.Input label="Name" type="text"/>
                <Form.Input label="About" type="text"/>
                <Form.Input label="Services" type="text"/>
                <Form.Input className={style.price} label="Price" type="Number" required={true} error={{
                    content: "Please enter in Price",
                    pointing: "below"
                }}/>
                <Button>Submit</Button>
            </Form>
            
    </div>
  )
}
