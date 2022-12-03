import moment from 'moment'

module.exports = (date) => {
  const a = moment(date)
  a.locale('fr')
  return a.format('LLLL')
  //.format("lll")
}

// console.log(useDate('2022-11-18'))