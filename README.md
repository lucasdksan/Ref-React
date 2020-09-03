# Refs React JS. :pencil2::computer::ledger:

### Hoje, 03/09/2020, foi realizado estudos sobre os Refs do React Js.
## Conexto:

### Em um fluxo de dados típico do React, as props são a única forma de componentes pais interagirem com seus filhos. Para modificar um componente filho, você terá que re-renderizá-lo com as novas props. Porém, existem alguns casos onde você precisa modificar imperativamente um componente filho fora do fluxo típico de dados. O componente filho a ser modificado poderia ser uma instância de um componente React, ou ele poderia ser um elemento DOM. Para ambos os casos, o React fornece uma saída.

## Mais informações:

### Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
### Engatilhar animações imperativas.
### Integração com bibliotecas DOM de terceiros.

## Sobre o código:

### Esse é um código simples que foca em simular algumas situações com o Refs. O arquivo App contém as informações que serão apresentados em tela. Nesse arquivo exite um form com um componente Input e um input tradicional, além dos botões. Esses inputs são utilizados para rodar as funcionalidades do ref:

#### O input é utilizada para ter um foco quando há um onClick no botão Make focus, pois quando este evento é disparado a função/useCallback handleFocus que através do ref ativa esta propriedade. Detalhe, isso é feito graças à constante nameInputRefs que é uma referência e está sendo atribuída à entrada.

#### O componente Input trabalha mais a troca de informações entre entidade pai e filho.