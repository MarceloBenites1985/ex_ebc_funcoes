# Funções de Multiplicação e Saudação em TypeScript
Este projeto contém duas funções simples escritas em TypeScript: uma função de multiplicação e uma função de saudação. A seguir, você encontrará detalhes sobre cada uma das funções e como utilizá-las.

## Descrição das Funções
### Função de Multiplicação
A função `multiplicacao` recebe dois números como argumentos e retorna o resultado da multiplicação deles.

**Definição da Função:**
```typescript
function multiplicacao(a: number, b: number): number {
  return a * b;
}
```````
Exemplo de Uso:
const resultado = multiplicacao(3, 4);
console.log(resultado); // Output: 12

## Função de Saudação
A função *`saudacao`* recebe um nome como argumento e retorna uma mensagem de saudação.
Definição da Função:
````
function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

``````
Exemplo de Uso:
````
const saudacaoMsg = saudacao("Marcelo");
console.log(saudacaoMsg); // Output: Olá Marcelo
````
## Como Executar

Como Executar
Para executar essas funções, siga os seguintes passos:

1 - *Instale o Node.js* (se ainda não estiver instalado) a partir de nodejs.org.
2-  *Instale o TypeScript* globalmente usando npm:
````
npm install -g typescript
````
3 - *Compile o código TypeScript para JavaScript:*

- Crie um arquivo *funcoes.ts* e copie o código das funções e exemplos de uso.
- No terminal, navegue até o diretório onde *funcoes.ts* está salvo e execute:
``````
tsc funcoes.ts
``````
4 - *Execute o arquivo JavaScript* gerado:
````
node funcoes.js
``````
# Estrutura do Projeto
````
/
├── funcoes.ts    # Contém as funções e exemplos de uso
└── README.md   # Este arquivo de documentação
``````

## Recursos
- [TypeScript Lang](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
  
# Licença
Este projeto é licenciado sob os termos da licença MIT.
``````

Com este README.md, qualquer pessoa deve ser capaz de entender o propósito das funções, como utilizá-las e como configurar seu ambiente para executar o código.
````









