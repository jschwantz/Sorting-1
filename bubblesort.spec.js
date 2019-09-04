describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a non-empty array', function() {
        expect(bubbleSort([5,7,1,2,3,0])).toEqual([0,1,2,3,5,7])
        expect(bubbleSort([99,358,23,10,0,1,2])).toEqual([0,1,2,10,23,99,358])
    })
    it('can handle a single item array', function() {
        expect(bubbleSort([5])).toEqual([5])
    })
    it('can handle strings', function() {
        expect(bubbleSort(['d','e','c', 'a', 'f'])).toEqual(['a','c','d','e','f'])
    })
  });