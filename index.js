$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
	  var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    var total = 0;
    totaldiv.text("0");

    $("#numbers a").not("#clear,#clearall").click(function(){
		totaldiv.text("");
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });

    $("#operators a").not("#equals").click(function() {
      operator = $(this).text();
      newnumber = number;
      number = "";
      totaldiv.text("0");
    });

    $("#clear, #clearall").click(function() {
      number = "";
      totaldiv.text("0");
      if(this.id = "#clearall") {
        newnumber = "";
      }
    });

    $("#equals").click(function() {
      number = parseInt(number);
      newnumber = parseInt(newnumber);

      switch(operator) {
        case '+':
          total = newnumber + number;
          break;
        case '-':
          total = newnumber - number;
          break;
        case '*':
          total = newnumber * number;
          break;
        case '/':
          total = newnumber / number;
          break;
      }
      total.toString();
      totaldiv.text(total);
      testNumLength(total);
      number = "";
      newnumber = "";
    });
});
