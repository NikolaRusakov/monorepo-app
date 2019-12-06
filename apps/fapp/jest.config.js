module.exports = {
  name: 'fapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
