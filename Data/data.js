
const data = {
    totalMoney: 0,
    percentage: [50, 20, 30],
    rate: 2000,
    blockName: ['Utility', 'Saving', 'Diver'],
  
  }

  export function getTrans(totalMoney) {
    return {m1: (totalMoney*data.percentage[0])/100, m2: (totalMoney*data.percentage[1])/100, m3: (totalMoney*data.percentage[2])/100 }
  }
  export function getBlockName(index) {
      return data.blockName[index] 
  }
  export function getPercentage(index) {
      return data.percentage[index]
  }
  export function getRate() {
      return data.rate
  }
  export function getTotalMoney() {
      return data.totalMoney
  }
  export function setTotalMoney(money) {
      data.totalMoney += money
  } 

  

