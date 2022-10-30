import React, { createContext } from 'react'
import { Context, useReducer } from 'react'

import AppReducer from './AppReducer'

// initial state 
const initialState = {
    exLover: [
      {
        id: 1,
        name: 'Nguyễn Diệu Linh',
        birthday: '1999-05-20',
        start: '2015-10-12',
        end: '2019-10-12',
        address: 'Hà Nội',
        phone: '0123456789'
      },
      {
        id: 2,
        name: 'Nguyễn Huyền Linh',
        birthday: '2000-05-20',
        start: '2015-10-12',
        end: '2019-10-12',
        address: 'Hà Nội',
        phone: '0123456789'
      },
      {
        id: 3,
        name: 'Nguyễn Ngọc Hân',
        birthday: '2001-05-20',
        start: '2015-10-12',
        end: '2019-10-12',
        address: 'Hà Nội',
        phone: '0123456789'
      },
      {
        id: 4,
        name: 'Lê Thị Hà',
        birthday: '2001-05-20',
        start: '2015-10-12',
        end: '2019-10-12',
        address: 'Hà Nội',
        phone: '0123456789'
      }
    ],
    
};

// context ... đối tượng context là một đối tượng lưu giữ giá trị context hiện tại và có thể được đăng ký.

export const GlobalContext = createContext(initialState);

// provider: là một component của React cung cấp giá trị, nó lấy từ đối tượng context

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // các function
    //remove object ex
    const removeEx = (id) => {
      dispatch({
        type: 'Remove_Ex',
        payload: id
      })
    }

    // add 
    const addEx = (ex) => {
      dispatch({
        type: 'Add_Ex',
        payload: ex
      })
    }

    // edit 
    const editEx = (modifiedEx) => {
      dispatch({
        type: 'Edit_Ex',
        payload: modifiedEx
      })
    }


    return (
        <GlobalContext.Provider value={
            {  
              // các object truyền về khi cho các children
               removeEx,
               addEx,
               editEx,
               
               exLover: state.exLover,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}