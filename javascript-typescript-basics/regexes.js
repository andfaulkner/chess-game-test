const files = [
    'test-container.tsx',
    'test-view.tsx',
    'test-store.ts',
    'test-styles.scss',
    'app-root.tsx',
    'index.html',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    '.babelrc',
    'README',
    'LICENSE',
    'README.md',
    '     webpack.config.js',
    'pm2.config.js',
    'imported-component.jsx',
    'aws-test-src.ts',
    'aws-test.js',
    'aws-test-built.js',
];

const testComponentFiles = files.filter(fileName => {
    if (fileName.match(/\./g)) {
        return true;
    }
});

console.log('testComponentFiles:', testComponentFiles);
