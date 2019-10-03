const { expect } = require('chai');
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = 'node.exe ./src/main.js';

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, out, stderr) => {
      const stdout = out;
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done();
    });
  });

  it('should return currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, out, stderr) => {
      const stdout = out;
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return amount option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, out, stderr) => {
      const stdout = out;
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
