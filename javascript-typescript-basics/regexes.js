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
    'aws-test-built.js'
];

const testComponentFiles = files.filter(fileName => {
    if (fileName.match(/\./g)) {
        return true;
    }
});

console.log('testComponentFiles:', testComponentFiles);

/**
 * Large list of random strings.
 */
const largeStringList = [
    'Ayden McAllistair',
    'Hayden Joe',
    'Rayden Boileaux',
    'Bayden Faulkner',
    'Hayden Ericson',
    'Gayden Faulk',
    'Ahayden Faulk',
    'Rayden Hayden McFaul',
    'Joe Franky McFaul',
    'Q Jamal',
    'Hayden Joeson',
    'Qayden McTavish',
    'Aayden McTavish',
    '622-09-14.log',
    '2022-09-14.log',
    '2020-05-22.log',
    '1995-02-28.log',
    '2022/09/14.log',
    '1. Apple',
    '2. Orange',
    '3. Pomegranite',
    '4. Starfruit',
    '5. Grapefruit',
    '6. Mango',
    '7. Pear',
    '1) Carrot',
    '2) Lettuce',
    '3) Kale',
    '4) Cabbage',
    'Brodie',
    'Eric',
    'Andrew',
    'Isaac',
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
    'board-container.test',
    'board-view.test',
    'board-styles.spss',
    'test-container.tsx.mocha.js',
    'test-view.tsx.mocha.js',
    'test-store.ts.mocha.js'
];
