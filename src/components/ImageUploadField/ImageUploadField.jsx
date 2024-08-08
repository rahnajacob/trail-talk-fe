import styles from './ImageUploadField.module.css'


const uploadURL = import.meta.env.VITE_CLOUDINARY_URL
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

const ImageUploadField = ({ name, label, images, handleImageUpload }) => {

    const handleSelectImage = async (e) => {
        const formData = new FormData()
        const file = e.target.files[0]
        formData.append('file', file)
        formData.append('upload_preset', uploadPreset)

        const res = await fetch(uploadURL, {
            method: 'POST',
            body: formData
        })
        const imageData = await res.json()
        handleImageUpload({
            img: imageData.secure_url,
            description: file.name})
    }


    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type='file'
                name={name}
                id={name}
                accept='image/*'
                onChange={handleSelectImage}
            />
        </>

    )
}

export default ImageUploadField