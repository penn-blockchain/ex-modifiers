const BadModifier = artifacts.require('BadModifier');

function print(str) {
  console.log(str)
}

contract('BadModifier', function (accounts) {

  it('should update state, even though it seems like it did not', async function () {
    let badModifier = await BadModifier.new();
    result = await badModifier.x.call();
    await badModifier.seemsLikeItDoesNothing();
    newResult = await badModifier.x.call();
    assert.equal(result.toNumber() + 1, newResult.toNumber());
  });
})
