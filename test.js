/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
const transformersMap = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]

      let ar = transformers.map(e => e.form)
      return ar
}
console.log(transformersMap())

/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
         {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        }
    ]

*/
const transformersFilter = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]

      let ar = transformers.filter(e => e.team == 'Autobot')
      return ar
}
console.log(transformersFilter())

/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
    Autobot: 2,
    Decepticon: 2
}
*/
const reduceTransformers = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]

      let obj = transformers.reduce((current, element) => {
        if(current[element.team]){
          current[element.team]++
        }
        else{
          current[element.team] = 1
        }
        return current
      }, {})

      return obj
}

console.log(reduceTransformers())

/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
const sumPositiveElement = () => {
    const input = [ 1, -4, 12, 0, -3, 29, -150]

    let total = input.filter(e => e > 0).reduce((sum, num) => sum + num)

    return total
}

console.log(sumPositiveElement())

/* 
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 }
const medianMean = () => {
    const input = [12, 46, 32, 64]
    let input1 = input.sort()

    let sum = input.reduce((total, num) => total + num)
    let mean = sum / input.length

    let half = input1.length / 2
    let median

    if(half % 2 == 0){
      median = (input1[half - 1] + input1[(half)]) / 2
    }
    else {
      median = input1[Math.floor(half)]
    }

    let obj = {mean, median}
    return obj
}

console.log(medianMean())
/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
    const input = 'George Raymond Richard Martin'
    let ar = input.split(' ')
    let fLetter = ar.map(e => e[0])
    let initials = fLetter.join('')
    
    return initials
}

console.log(nameInitials())
/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
    const input = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ]

      let ages = input.map(e => e.age)
      let oldest = Math.max(...ages)
      let youngest = Math.min(...ages)

      return [youngest, oldest, (oldest - youngest)]
}

console.log(ageDifference())