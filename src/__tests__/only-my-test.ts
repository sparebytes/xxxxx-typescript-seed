import * as utilTest from 'dev-testing';

const testPath =
    ["./simple.test", "*"]
    ;

utilTest.handleOnlyMyTest(__dirname, 1000 * 1000, testPath);
