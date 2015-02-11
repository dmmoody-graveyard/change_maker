var coins = function(amount) {
  amount *= 100
  var change = {'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0};
  var currency = {"quarter": 25, "dime": 10, "nickel": 5, "penny": 1};
  for (var key in currency) {
    while (amount >= currency[key]) {
      change[key] = Math.floor(amount / currency[key]);
      amount -= change[key] * currency[key]
    };
  };
  return change;
};
