var coins = function(amount, start) {
  amount *= 100;
  if(typeof(start)==='undefined') start = 'quarter';
  var change = {'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0};
  var denominations = ["quarter", "dime", "nickel", "penny"];
  var currency = {"quarter": 25, "dime": 10, "nickel": 5, "penny": 1};
  start = denominations.indexOf(start);
  for (var index = start; index < denominations.length; index ++) {
    var key = denominations[index];
    while (amount >= currency[key]) {
      change[key] = Math.floor(amount / currency[key]);
      amount -= change[key] * currency[key];
    };
  };
  return change;
};


$(document).ready(function() {
  $('form#change').submit(function(event) {
    var amount = parseFloat($('input#amount').val());
    var start = $('select#start').val();
    var result = coins(amount,start);

    for (var key in result) {
      if (result[key] !== 0) {
        $('#' + key).text(result[key] + " " + key).show();
      } else {
        $('#' + key).hide();
      }
    }

    $('#money').text(amount);
    $('#results').show();
    event.preventDefault();
  });

  $('input[type="radio"]').click(function() {
    if ($(this).attr('value') == 'yes') {
      $('#start').show();
    } else {
      $('#start').hide();
    }
  });
});
