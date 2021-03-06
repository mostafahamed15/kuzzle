'use strict';

const { Given } = require('cucumber');

Given('I {string} the pipe on {string} with the following changes:', async function (state, event, dataTable) {
  const payload = this.parseObject(dataTable);
  const request = {
    controller: 'functional-test-plugin/pipes',
    action: 'manage',
    state,
    event,
    body: payload
  };

  await this.sdk.query(request);
});

Given('I {string} the pipe on {string} without changes', async function (state, event) {
  await this.sdk.query({
    controller: 'functional-test-plugin/pipes',
    action: 'manage',
    state,
    event
  });
});
