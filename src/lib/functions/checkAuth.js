import { getCurrentBrowserFingerPrint } from '@rajesh896/broprint.js'
import { onMount } from 'svelte'
export async function checkAuth () {
  onMount(async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  })
  // // Get the browser fingerprint
  // getCurrentBrowserFingerPrint().then(fingerprint => {
  //   document
  //     .getElementById('browser-fingerprint')
  //     .setAttribute('data-value', fingerprint)
  //   return fingerprint
  // })
  // onMount(async () => {
  //   const fingerprint = document
  //     .getElementById('browser-fingerprint')
  //     .getAttribute('data-value')
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const response = await fetch(`${process.env.API_URL}/user/checkauth`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify({ fingerprint: await fingerprint })
  //     })
  //     const data = await response.json()
  //     // if response is 200 then user is authenticated
  //     if (data.status === 'success') {
  //       console.log('User is authenticated')
  //       return true
  //     }
  //     console.log('User is not authenticated')
  //     window.location.href = '/login'
  //     return false
  //   } else {
  //     console.log('User is not authenticated')
  //     window.location.href = '/login'
  //     return false
  //   }
  //   // const response = await fetch('http://localhost:3000/user/checkauth', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify({ fingerprint: await fingerprint })
  //   // })
  //   // const data = await response.json()
  //   // if (data.status === 'success') {
  //   //   console.log('User is authenticated')
  //   //   return true
  //   // }
  //   // console.log('User is not authenticated')
  //   // window.location.href = '/login'
  //   // return false
  // })
}
