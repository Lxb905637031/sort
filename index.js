function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

Array.prototype.bubble = function bubble() {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        swap(this, j, j+1)
      }
    }
  }
  return this
}

Array.prototype.select = function select() {
  for (let j = 0; j < this.length - 1; j++) {
    let min = j
    let temp = null
    // 找到比当前项还小的索引
    for(let i = min + 1; i < this.length; i++) {
      if (this[i] < this[min]) {
        min = i
      }
    }
    // 让最小项和当前首位交换位置
    swap(this, min, j)
  }
  return this
}

Array.prototype.insert = function insert() {
  let handle = []
  handle.push(this[0])

  for(let i = 1; i < this.length; i++) {
    let A = this[i]
    for (let j = handle.length - 1; j >= 0; j--) {
      let B = handle[j]
      if (A > B) {
        handle.splice(j + 1, 0, A)
        break
      }
      if (j === 0) {
        handle.unshift(A)
      }
    }
  }
  return handle
}

Array.prototype.quick = function quick() {
  if (this.length <= 1) {
    return this
  }
  let middleIndex = Math.floor(this.length / 2)
  let middleValue = this.splice(middleIndex, 1)[0]
  let leftarr = []
  let rightarr = []
  for (let i = 0; i < this.length; i++) {
    let item = this[i]
    item < middleValue ? leftarr.push(item) : rightarr.push(item)
  }
  return quick(leftarr).concat(middleValue, quick(rightarr))
}