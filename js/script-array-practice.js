// //STEP 1
// const favorites = ["Harry Potter", "Back to the Future", "Star Wars", "Ender's Game", "Interstellar"]
// console.log(favorites[1])
//STEP 2
// const movies = new Array(5)
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "Star Wars"
// movies[3] = "Ender's Game"
// movies[4] = "Interstellar"
// console.log(movies[0])
// //STEP 3
// const movies = new Array(5)
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// console.log(movies.length)
// //STEP 4
// const movies = []
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// delete movies[0]
// console.log(movies)
//STEP 5
// const movies = []
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// movies[6] = "Iron Man"
// for (m in movies) console.log(movies[m])
//STEP 6
// const movies = []
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// movies[6] = "Iron Man"
// for (m of movies) console.log(m)
//STEP 7
// const movies = []
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// movies[6] = "Iron Man"
// for (m of movies.sort()) console.log(m)
//STEP 8
// const movies = []
// movies[0] = "Harry Potter"
// movies[1] = "Back to the Future"
// movies[2] = "This is The End"
// movies[3] = "Star Wars"
// movies[4] = "Ender's Game"
// movies[5] = "Interstellar"
// movies[6] = "Iron Man"
// const leastFavMovies = ["Transformers", "Reel Steel", "The Green Hornet"]
// console.log('Movies I like:\n\n')
// for (m of movies) console.log(m + '\n')
// console.log('\nMovies I regret watching:\n\n')
// for (m of leastFavMovies) console.log(m + '\n')
//STEP 9
// const favMovies = ["Harry Potter", "Back to the Future", "This is The End", "Star Wars", "Ender's Game", "Interstellar", "Iron Man"]
// const leastFavMovies = ["Transformers", "Reel Steel", "The Green Hornet"]
// const movies = favMovies.concat(leastFavMovies)
// for (i in movies.sort()) {
//     console.log(movies[movies.length - i])
// }
//STEP 10
// const favMovies = ["Harry Potter", "Back to the Future", "This is The End", "Star Wars", "Ender's Game", "Interstellar", "Iron Man"]
// const leastFavMovies = ["Transformers", "Reel Steel", "The Green Hornet"]
// const movies = favMovies.concat(leastFavMovies)
// const lastItem = (arr) => { return arr[arr.length - 1] }
// console.log(lastItem(movies))
//STEP 11
// const favMovies = ["Harry Potter", "Back to the Future", "This is The End", "Star Wars", "Ender's Game", "Interstellar", "Iron Man"]
// const leastFavMovies = ["Transformers", "Reel Steel", "The Green Hornet"]
// const movies = favMovies.concat(leastFavMovies)
// const firstItem = arr => arr[0]
// console.log(firstItem(movies))
//STEP 12
// const favMovies = ["Harry Potter", "Back to the Future", "This is the End", "Star Wars", "Ender's Game", "Interstellar", "Iron Man"]
// const leastFavMovies = ["Transformers", "Reel Steel", "The Green Hornet"]
// const movies = favMovies.concat(leastFavMovies)
// const indices = []
// for (m of leastFavMovies) {
//     indices.push(movies.indexOf(m))
// }
// const otherMovies = ["Lord of the Rings", "Tenet", "Eragon"]
// for (i in indices) {
//     movies[indices[i]] = otherMovies[i]
// }
// console.log(movies)
//STEP 13
// const favMovies = [
//     ["Harry Potter", 1],
//     ["Back to the Future", 2],
//     ["This is The End", 3],
//     ["Star Wars", 4],
//     ["Ender's Game", 5]
// ]
// let m = []
// for (m of favMovies) {
//     for (i in m.filter(e => typeof e === 'string')) {
//         console.log(m[i])
//     }
// }
//STEP 14
// const employees = ["John Doe", "Jane Chatwin", "Alice Cooper"]
// const result = ((arr) => {
//     let r = 'Employees:\n\n'
//     for (e of employees) r += (e + '\n')
//     return r
// })(employees)
// console.log(result)
//STEP 15
// const filterValues = arr => arr.filter(e => ![false, null, 0, ''].includes(e))
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//STEP 16
// const randomItem = arr => arr[Math.floor(Math.random() * arr.length)]
// console.log(randomItem(["John Doe", "Jane Chatwin", "Alice Cooper"]))
//STEP 17
// I know this isn't technically an efficient solution but it was fun to write
// const recursiveLargestNumber = (arr) => {
//     const first = arr.shift()
//     if (arr.length) {
//         const l = recursiveLargestNumber(arr)
//         // console.log('first: ', first, '\nl: ', l)
//         return first > l ? first : l
//     }
//     return first
// }
// const test = Array(100)
// for (i = 0; i < test.length; i++) {
//     test[i] = Math.floor(test.length * Math.random())
// }
// console.log([...test])
// console.log(recursiveLargestNumber(test))