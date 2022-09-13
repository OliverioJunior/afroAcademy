const data = new Date();
  const filterData = JSON.stringify(data).replace(/\W/gi,'')
  const day = filterData.slice(6,8)
  const mon = filterData.slice(4,6)
  const year = filterData.slice(0,4)
  console.log( `${day}/${mon}/${year}`)