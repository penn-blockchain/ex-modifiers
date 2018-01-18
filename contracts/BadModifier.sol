pragma solidity ^0.4.17;

contract BadModifier {

  uint public x;

  // In general, changing state in modifiers is generally bad practice
  // because it makes it harder to understand what this code does!
  modifier changeState() {
    x = x + 1;
    _;
  }

  // Seems like this function does nothing, even though state is changed by modifier!
  function seemsLikeItDoesNothing() public changeState {}
}
