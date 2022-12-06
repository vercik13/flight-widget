const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OT 102",
    terminal: "1",
    gate: "A 01",
    remarks: "ON TIME"
  },
  {
    time: "12:30",
    destination: "PARIS",
    flight: "PR 508",
    terminal: "2",
    gate: "D 02",
    remarks: "ON TIME"
  },
  {
    time: "13:21",
    destination: "NEW YORK",
    flight: "NY 307",
    terminal: "3",
    gate: "B 10",
    remarks: "DELAYED"
  },
  {
    time: "14:00",
    destination: "MELBOURNE",
    flight: "MB 785",
    terminal: "3",
    gate: "A 03",
    remarks: "DELAYED"
  },
  {
    time: "15:20",
    destination: "DUBAI",
    flight: "DB 115",
    terminal: "2",
    gate: "C 03",
    remarks: "CANCELLED"
  },
  {
    time: "16:15",
    destination: "MADRID",
    flight: "MD 688",
    terminal: "1",
    gate: "B 05",
    remarks: "ON TIME"
  }
]


const destination = ["HELSINKY", "OSLO", "LONDON", "MANCHESTER", "ROMA", "MALAGA", "DUBROVNIK", "BARCELONA", "LISBON", "ZURICH", "BUDAPEST", "MADRID", "MELBOURNE", "DUBAI", "PARIS", "OMAN", "NEW YORK", "MILANO",]
const remarks = ["ON TIME", "CANCELLED", "DELAYED"]
let hour = 16





function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")

    for( const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for(const [index,letter] of word.entries()) {
        const letterElement = document.createElement('div')


        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)

      }

      tableRow.appendChild(tableCell)
    }
    
    tableBody.append(tableRow)
  }
}

populateTable()


function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomTerminal() {
  const numberTerminal = "123"
  return numberTerminal.charAt(Math.floor(Math.random() * numberTerminal.length))
}

function generateRandomGate() {
  const letterGate = "ABCDEFG"
  return letterGate.charAt(Math.floor(Math.random() * letterGate.length))
}
function generateRandomNumber(maxNumber) {
  const numbers = "0123456789"
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime () {
  let displayHour = hour

  if (hour < 24) {
    hour++
  }

  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }

  if (hour < 10) {
    displayHour = "0" + hour
  }

  return displayHour + ":" + generateRandomNumber(6) + generateRandomNumber()
}

function shuffleUp(){
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destination[Math.floor(Math.random() * destination.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    terminal: generateRandomTerminal(),
    gate: generateRandomGate() + " " + generateRandomTerminal() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })

  tableBody.textContent = ""
  populateTable()
}

setInterval(shuffleUp, 5000)
