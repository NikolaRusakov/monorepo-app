module.exports = {
  name: 'shared-util-users',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-users',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
