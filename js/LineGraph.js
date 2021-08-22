var CashFlow = document.getElementById("cash-flow").getContext("2d");
let Lineoptions={
  
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
     
        y: {
          
          min: 0,
          max: 60,
          ticks: {
            // forces step size to be 50 units
            stepSize: 10
          }}}
        
  }
const labels=["jan 2021","Feb 2021","March 2021","April 2021","Jun 2021"]
  const Linedata = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: [5.4,10.3,40,40,40.2],
        borderColor:"#162351",
        backgroundColor:"#162351"
        
      },
      {
        label: 'Expensis',
        data: [0,30.3,15.5,10.6,5.2],
        borderColor:"#EF3232",
        backgroundColor:"#EF3232"
      },  {
        label: 'Profile',
        data: [0,10.3,30.5,40.6,50.2],
        borderColor:"#6DA252",
        backgroundColor:"#6DA252"
      }
    ]
  };
  const config =  new Chart(CashFlow, {
    type: 'line',
    data: Linedata,
    options:Lineoptions ,
  }
  );