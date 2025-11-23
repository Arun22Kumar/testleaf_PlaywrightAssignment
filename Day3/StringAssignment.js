
let s = "Hello World"
let arr = s.split(" ")
console.log((arr[arr.length-1]).length)
console.log(` The last word is ${arr[arr.length-1]} with length ${(arr[arr.length-1]).length}.`)

let s1 = "   fly me   to   the moon  "
let arr1 = s1.trim().split(" ")
console.log((arr1[arr1.length-1]).length)
console.log(` The last word is ${arr1[arr1.length-1]} with length ${(arr1[arr1.length-1]).length}.`)

function anagram(a,b) {
if(a.length!==b.length) return false

return a.split('').sort().join('') === b.split('').sort().join('')
}

console.log(anagram(`listen`,`silent`))
console.log(anagram(`hello`,`world`))