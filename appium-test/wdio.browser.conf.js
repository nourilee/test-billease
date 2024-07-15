const { join } = require('path');

exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/browser/*.spec.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:browserName': 'Chrome',
        'appium:automationName': 'UiAutomator2',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723
            },
            logPath: './',
            command: 'appium'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async function () {
        const chai = await import('chai');
        global.expect = chai.expect;
    },
};
