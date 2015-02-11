var coins = function(amount, start) {
  amount *= 100
  if(typeof(start)==='undefined') start = 'quarter';
  var change = {'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0};
  var denominations = ["quarter", "dime", "nickel", "penny"];
  var currency = {"quarter": 25, "dime": 10, "nickel": 5, "penny": 1};
  start = denominations.indexOf(start)
  for (var index = start; index < denominations.length; index ++) {
    var key = denominations[index]
    while (amount >= currency[key]) {
      change[key] = Math.floor(amount / currency[key]);
      amount -= change[key] * currency[key]
    };
  };
  return change;
};
