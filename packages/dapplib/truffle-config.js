require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rice machine honey inflict praise army genuine'; 
let testAccounts = [
"0xdee7749a3d9eddbf3bda412aba92c6b0d51ed5cb3ce46c3a451339f30e713d7e",
"0x7c8e87c0fd1bc0450e8cc4d71782e7180a2fed7a966c9c57a91ee5dda006e2d9",
"0xe0aad80d6ff71630fe7dbd190c58115baeb2a5bc9d326a39dd9a9f8c4ab9b17d",
"0x6ccea63005516c70ba6044f5cfcd9e58aa01086041e886f7454a04df0bdfa16e",
"0x6be35560c633e6177549c232978f6c6afe7fafa7318835ab20110f8a9064687b",
"0xc059dba4bde72f7868e8ccfab91dee3b0dc3a4051aaf2253b156652022b5ad95",
"0xd0bbea8f56eef050e295b8158365c821ee7514ce2aea051c20b8be6ac72a2f75",
"0x170f3f99f3ae118c7ccd89265f580e17e1d77a5dc7e7f2de7aa0d1701ba8cc88",
"0x1f5f80d4be337fe82afe3378d67e1a8d38d55a51f9f0b7ddfc12051188c38e64",
"0x11695a42ba231eda6168a753b2341c2c9d52d89a0dbf9da4c7cb91c26da24660"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


