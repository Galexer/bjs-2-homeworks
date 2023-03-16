function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
        return false
    }
  }
  return true
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