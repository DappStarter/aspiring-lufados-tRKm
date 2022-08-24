require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture oppose bottom tooth notice crime remember modify grid arctic bridge tree'; 
let testAccounts = [
"0x09e861707bd4fb1c6c4a89ee1cf6e4869411173e71b23ddc383d88da1633e320",
"0x214c9b9be97789feeb9b98d1f357e9910e6300cfa0bc8b8c9bd1597724a40ef5",
"0x43c4080b19136323df0842fd70ff17226ee7c0202163d5131a2ae9c65f94e018",
"0xf6fadbbd09fadc790275c8e20da53e9caf89cbaa9755c3cbc15382022a11e7f2",
"0xa230eda6287be4e9f8d8f73014c9d551dd34711100fcb9cf52245d16d4f9e456",
"0x610034b56b7ca216f4daeeb7ab68794c532935aa2480ae758b265c4ebc2f2c5a",
"0x7809895433958bd13f6accda7d5c459a6eeb41ab1d882e4e3b97c504a360e999",
"0xe4197aba1ee31bca67d6f9e49ea4062666b4f39ce564ff92967831d4af378622",
"0xfd2e5184d505c28246067c66e989b6fa69f5023427ddc2715bd5663a4c8c4e45",
"0x61bc3e4a40e0e69caeb17b0ab0b321881a37d0028b707e65e0f33bfea0a5ca70"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


