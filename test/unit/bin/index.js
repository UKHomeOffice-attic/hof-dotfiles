'use strict';

const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const getCallSite = require('../../../bin/callsite');

describe('hof-dotfiles', () => {
  let execError = true;

  beforeEach((done) => {
    exec('hof-dotfiles', (error) => {
      execError = error;
      done();
    });
  });

  it('executes without error', () => {
    should.equal(execError, null);
  });

  it('copies files from src to the callsites\' working directory', (done) => {
    getCallSite((callsite) => {
      fs.readdir(callsite, (readCallSiteError, filenames) => {
        if (readCallSiteError) {
          throw readCallSiteError;
        }
        fs.readdir(path.resolve(process.env.PWD, 'src'), (readSrcErr, srcfiles) => {
          if (readSrcErr) {
            throw readSrcErr;
          }
          filenames.should.include.members(srcfiles);
          done();
        });
      });
    });
  });
});
