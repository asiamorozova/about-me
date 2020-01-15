import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;


test('zero when numbers are the same', function(assert){

    const guess = 9
    const correctNumber = 9
   const shouldBe0 = compareNumbers (guess, correctNumber)

   assert.equal (shouldBe0, 0);

});

test ('-1 when number is too low', function(assert){

    const guess = 4
    const correctNumber = 9
    const shouldBeRightAnswer = compareNumbers (guess, correctNumber)
    
    assert.equal (shouldBeRightAnswer, -1);
});

(test ('1 when number is too high', function(assert){

    const guess = 13
    const correctNumber = 9 
    const shouldBeRightAnswer = compareNumbers (guess, correctNumber)

    assert.equal (shouldBeRightAnswer, 1)
}));

