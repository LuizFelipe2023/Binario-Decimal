const convBinarioParaDecimal = (binario) =>{
      const reversedBinary = binario.split('').reverse();
      let decimal = 0;
      for(let i = 0; i<reversedBinary.length;i++){
          if(reversedBinary[i]==='1'){
             decimal += 2**i;
          }
      }
      return decimal;
};
const convDecimalParaBinario = (decimal) => {
    if (decimal === 0) {
        return '0';
    }

    let binario = '';
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    return binario;
};
export {convBinarioParaDecimal, convDecimalParaBinario};