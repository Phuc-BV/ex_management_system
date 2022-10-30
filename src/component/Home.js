import React from 'react'
import { Link } from 'react-router-dom'
import { List_ex } from './List_ex';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


export const Home = () => {
  let {register, handleSubmit } = useForm();

  let [keyword, setKeyword] = useState('');
  //setKeyword('')
  const onSubmitSearch = (key) => {
    //console.log(key.keyword)
    setKeyword(key.keyword)
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <a className="navbar-brand" href="http://localhost:3000/">Ex Management System</a>
        <form onSubmit = { handleSubmit(onSubmitSearch) } className="form-inline my-2 my-lg-0">
          <input {...register('keyword')} className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm nyc theo tên" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </button>
        </form>
        <Link to='/add'  className="btn btn-primary"> Thêm mới Ex </Link>
      </nav>
      <List_ex keyword={keyword}/>
    </div>
    
  )
}
