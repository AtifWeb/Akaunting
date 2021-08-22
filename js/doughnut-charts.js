var ctx = document.getElementById("usage-chart").getContext("2d");
var ExpensesChart = document.getElementById("expenses-chart").getContext("2d");


const Set_GetData=(done,remaning,doneColor,RemaningColor,HoverDoneColor,HoverRemaningColor)=>{
return  {
  datasets: [
    {
      // you can use your own values
      data: [done, remaning],
      backgroundColor: [doneColor,RemaningColor],

      hoverBackgroundColor: [HoverDoneColor, HoverRemaningColor],
      weight: 20,
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs

};
}




const options = {
  elements: {
    arc: {
        // borderWidth: 0
    }
},
  animation: {
    animateScale: true,
  },
  legend: {
    display: false,
  },
  responive:true,
  maintainAspectRatio: false,
  cutout: 90
};



var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: Set_GetData(10,20,"#FFA805","#5BA437","#f6c66d","#8cd169"),
  options: options,
});
var myExpensesChart = new Chart(ExpensesChart, {
  type: "doughnut",
  data:  Set_GetData(0,20,"#FFA805","#E5E5E5","#f6c66d","#E5E5E5"),
  options: options,
});
