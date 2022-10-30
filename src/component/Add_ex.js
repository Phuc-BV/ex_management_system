import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { v4 as uuid } from 'uuid';


export const Add_ex = () => {

  let {register, handleSubmit } = useForm();
  
  const { addEx } = useContext(GlobalContext)
  // khai báo history
  // const history = useHistory;
  // In react-router-dom v6 useHistory is replaced by useNavigate. Nguồn stack overflow
  const navigate = useNavigate();
  
  const onSubmitAdd = (data) => {
    const newEx = {
        id: uuid(),
        name: data.name,
        birthday: data.birthday,
        start: data.start,
        end: data.end,
        address: data.address,
        phone: data.phone
    }
    //console.log(data.name);
    //console.log(newEx.id);
    addEx(newEx)
    navigate('/');
  }

  return (
    <div className='add-component'>
        <div className="alert alert-info" role="alert">
            THÊM MỚI NGƯỜI YÊU CŨ @@~
        </div>
        <div className='text-left pl-1'>
            <Link to='/'  className="btn btn-primary"> Quay lại </Link>
        </div>
        <center>
            <form onSubmit = { handleSubmit(onSubmitAdd) }>
                <div className="form-group row w-50">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label text-left"> Name: </label>
                    <div className="col-sm-10">
                        <input {...register('name')} type="text" className="form-control" id="inputName" placeholder="Nhập họ và tên..."/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputBirthday" className="col-sm-2 col-form-label text-left"> Birthday: </label>
                    <div className="col-sm-10">
                        <input {...register('birthday')} type="date" className="form-control" id="inputBirthday"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputStartDay" className="col-sm-2 col-form-label text-left"> Start: </label>
                    <div className="col-sm-10">
                        <input {...register('start')} type="date" className="form-control" id="inputStartDay"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputEndDay" className="col-sm-2 col-form-label text-left"> End day: </label>
                    <div className="col-sm-10">
                        <input {...register('end')} type="date" className="form-control" id="inputEndDay"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label text-left"> Address: </label>
                    <div className="col-sm-10"> 
                        <input {...register('address')} type="text" className="form-control" id="inputAddress" placeholder="Nhập địa chỉ..."/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label text-left"> Phone: </label>
                    <div className="col-sm-10"> 
                        <input {...register('phone')} type="tel" maxLength="25" className="form-control" id="inputPhone" placeholder="Nhập số điện thoại..."/>
                    </div>
                </div>
                <div className='form-group row w-50 d-flex justify-content-between'>
                    <button type="submit" className="btn btn-success ml-3"> Thêm mới </button>
                    <button type="button" className="btn btn-warning mr-3"> RESET </button>
                </div>
            </form>
        </center>
    </div>
  )
}
