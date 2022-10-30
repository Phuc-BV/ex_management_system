import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";


export const Edit_ex = (props) => {
  
  // react-router-dom v6 : cách lấy params
  let { id } = useParams(); 
  //console.log(id);
  let {register, handleSubmit, reset} = useForm();
  const { editEx, exLover } = useContext(GlobalContext)
  const navigate = useNavigate();
  
  // get object display to form 
  let editObject = exLover.find(x => x.id == id)
  //console.log(editObject);
  // sử dụng useEffect và reset để show data lên form 
  useEffect(() => {
    reset({...editObject});
  }, [editObject])

  const onSubmitEdit = (data) => {
    const modifyEx = {
        id: id,
        name: data.name,
        birthday: data.birthday,
        start: data.start,
        end: data.end,
        address: data.address,
        phone: data.phone
    }
    //console.log(modifyEx);
    editEx(modifyEx)
    navigate('/');
  }

  return (
    <div className='add-component justify-content-center'>
        <div className="alert alert-info" role="alert">
            CHỈNH SỬA THÔNG TIN NGƯỜI YÊU CŨ @@~
        </div>
        <div className='text-left pl-1'>
            <Link to='/'  className="btn btn-primary"> Quay lại </Link>
        </div>
        <center>
            <form onSubmit = { handleSubmit(onSubmitEdit) }>
                <div className="form-group row w-50">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label text-left">Name:</label>
                    <div className="col-sm-10">
                        <input {...register('name')} type="text" className="form-control" id="inputName" placeholder="Nhập họ và tên..."/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputBirthday" className="col-sm-2 col-form-label text-left">Birthday:</label>
                    <div className="col-sm-10">
                        <input {...register('birthday')} type="date" className="form-control" id="inputBirthday"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputStartDay" className="col-sm-2 col-form-label text-left">Start:</label>
                    <div className="col-sm-10">
                        <input {...register('start')} type="date" className="form-control" id="inputStartDay"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputEndDay" className="col-sm-2 col-form-label text-left">End day:</label>
                    <div className="col-sm-10">
                        <input {...register('end')} type="date" className="form-control" id="inputEndDay"/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label text-left">Address:</label>
                    <div className="col-sm-10"> 
                        <input {...register('address')} type="text" className="form-control" id="inputAddress" placeholder="Nhập địa chỉ..."/>
                    </div>
                </div>
                <div className="form-group row w-50">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label text-left">Phone:</label>
                    <div className="col-sm-10"> 
                        <input {...register('phone')} type="tel" maxLength="25" className="form-control" id="inputPhone" placeholder="Nhập số điện thoại..."/>
                    </div>
                </div>
                <div className='form-group row w-50 d-flex justify-content-between'>
                    <button type="submit" className="btn btn-success ml-3">Chỉnh sửa</button>
                    <button type="clear" className="btn btn-warning mr-3">RESET</button>
                </div>
            </form>
        </center>
    </div>
  )
}
