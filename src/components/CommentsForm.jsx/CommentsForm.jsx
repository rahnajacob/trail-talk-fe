import { useState } from "react"

const CommetForm = ({handleAddComment}) => {
    const [formData, setFormData] = useState({ text : ''})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleAddComment(formData)
        setFormData ({ text : ''})
    }

    
    return(
        <form onSubmit={handleSubmit}>
          <label htmlFor="text-input">Comment:</label>
          <textarea
            required
            type="text"
            name="text"
            id="text-input"
            value={formData.text}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      )
}

export default CommetForm