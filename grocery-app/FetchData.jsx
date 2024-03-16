/*import React from 'react'
import  useEffect  from 'react'
import  useState  from 'react'

function FetchData() {
    const [records, setRecords] = useState([])
  
    useEffect(() =>{
      fetch('http://localhost:5555/groceryApp/store/item/product')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <ul>
                {records.map((list, index)=> (
                    <li key={index}>{list.product_upc} | {list.product_name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData*/