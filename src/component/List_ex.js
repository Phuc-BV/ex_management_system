import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


export const List_ex = (props) => {
  
  let { keyword } = props

  const { exLover, removeEx } = useContext(GlobalContext)
  //console.log(exLover);

  //let [year, month, day] = str.split('-');
  let displayEx = exLover
  if (keyword == ''){
    
  }else{
    displayEx = exLover.filter(x => (x.name.includes(keyword)))
  }



  return (
    <div>
      <h3 className="mb-3">Danh sách người yêu cũ</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> STT </th>
            <th> Họ và tên </th>
            <th> Sinh nhật </th>
            <th> Ngày yêu </th>
            <th> Ngày chia tay </th>
            <th> Địa chỉ </th>
            <th> Số điện thoại </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {displayEx.map((ex, index) => (
            <tr key={ex.id}>
                <td scope="row"> {index + 1} </td>
                <td> {ex.name} </td>
                <td> {ex.birthday} </td>
                <td> {ex.start} </td>
                <td> {ex.end} </td>
                <td> {ex.address} </td>
                <td> {ex.phone} </td>
                <td className='d-flex justify-content-around'>
                    <Link to={`/edit/${ex.id.toString()}`} className="btn btn-warning"> Sửa </Link>
                    <button onClick={() => removeEx(ex.id)} className="btn btn-danger"> Xoá </button>
                </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  )
}
