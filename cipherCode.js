const key = {
    a: "apple",
    b: 'boat',
    c: 'couch',
    d: 'dude',
    e: 'evil',
    f: 'fart',
    g: 'ghost',
    h: 'homeless',
    i: 'information',
    j: 'joke',
    k: 'keystone',
    l: 'little',
    m: 'mask',
    n: 'nordic',
    o: 'oprah',
    p: 'person',
    q: 'question',
    r: 'reality',
    s: 'sorry',
    t: 'test',
    u: 'underwear',
    v: 'velocity',
    w: 'wash',
    x: 'xray',
    y: 'yellow',
    z: 'zest',
  }


  const encryptWord = (str)=>{
      let encryptedWord="";
      const providedWord = Array.from(str.replaceAll(" ", "").toLowerCase())
      for(let i = 0; i<providedWord.length; i++){
          encryptedWord += key[providedWord[i]]
      }
      encryptedWord = Array.from(encryptedWord).reverse().join("")
      return encryptedWord
  }

  console.log(encryptWord("I love cryptography"))