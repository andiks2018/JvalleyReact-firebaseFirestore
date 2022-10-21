import React from 'react'
import { firestore } from '../config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function InputNote() {

    //function untuk handle sbmit
    const handleSubmit = (e) => {

        //kita stop form mereload page
        e.preventDefault()

        //tanggal value dari masing2 field di form
        let text = e.target.text.value
        let author = e.target.author.value

        //munculkan di console
        console.info({ text, author })
        
        //clear value dari field
        e.target.text.value = ""
        e.target.author.value = ""

        //store data to firestore
        //membuat reference document //date.now agar mendapat id yang berubah dan string
        let notesRef = doc(firestore, "notes", Date.now().toString())

        //store data ke fiorestore
        setDoc(notesRef, {
            id: Date.now(),
            author: author,
            text : text
        })
        .then(res => { console.info("data berhasil distore ke firestore") })
        .catch(err =>{console.error(err)})
    }
  return (
      <div>
          <h1>Input Note ke firebase</h1>
          <form action="" className='noteForm' onSubmit={handleSubmit}>
              <div className='formGroup'>
                  <label htmlFor="text">text</label>
                  <textarea name="" id="text" cols="" rows=""></textarea>
              </div>
              <div className='formGroup'>
                  <label htmlFor="author">author</label>
                  <textarea name="" id="author" cols="" rows=""></textarea>
              </div>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}
