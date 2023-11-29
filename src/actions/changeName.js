

export const addName = (name, email) =>{
    return {
        type : 'add_name',
        name, email
    }
}

export const removeName = (item) =>{
    return {
      type: "remove_name",
      id :   item.id
    };
}