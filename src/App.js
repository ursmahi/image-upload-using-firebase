import './App.css';
import {useState, useEffect} from 'react'
import {storage} from './firebase'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
function App() {
  const imageListRef = ref(storage, 'images/')
  const [imageUpload , setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])
  const uploadImage = ()=>{
    if (imageUpload === null) return;
    const imagRef = ref(storage,`images/${imageUpload.name + v4()}`)
    uploadBytes(imagRef,imageUpload).then((snapshort)=>{
      getDownloadURL( snapshort.ref).then((url) =>{
        setImageList( (prev)=>[url,...prev])
      })
      alert('uploaded')
    })
  };
  useEffect( ()=>{
     listAll(imageListRef).then( (response)=>{
       response.items.forEach( (item)=>{
         getDownloadURL(item).then((url)=>{
            setImageList( (prev)=>[url, ...prev])
         })
       })
     }

     )
    },[])
  return (
    <div className="App">
      <input type="file" onChange={ (event)=>{setImageUpload(event.target.files[0])}} />
      <button onClick={uploadImage}>Upload Image</button>
      {imageList.map( (url)=>{
        return <img src={url} />
      })}
    </div>
  );
}

export default App;
