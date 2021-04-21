require('dotenv').config({ path: `${__dirname}/../../../.env` });
const WalletProvider = require('@truffle/hdwallet-provider'); // eslint-disable-line import/no-unresolved

var mnemonic = process.env.TRUFFLE_MNEMONIC;
const privateKey = process.env.STARFLEET_TRUFFLE_PRIVATE_KEY;
const rpc_endpoint = process.env.STARFLEET_TRUFFLE_ACCESS_KEY;

module.exports = {
    compilers: {
        solc: {
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },

    networks: {
        ganache: {
            host: 'localhost',
            port: 7545,
            gas: 6000000,
            network_id: '5777',
        },

        test: {
            host: 'localhost',
            port: 7545,
            gas: 6000000,
            network_id: '5777',
        },

        contracts: {
            provider: () => new WalletProvider(privateKey, `${rpc_endpoint}`),
            network_id: 4,
            gasPrice: 1000000000,
            gas: 6000000, // Gas limit used for deploys
            skipDryRun: true,
        },

        token: {
            provider: () => new WalletProvider(privateKey, rpc_endpoint),
            network_id: 100,
            gas: 1700000, // Gas limit used for deploys
            gasPrice: 1000000000,
            websockets: false,
            skipDryRun: true,
        },

        xdai: {
            network_id: 1,
            gas: 1700000, // Gas limit used for deploys
            websockets: true,
            skipDryRun: true,
        },
    },
};