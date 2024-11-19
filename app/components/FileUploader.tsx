'use client'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { convertFileToUrl } from '../lib/utils'

type FileUploaderProps = {
    files: File[] | undefined,
    onChange: (files: File[]) => void
}
const FileUploader = ({files, onChange} : FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles : File[]) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload' >
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
            <Image src={convertFileToUrl(files[0])} alt="patient" width={1000} height={1000} className="max-h-[400px] overflow-hidden object-cover " />
        ) : (
            <>
                <Image src="/assets/icons/upload.svg" alt="patient" width={40} height={40} className=" " />
                <div className="file-upload_label">
                    <p className="text-14-regular">
                        <span className="text-green-500">
                            Click to upload
                        </span>or drap and drop 
                    </p>
                    <p>PNG, JPG, GIF (max. 800x400px) </p>
                </div>
            </>
        )
    }
    </div>
  )
}

export default FileUploader