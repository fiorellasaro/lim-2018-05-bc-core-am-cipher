describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      let result = cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      assert.equal(result, "HIJKLMNOPQRSTUVWXYZABCDEFG");
     });

     it('debería retornar "Lspe! góqs iwxáw?" para "Hola! cómo estás?" con offest 4', () => {
      let result = cipher.encode(4, "Hola! cómo estás?");
      assert.equal(result, "Lspe! góqs iwxáw?");
     });

     it('debería retornar "Ovsh! jótv lzaáz?" para "Hola! cómo estás?" con offest 33', () => {
      let result = cipher.encode(33, "Hola! cómo estás?");
      assert.equal(result, "Ovsh! jótv lzaáz?");
     });

    });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result= cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

     it('debería retornar "12345" para "12345" con offest 33', () => {
      let result = cipher.decode(33, "12345");
      assert.equal(result, "12345");
     });

     it('debería retornar "ahet" para "hola" con offest 33', () => {
      let result = cipher.decode(33, "hola");
      assert.equal(result, "ahet");
     });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      let offset
      let result = cipher.createCipherWithOffset(offset);
      assert.isObject(result);
    });

    it('cipher.createCipherWithOffset.encode debería ser una funcion', () => {
        assert.equal(typeof cipher.createCipherWithOffset(2).encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      let result = cipher.createCipherWithOffset(33).encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      assert.equal(result, "HIJKLMNOPQRSTUVWXYZABCDEFG");
     });

    it('cipher.createCipherWithOffset.decode debería ser una funcion', () => {
      assert.equal(typeof cipher.createCipherWithOffset(2).decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      let result= cipher.createCipherWithOffset(33).decode("HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    
  });
});

