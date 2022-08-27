import React from "react";
import style from '../styles/Form.module.css'
import { useState, useEffect} from "react";
import Router from "next/router";

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginFileEncode, FilePondPluginImagePreview,FilePondPluginImageResize, FilePondPluginImageExifOrientation)


const imageMimeTypes = ['image/png', 'image/jpeg', 'images/gif']

const AddCat = () => {
    const [text, setText] = useState({})
    const [files, setFiles] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    const [testImage, setTestImage] = useState('')
    const [type, setType] = useState('')
    const [form, setForm] = useState({ 
        img: '',
        type: '',
        name: '',
        ratings: 0,
        status: true,
        services: '',
        price: 0,
        about: ''
    })


    const addCat = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/card',{
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(form)
            })
            console.log(form.type)
            Router.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    
    function handleOnClick(){
        addCat();
    }

    function handleOnChange(e){
        setForm(() => {
            return {
                ...form,
                [e.target.name] : e.target.value,
                 
            }
        })
    }

    
    
    function onAddFile(e){
        setIsMounted(isMounted = true)
        setTestImage(testImage = files[0].getFileEncodeBase64String())
        setType(type = files[0].fileType)
        setTestImage(testImage = new Buffer.from(testImage, 'base64'))
    }

    useEffect(() => {
        setForm(() => {
            return {
                ...form,
                img: testImage,
                type: type
            }
        })
    }, [testImage])

    function onRemove(){
        setIsMounted(isMounted = false)
    }

    return ( 
       <section className={style.superContainer}>
             <div className={style.Container}> 
            <div className={style.imageContainer}>
                <FilePond
                    files={files}
                    imageResizeTargetHeight={10}
                    imageResizeTargetWidth={10} 
                    name='catImage'
                    onaddfile={onAddFile}
                    onupdatefiles={setFiles}
                    onremovefile={onRemove}
                />
            </div>
            <div className={style.formContainer}>
                <h3 className={style.label}>Name</h3>
                <input className={style.input} name='name' type='text' onChange={handleOnChange}/>
                <h3 className={style.label}>Services</h3>
                <input className={style.input} name='services' type='text' onChange={handleOnChange}/>
                <h3 className={style.label}>About</h3>
                <textarea name="about" cols="40" rows="5" className={style.about} onChange={handleOnChange}></textarea>
            </div>
            <div className={style.price}>
                <h3 className={style.label}>Price:</h3>
                <input className={style.priceContainer} name='price' type='text' onChange={handleOnChange}/>
                <h4 className={style.label}>Catfood/s</h4>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={handleOnClick}>ADD CAT</button>
            </div>
        </div>
        <img src={testImage} alt={isMounted ? files[0].getFileEncodeBase64String(): 'there is no file mounted'} className={style.image}/>
       </section>
       
     );
}
 
export default AddCat;