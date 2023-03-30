import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [images, setImages] = useState(["https://bepmspvqexscziigxbpv.supabase.co/storage/v1/object/public/product-thum/public/kekrfyqmaeTshirt1.jpg","https://bepmspvqexscziigxbpv.supabase.co/storage/v1/object/public/product-thum/public/ljqzxml02wTshirt1.jpg"]);
  
  function handleImageUpload(event) {
    const files = event.target.files;
    const newImages = Array.from(files);
    setImages([...images, ...newImages]);
  }
  
  function handleImageDelete(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(images);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image-upload">Upload Images:</label>
        <input id="image-upload" type="file" accept="image/*" multiple onChange={handleImageUpload} />
      </div>
      {images.map((image, index) => (
        <div key={index}>
          {typeof image === 'string' ? (
            <img style={{height:50,width:50}} src={image} alt={`Image ${index}`} />
          ) : (
            <img  style={{height:50,width:50}}  src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          )}
          <button type="button" onClick={() => handleImageDelete(index)}>Delete</button>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
