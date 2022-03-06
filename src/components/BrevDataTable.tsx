import React, { useEffect } from 'react'
import { storage } from '../lib/firebase/firebase';
import { ref, list } from 'firebase/storage'

function BrevDataTable() {

  useEffect(() => {
    (async () => {
      const lettersRef = ref(storage, 'Brev');
      const firstPage = await list(lettersRef, { maxResults: 10 });
      firstPage.items.forEach((item) => console.log(item.name));
    })();
  }, [])

  return (
    <div>Ladda ned?</div>
  )
}

export default BrevDataTable