const chai = require('chai');
const { expect } = chai;

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  it('should return USD as currency default and 1 as amount default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('should return BRL as currency default and 10 as amount default', () => {
    expect(convertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
