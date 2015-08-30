exports.config = {
  specs: ['front/test/e2e/*.js'],
  baseUrl: 'http://localhost:3000',
  maxSessions: 1,
  framework: 'jasmine2',
  multiCapabilities: [
    {browserName: 'chrome'}
  ]
};