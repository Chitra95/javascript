const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//using push
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); //flash

//using concat
const allHeroes=marvel_heroes.concat(dc_heroes);
//console.log(allHeroes);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//note:push make changes in existing array
// concat stores value in new array ,original array is not changed

//its easy tp use 'spread' operator instead of concat 
const all_new_heroes=[...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//using flat(depth) return new array with subarrays concatenated until depth mentioned
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array); 
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/



  
  //used when data scrapping from websites
  //console.log(Array.isArray("Chitra")); //false
  //console.log(Array.isArray([2,3])); //true
  //console.log(Array.from("Chitra")); //[ 'C', 'h', 'i', 't', 'r', 'a' ]
  //console.log(Array.from({name:"CHITRA"})); //    []

  let score1=100
  let score2=200
  let score3=300
  //console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]

  
