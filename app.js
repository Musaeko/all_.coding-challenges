const text = document.getElementById('text')
const btn = document.getElementById('btn')
let isValid = true

function checkemail() {
  let settext = text.value

  if (settext.includes('@') && settext.includes('.')) {
    if (settext.includes('@')) {
      let parttext = settext.split('@')

      if ((parttext[0].length > 0) & (parttext[1].length > 0)) {
        let parttext2 = parttext[1].split('.')

        if (
          parttext2[0].length > 0 &&
          (parttext2[1].length == 2 || parttext2[1].length == 3)
        ) {
          isValid = true
        } else {
          isValid = false
        }
      } else {
        isValid = false
      }
    } else {
      isValid = false
    }
  } else {
    isValid = false
  }

  console.log(`this email is ${isValid}`)
}

btn.addEventListener('click', checkemail)

// ! count digits

const low = document.getElementById('lownumber')
const high = document.getElementById('highnumber')
const search = document.getElementById('searchnumber')
const btn1 = document.getElementById('btn1')

function count() {
  let counter = []
  for (let i = +low.value; i < +high.value + 1; i++) {
    String(i).includes(+search.value) && counter.push(i)
  }
  console.log(counter)
}

btn1.addEventListener('click', count)

// !  Lottery Game

const btn2 = document.getElementById('btn2')

function getNumber() {
  randomNumber = Math.floor(Math.random() * 50) + 1
  return randomNumber
}

btn2.addEventListener('click', () => {
  let lotery = []
  for (let i = 0; i < 6; i++) {
    lotery.push(getNumber())
  }
  console.log(lotery.sort((a, b) => a - b))
})

// ! TR Identity Number Validation
const trid = document.getElementById('tr')
const btn3 = document.getElementById('btn3')

btn3.addEventListener('click', () => {
  let id = trid.value.split('')
  let sum1 = 0
  let sum2 = 0
  let isValid = false
  if (id.length == 11 && id[0] != 0) {
    for (let i = 0; i < 9; i = i + 2) {
      sum1 += +id[i]
      sum2 += +id[i + 1]
    }

    sum2 = sum2 - +id[9]

    if (id[9] == (sum1 * 7 - sum2) % 10) {
      if (id[10] == (sum1 + sum2 + +id[9]) % 10) {
        isValid = true
      }
    }
  }
  console.log(`tr id is ${isValid ? 'correct ' : ' false '} `)
})

// !  Simple Calculator

const first = document.getElementById('firstnumber')
const second = document.getElementById('secondnumber')
const operator = document.getElementById('operator')
const btn4 = document.getElementById('calculate')

btn4.addEventListener('click', () => {
  let result = 0
  switch (operator.value) {
    case '+':
      result = +first.value + +second.value
      break

    case '-':
      result = first.value - +second.value
      break

    case '*':
      result = first.value * +second.value
      break

    case '/':
      result = first.value / +second.value
      break

    default:
      alert('yanlis girdiniz')
      break
  }
  console.log(result)
})

// ! Student Registration

const data = [
  'C1234 - John Doe, London, Full-Stack',
  'C2345 - Jane Doe, London, Data-Science',
  'C2346 - Mary Ann, Paris, AWS-Devops',
  'C2347 - Adam Smith, Texas, AWS-Devops',
  'C2444 - Michael Great, Arizona, Full-Stack',
  'C2555 - William Cash, Manchester, Data-Science',
  'C2455 - Patrick Jane, Madrid, Full-Stack',
]

const div = document.getElementById('table')
const tablebody = document.createElement('table')
const headtable = `
<tr>
  <th>st nmbr</th>
  <th>first name</th>
  <th>last name</th>
  <th>location</th>
  <th>path</th>
</tr>`

tablebody.innerHTML = headtable
div.appendChild(tablebody)

data.forEach((datainfo) => {
  let rowtable = datainfo.split(',')
  let rowresult = rowtable[0].split('-')

  let rowname = rowresult[1].split(' ')
  for (let index = 0; index < 1; index++) {
    const inner = `
      <tr>
        <td>${rowresult[0]}</td>
        <td>${rowname[1]}</td>
        <td>${rowname[2]}</td>
        <td>${rowtable[1]}</td>
        <td>${rowtable[2]}</td>
      </tr>`

    tablebody.innerHTML += inner
  }
})

// ! Capital Letters

const area = document.getElementById('area')
const btn5 = document.getElementById('btn5')

btn5.addEventListener('click', () => {
  let result = []
  let arrArea = area.value.trimEnd().split(' ')
  for (const iterator of arrArea) {
    let newword = iterator.toLowerCase()

    result.push(newword[0].toUpperCase() + newword.slice(1).toLowerCase())
    console.log(result.join(' '))
  }
})

// ! Vowels in a stri

const area2 = document.getElementById('text2')
const btn6 = document.getElementById('btn6')
let counter2 = 0
btn6.addEventListener('click', () => {
  let area2rslt = area2.value
  for (let i = 0; i < area2rslt.length; i++) {
    if (
      area2rslt[i].includes('a') ||
      area2rslt[i].includes('e') ||
      area2rslt[i].includes('i') ||
      area2rslt[i].includes('o') ||
      area2rslt[i].includes('u')
    ) {
      counter2 += 1
    }
  }
  const newtag = document.createElement('h2')
  newtag.innerText = `there are ${counter2} vowels in ${area2rslt} `
  document.getElementById('vowels').appendChild(newtag)
})

// ! Draw Diamond with Star Character

const starsnumber = document.getElementById('stars')
const outline = document.getElementById('outline')

function reverse(s) {
  return s.split('').reverse().join('')
}

starsnumber.addEventListener('change', (e) => {
  val = e.target.value
  double = e.target.value * 2
  let innerstar = ''
  let str = ''
  let space = ' '

  for (j = 0; j < double; j++) {
    if (j < val) {
      str = `*${space.repeat(j, ' ')}`
      let result = str.padStart(val, ' ')
      innerstar = `${innerstar}${result + reverse(result)}\n`
    }

    if (j > val) {
      str = `*${space.repeat(double - (j + 1), ' ')}`
      let result2 = str.padStart(val, ' ')
      innerstar = `${innerstar}${result2 + reverse(result2)}\n`
      // console.log(result2 + reverse(result2))
    }
  }
  console.log(innerstar)
  outline.textContent = innerstar
})

// ! Palindromic and Perfect Numbers Lists

const lowlmit = document.getElementById('number10')
const toplimit = document.getElementById('number20')
const btnpalin = document.getElementById('btn10')
const btnperfect = document.getElementById('btn20')
const palinlist = document.getElementById('palin')
const perfectlist = document.getElementById('perfect')

function getpalin() {
  let palinarr = []
  for (let i = +lowlmit.value; i < +toplimit.value; i++) {
    if (i < 10) {
      palinarr.push(i.toString())
    } else {
      if (i.toString()[0] == i.toString()[i.toString().length - 1]) {
        palinarr.push(i.toString())
      }
    }
  }
  palinlist.textContent = palinarr
}

function is_perfect(number) {
  let temp = 0
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i
    }
  }

  if (temp === number && temp !== 0) {
    return true
  } else {
    return false
  }
}

function getperfect() {
  let perfectarr = []

  for (let i = +lowlmit.value; i < +toplimit.value / 2; i++) {
    if (is_perfect(i)) {
      perfectarr.push(i)
    }
  }

  perfectlist.textContent = perfectarr
}

btnpalin.addEventListener('click', getpalin)
btnperfect.addEventListener('click', getperfect)
