function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index])) 
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((acc, el, ind, arr) => {
    acc += el.age
    if(ind === arr.length - 1) {
        return acc / arr.length
    }
    return acc
  }, 0)
}