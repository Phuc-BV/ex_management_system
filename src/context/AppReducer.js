export default (state, action) => {
    switch (action.type) {
        //điều hướng các action
        case 'Remove_Ex': {
            return {
                exLover : state.exLover.filter(x => x.id !== action.payload)
            }
        }
        case 'Add_Ex': {
            return {
                exLover : [...state.exLover, action.payload]
            }
        }
        case 'Edit_Ex': {
            const updateEx = action.payload
            //console.log(updateEx);
            let obj = state.exLover.find(x => x.id == updateEx.id)
            obj.id = updateEx.id
            obj.name = updateEx.name
            obj.birthday = updateEx.birthday
            obj.start = updateEx.start
            obj.end = updateEx.end
            obj.address = updateEx.address
            obj.phone = updateEx.phone

            return state;
        }

        default: 
            return state;
    }
}