const TaoDAONFT = artifacts.require("TaoDAONFT");
const PaymentGateway = artifacts.require("PaymentGateway");
const TaoDAONFTMarketplace = artifacts.require("TaoDAONFTMarketplace");

//first account in truffle becomes payment gateway wallet allowed to withdrawl funds
module.exports = function(deployer, networks, accounts) {
  deployer.deploy(TaoDAONFTMarketplace, TaoDAONFT.address, PaymentGateway.address, accounts[0]);
};   
