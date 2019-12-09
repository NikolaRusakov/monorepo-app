module.exports = {
  name: 'libs-auth-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/libs/auth/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
