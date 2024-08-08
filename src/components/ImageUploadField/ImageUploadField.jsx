import styles from './ImageUploadField.module.css'
const uploadURL = import.meta.env.VITE_CLOUDINARY_URL
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

const ImageUploadField = ({ name, label, images, formData, setFormData }) => {

    const handleSelectImage = async (e) => {

        const files = Array.from(e.target.files)

        const data = await Promise.all(files.map(async (file) => {
            const imageForm = new FormData()
            imageForm.append('file', file)
            imageForm.append('upload_preset', uploadPreset)
            const res = await fetch(uploadURL, {
                method: 'POST',
                body: imageForm
            })
            return res.json() //const imageData = await res.json()
        }))

        setFormData({
            ...formData,
            images: data.map(image => image.secure_url)
        })
    }
    // const res = await fetch(uploadURL, {
    //     method: 'POST',
    //     body: formData
    // })
    // const imageData = await res.json()
    // handleImageUpload({
    //     img: imageData.secure_url,
    //     description: files.name
    // })
    return (
        <>
            {images.length > 0 &&
                images.map(image => {
                    return (
                        <div
                            key={image}
                            className='post-images'>
                        </div>
                    )
                })
            }
            <>
                <label htmlFor={name}>{label}</label>
                <input
                    type='file'
                    name={name}
                    id={name}
                    multiple
                    accept='image/*'
                    onChange={handleSelectImage}
                />
            </>
        </>
    )
}


export default ImageUploadField