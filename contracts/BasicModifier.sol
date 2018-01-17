pragma solidity ^0.4.17;

contract BasicModifier {

  address owner;

  function BasicModifier() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require (msg.sender == owner);
    _;
  }

  function restrictedAdd(uint numOne, uint numTwo) public onlyOwner returns (uint) {
    return numOne + numTwo;
  }
}
