let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('AHHHHHH!');
    }
}

user.age // 0(1)
user.spell = 'abra kadabra'
user.scream();

//

// Keys method
keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

  // Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++){

    }
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])


// Linked List

const basket = ['apples', 'grapes', 'pears'];

linked list: apples --> grapes --> pears

apples
8947 --> grapes
    8742 --> pears
        372 --> null
