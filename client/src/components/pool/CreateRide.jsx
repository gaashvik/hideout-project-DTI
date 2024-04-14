import React, { useState } from 'react'
import axios from 'axios';
import { get } from 'mongoose';

const CreateRide = () => {

    const [formData, setFormData] = useState({
        // location: '',
        description: '',
        photos: [],
        music: null,
      });
      const [imageUploadError, setImageUploadError] = useState(false);
      const [photos, setPhotos] = useState([]);
      const [music, setMusic] = useState(null);
      const [files, setFiles] = useState('Choose File');
      console.log(files);
      console.log(formData);
    
      const handleImageSubmit = (e) => {
        if (files.length>0 && files.length<6){
          const promises = [];
          for (let i = 0; i < files.length; i++) {
            promises.push(storeImage(files[i]));
          }
          Promise.all(promises).then((urls) => {
            setFormData({...formData, photos : formData.photos.concat(urls)});
            setImageUploadError(false);
          }).catch((error) => {
            // console.log(error);
            setImageUploadError('Error uploading images');
        } );
      }
      else{
        setImageUploadError('Please upload between 1 and 5 images');
      }
    
      }
    
      const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage(app)
          const fileName = new Date().getTime() + file.name;
          const storageRef = ref(storage, fileName);
          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error)=>{
            console.log(error);
            reject(error);
          },
          ()=>{
            console.log('success');
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              resolve(downloadURL);
            } );
          }
          );
      } );
      } 

  return (
    <div className="max-w mx-auto mt-8 p-32 bg-white rounded-lg shadow-md">
    <form className="space-y-6">
    <div>
        <label htmlFor="start" className="block text-sm font-medium text-gray-700">
        Start
        </label>
        <input
          id="start"
          name="start"
          type="text"
          // value={location}
          // onChange={handleLocationChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Where To"
        />
      </div>
      <div>
        <label htmlFor="end" className="block text-sm font-medium text-gray-700">
        End
        </label>
        <input
          id="end"
          name="end"
          type="text"
          // value={location}
          // onChange={handleLocationChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Where From"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          // value={location}
          // onChange={handleLocationChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter location"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          // value={description}
          // onChange={handleDescriptionChange}
          rows="3"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter description"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
  </div>
  )
}

export default CreateRide