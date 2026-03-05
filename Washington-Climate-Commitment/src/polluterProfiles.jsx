import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'

// export default function PolluterProfiles() {
//   const [polluters, setPolluters] = useState()
//   //const [isLoading, setIsLoading] = useState(true)
  
//   useEffect(() => {
//     const getData = async () => {
//       const querySnapshot = await getDocs(collection(db, "polluters"));
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data().name);
//       })
//     }

//     getData()


//     // const pollutersQuery = query(collection(db, 'polluters'))

//     // const newPolluters = []
//     // const unsub = onSnapshot(pollutersQuery, (snapshot) => {
//     //     //console.log(snapshot.docs)
//     //     snapshot.docs.forEach(doc => {
//     //         console.log("doc.data(): ", doc.data())
//     //         newPolluters.push({
//     //             data: doc.data(),
//     //             id: doc.id
//     //         })
//     //     })
//     //     setPolluters(newPolluters)
//     //     setIsLoading(false)
//     // });
   
//   }, [])

//   // if (isLoading) {
//   //       return <h1>Loading....</h1>
//   // }
  
//   console.log('polluters:', polluters)


  
//   return(
//     <div>
//       <h2> Polluter Profile for: x</h2>
//       {/* {polluters.map((polluter) => {
//         return (<div key={polluter.id}>
//             <p>{polluter.data}</p>
//         </div>)
//       })} */}
//     </div>
//   )
// }

export default function PolluterProfiles() {
  const [polluters, setPolluters] = useState()
  //const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // const getData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "polluters"));
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data().name);
    //   })
    // }

    // getData()

    const pollutersQuery = query(collection(db, 'polluters'))

    const newPolluters = []
    const unsub = onSnapshot(pollutersQuery, (snapshot) => {
      //console.log(snapshot.docs)
      snapshot.docs.forEach(doc => {
        //console.log("doc.data(): ", doc.data())
        newPolluters.push({
            data: doc.data(),
            id: doc.id
        })
      })
    })
    setPolluters(newPolluters)
    console.log('newPolluters:', newPolluters)
   
  }, [])
  
  


  
  return(
    <div>
      <h2> Polluter Profiles:  </h2>
      {/* {polluters.map((polluter) => {
        return (<div key={polluter.id}>
            <p>{polluter.data}</p>
        </div>)
      })} */}
    </div>
  )
}