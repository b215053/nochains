
var isa_portal = artifacts.require("./isa_portal.sol");
var aadhaar = artifacts.require("./aadhaar.sol");
var tpds=artifacts.require("./tpds.sol");
module.exports = function(deployer) {
    deployer.deploy(isa_portal, web3.eth.accounts);
    deployer.deploy(aadhaar, web3.eth.accounts);
    deployer.deploy(tpds,web3.eth.accounts);
};