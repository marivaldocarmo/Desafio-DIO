const user ={
    name: 'Marivaldo',
    lastName: 'Carmo'
};
function getUserWithFullName(user){
    return {
        user,
        fullName: `${user.name} ${user.lastName}`
    }
  }

const userWithFullName=getUserWithFullName(user);
console.log(userWithFullName, user);

