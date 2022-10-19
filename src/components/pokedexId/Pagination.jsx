import React from 'react'
import './styles/pagination.css'


const Pagination = ({page,pageslength,setpage}) => {
  
const pagesPerblock = 8
const currentBlock = Math.ceil(page / pagesPerblock)
const blockLength = Math.ceil(pageslength/pagesPerblock)

const arrpages= []
const initialpage = (currentBlock -1)* pagesPerblock + 1
//initialpage +pagesPerblock -1
const limitpage= blockLength===currentBlock ? pageslength : currentBlock * pagesPerblock

for (let i = initialpage;i<=limitpage;i++){
arrpages.push(i)

}
const handleprevius=()=>{
setpage(page-1)

}

const handlenext=()=>{
  setpage(page+1)
  
  }

  const handlepage=(currentpage)=>{
    setpage(currentpage)
    
    }

    return (
    <div className='pagination'>
      {
        page>1 &&
        <div onClick={handleprevius} className='pagination__prev pagination__active'>&#60;</div>

      }
        <ul className='pagination__container'>
          {
            arrpages.map(e=>(
              <li onClick={()=>handlepage(e)} className={`pagination__page ${page===e && 'pagination__active' }`} key={e}>{e}</li>
            ))
          }
        </ul>
        {
          page<pageslength &&
        <div onClick={ handlenext} className='pagination__next pagination__active'>&#62;</div>
        }
    </div>
  )
}

export default Pagination