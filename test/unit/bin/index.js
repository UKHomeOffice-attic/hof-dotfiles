'use strict';

const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const proxyquire = require('proxyquire');

proxyquire('../../../bin/index', {
  './target': path.resolve(__dirname, '../../../'),
  './fs-stat-file': sinon.stub().callsArgWithAsync(1, null, undefined)
});

describe('hof-dotfiles', () => {
  let execError = true;
  fs.writeFileSync = sinon.stub();

  beforeEach((done) => {
    exec('hof-dotfiles', (error) => {
      execError = error;
      done();
    });
  });

  it('executes without error', () => {
    should.equal(execError, null);
  });

  it('copies files from src to the callsites\' working directory', () => {
    fs.writeFileSync.should.have.been.called;
    fs.writeFileSync.should.have.callCount(7);
  });
});
