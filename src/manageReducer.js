
const manageArr = (state, action)=>{
    if(action.type == 'removeName'){
        return state.filter(item=>{
            return item.id != action.id
        })
    }else if(action.type == 'addName'){
        const ans =  [
            ...state,
            {
                name : action.name,
                email : action.email,
                id : state.length+1,
            }
        ]
        console.log(ans);
        return ans
    }
}

export default manageArr