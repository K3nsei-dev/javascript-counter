const countDownDate = new Date('30 September 2021').getTime()

  setInterval(function(){
  const today = new Date().getTime()
  const distance = countDownDate - today
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector('#time').innerHTML = `
  ${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds Left`
              }, 1000);