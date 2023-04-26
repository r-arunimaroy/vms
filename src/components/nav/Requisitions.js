import React, { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import axios from "axios"

const Requisitions = () => {
  const [search, setSearch] = useState("")
  const [countries, setCountrie] = useState([])
  const [filteredCountries, setFilteredCountries] = useState("")
  
  const getCountries = async()=>{
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountrie(response.data)
      setFilteredCountries(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const column = [
    {
      name: "Country Names",
      selector: (row)=> row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row)=> row.nativeName,
    },
    {
      name: "Capital",
      selector: (row)=> row.capital,
    },
    {
      name: "Population",
      selector: (row)=> row.population,
    },
    {
      name: "Flag",
      selector: (row)=> <img width={50} height={40} src={row.flag} />,
    },
    {
      name: "Action",
      cell: (row)=> <button className='btn btn-primary' onClick={()=> alert(row.alpha2Code)}>Edit</button>,
    }
  ]
  useEffect(()=>{
    getCountries();
  },[])
  useEffect(() => {
    const result = countries.filter(country => {
      return country.name.toLowerCase().match(search.toLowerCase());
    })
    setFilteredCountries(result);
  },[search]);

  return (
    <>
     <h1>Requisitions Page</h1>
     < DataTable 
    columns={column} 
    data={filteredCountries} 
    pagination 
    fixedHeader 
    fixedHeaderScrollHeight='450px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    actions={<button className='btn btn-sm btn-info'>Export</button>}
    subHeader
    subHeaderComponent={<input type='text' placeholder='Search here' className='w-25 form-control' value={search} 
    onChange={(e)=>setSearch(e.target.value)} />} />
    </>
  )
}

export default Requisitions