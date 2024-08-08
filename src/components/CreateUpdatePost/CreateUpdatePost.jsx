import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import * as postService from "../../services/postService"
import './CreateUpdatePost.css'
import ImageUploadField from "../ImageUploadField/ImageUploadField"


const CreateUpdatePost = ({ handleAddPost, handleUpdatePost }) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        city: '',
        country: '',
        images: []
    })
    const nav = useNavigate()
    const { postID } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const postData = await postService.showPost(postID)
            setFormData(postData)
        }
        if (postID) fetchPost()
    }, [postID])
     const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // const handleImageUpload = (value) => {
    //     setFormData({...formData, images: [...formData.images, value]})//value was prev set to imageObject
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('From Component', formData)
        if (postID) {
            ('handleup inside handle submit', formData, postID)
            handleUpdatePost(formData, postID)
            nav('/posts')        
        } else {
            console.log('handleadd inside handle submit', formData, postID)
            handleAddPost(formData)
            nav('/posts')
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="create-form-flex">
                <h1>{postID ? 'Edit Post' : 'New Post'}</h1>
                <label htmlFor='title'>Post Title: </label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor='body'>Description: </label>
                <textarea
                    type='text'
                    name='body'
                    id='body'
                    value={formData.body}
                    onChange={handleChange}
                />
                <label htmlFor='city'>Location City: </label>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={formData.city}
                    onChange={handleChange}
                />
                <label htmlFor='country'>Location Country: </label>
                <input
                    type='text'
                    name='country'
                    id='country'
                    value={formData.country}
                    onChange={handleChange}
                />
                <div>
                    <ImageUploadField 
                    name='images'
                    label='Attach Image'
                    images={formData.images}
                    formData={formData}
                    setFormData={setFormData}
                    />
                </div>


                <button className='create-btn' type='submit'>
                        Submit
                </button>

            </form>
        </main>
    )
}

export default CreateUpdatePost