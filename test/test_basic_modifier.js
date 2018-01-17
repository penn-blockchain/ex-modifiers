const BasicModifier = artifacts.require('BasicModifier');

contract('BasicModifier', function (accounts) {

  it('allow the owner to add numbers', async function () {
    let basicModifier = await BasicModifier.new({from: accounts[0]});

    let result = await basicModifier.restrictedAdd.call(1, 1, {from: accounts[0]});

    assert.equal(result, 2);
  });

  it('should not allow non-owner to add numbers', async function () {
    let errorThrown;
    let basicModifier = await BasicModifier.new({from: accounts[0]});

    try {
      let result = await basicModifier.restrictedAdd.call(1, 1, {from: accounts[1]});
    } catch (error) {
      errorThrown = true;
    }
    assert.isTrue(errorThrown);
  });
})
