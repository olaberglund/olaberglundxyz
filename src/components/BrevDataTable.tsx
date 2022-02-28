import React, { useEffect } from 'react'
import { storage } from '../lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage'

function BrevDataTable() {

  useEffect(() => {
    const lettersRef = ref(storage, 'Brev/Blodröd öppning väntas(1).docx');
    getDownloadURL(lettersRef)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        console.log(url);
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      })
  }, [])

  return (
    <div>Ladda ned?</div>
  )
}

export default BrevDataTable