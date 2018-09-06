var TKToken = artifacts.require("TKToken");

module.exports = function(deployer) {
  deployer.deploy(TKToken);
};
