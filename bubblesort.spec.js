describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('si te pasan un arreglo desordenado, tendria que devolverlo ordenado', function(){
        expect(bubbleSort([2,4,1,3])).toEqual([1,2,3,4])
    })
  it('Deberia contar cuantas veces se ejecuta swap', function () {
    spyOn(window, 'swap').and.callThrough();
    var array= [7,9,0,3,6]
    bubbleSort(array);
    expect(window.swap.calls.count()).toEqual(5);
  });
    
  });

  describe('Split Array function', function() {
    it('es capar de dividir el arreglo en dos partes', function() {
    var array=[4,87,35,7,8]
        expect(split(array)).toEqual([[4,87],[35,7,8]]);
    });
    it('2', function() {
      var array=[1,2,3]
          expect(split(array)).toEqual([[1],[2,3]]);
      });
      it('3', function() {
        var array=[0,1]
            expect(split(array)).toEqual([[0],[1]]);
        });
        it('3', function() {
          var array=[0,1,2,3]
              expect(split(array)).toEqual([[0,1],[2,3]]);
          });
  });

  describe('Merge', function(){
    it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
    var firstArr=[1,4,7];
    var secondArr=[22,34,50]
    expect(merge(firstArr,secondArr)).toEqual([1,4,7,22,34,50]);
    });
    it('es capaz de mergear dos arreglos orden', function(){
      expect(merge([3],[0,1])).toEqual([0,1,3]);
    });
    it('3', function(){
      expect(merge([2],[3,5])).toEqual([2,3,5]);
    });
    it('3', function(){
      expect(merge([2,3,5],[1,4,6])).toEqual([1,2,3,4,5,6]);
    });
  });

  describe('MergeSort', function(){
    // it('ordena bien un arreglo de un elemento', function(){
    //   expect(mergeSort([2])).toEqual([2]);
    //   })
    it('ordena bien', function(){
    expect(mergeSort([3,2,1,4])).toEqual([1,2,3,4]);
    })
  });
  