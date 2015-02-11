describe('coins', function() {
  it('takes .25 and returns change object with quarter equal to 1', function() {
    expect(coins(.25)).to.eql({'quarter': 1, 'dime': 0, 'nickel': 0, 'penny': 0});
  });

  it('takes .10 and returns change object with dime equal to 1', function() {
    expect(coins(.10)).to.eql({'quarter': 0, 'dime': 1, 'nickel': 0, 'penny': 0});
  });

  it('takes .05 and returns change object with nickel equal to 1', function() {
    expect(coins(.05)).to.eql({'quarter': 0, 'dime': 0, 'nickel': 1, 'penny': 0});
  });

  it('takes .01 and returns change object with penny equal to 1', function() {
    expect(coins(.01)).to.eql({'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 1});
  });

  it('takes .41 and returns change object with 1 for each denomination', function() {
    expect(coins(.41)).to.eql({'quarter': 1, 'dime': 1, 'nickel': 1, 'penny': 1});
  });

});
