module.exports = {
  name: 'auth-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
