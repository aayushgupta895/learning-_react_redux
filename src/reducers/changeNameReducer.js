const changeName = (state = [], action) =>{
    // console.log("inside addname");
    switch(action.type){
        case "add_name" : {
            return [
          ...state,
          {
            name: action.name,
            email: action.email,
            id: state.length + 1,
          },
        ];}
        case "remove_name" : return state.filter((item) => {
          return item.id != action.id;
        });
        default: return state;
    }
}

export default changeName