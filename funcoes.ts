function multiplicacao(a: number, b: number): number {
    return a * b;
  }
  
 
  function saudacao(nome: string): string {
    return `Olá ${nome}`;
  }
  
 
  const resultado = multiplicacao(3, 4); 
  const saudacaoMsg = saudacao("Marcelo"); 

  console.log(resultado); 
  console.log(saudacaoMsg); 
  