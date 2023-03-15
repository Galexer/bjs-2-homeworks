function getArrayParams(...arr) {
  let min = -Infinity
  let max = Infinity
  let avg = 0
  max = Math.max.apply(null, arr)
  min = Math.min.apply(null, arr)
  avg = parseFloat((arr.reduce((prev, car) => {return prev + car}) / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0
  }
  return arr.reduce((prev, car) => {return prev + car})
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) {
    return 0
  }
  let max = Math.max.apply(null, arr)
  let min = Math.min.apply(null, arr)
  return max - min
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) {
    return 0
  }
  let sumEvenElement = 0
  let sumOddElement = 0
  for(let i = 0; i < arr.length ; i ++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0
  }
  let sumEvenElement = 0
  let countEvenElement = 0
  for(let i = 0; i < arr.length ; i ++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
      countEvenElement ++
    } 
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  for(let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i]
    let res = func(...arr)
    maxWorkerResult = Math.max(maxWorkerResult, res)
  }
  return maxWorkerResult
}
