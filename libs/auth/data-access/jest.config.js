module.exports = {
  name: 'auth-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
