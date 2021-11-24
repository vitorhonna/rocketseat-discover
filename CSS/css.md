# CSS - Anotações

## App bonito, até nos textos

**Font properties:**

- **font-family**: tipo de fonte, separar por vírgulas as fallback fonts em ordem de prioridade (carregadas caso alguma fonte não esteja disponível).
- **font-weight**: peso da fonte (normal, bold...), vai de 100 a 900, o normal é 400, bold 700, mas a variação de pesos dependerá da família da fonte. Também pode-se usar referências relativas: bolder e lighter.
- **font-style**: estilo da fonte (normal, italic, oblique).
- **font-size**: tamanho da fonte.
- **Web-fonts**: adiciona fontes personalizadas, usar google fonts e preferir linkar pelo html.
- **font-variant**: varia a apresentação da fonte. Ex.: small-caps
- **font-stretch**: varia a apresentação da fonte. Ex.: normal, expanded, condensed, e de 50% a 200%.
- **letter-spacing**: espaço entre caracteres.
- **word-spacing**: espaço entre palavras.
- **line\*height**: altura da linha. Pode ser definido com ou sem unidades de medida.
- **text-transform**: transforma o texto. Ex.: uppercase, lowercase, capitalize, none.
- **text-decoration**: aplica decorações ao texto, como sublinhado, estilização da linha, cores, etc. Mais de um valor pode ser aplicado. Opções: (line) underline, overline, line-through / (style) wavy, dashed, dotted, solid / (color) \<colors>. Ex.: underline dotted red. text-decoration é um shorthand, valores específicos também podem ser acessados: text-decoration-line, por exemplo.
- **text-align**: alinhamento. Opções: left, right, center, justify.
- **text-shadow**: sombra. Sintaxe: offset-x offset-y blur-radius color. Ex.: 2px 2px 3px gray

<br>

## Nem tudo são pixels

- Tipos numéricos:

  - \<integer> : -10, 200
  - \<number> : -2.4, 64, 0.25
  - \<dimension> : 90deg, 2s, 8px
  - \<percentage> : 50%

- Unidades comuns:
  - \<length> : px, em, vw
  - \<angle> : deg, rad, turn
  - \<time> : s, ms
  - \<resolution> : dpi

**Distâncias absolutas** \<length> : são valores fixos e não se alteram. Ex.: px, cm, in.

**Distâncias relativas**: são relativas a outro elemento, como o pai, root, ou o tamanho da tela. Ex.: em (relativo a fonte do pai), rem (relativo a fonte do root = 16px por padrão), vw (% do viewport width), vh (% do viewport height).

**Porcentagens**: valor relativo a algum outro valor, como o pai.

**Position**: \<position> representa um conjunto de coordenadas 2D: top, right, bottom, left e center. Não confundir com a propriedade `position`. Ex.: "background-position: top right"

**Funções**: rgb(), hsl(), url(), calc(). Ex.: "height: calc(100% - 20px)"

**Strings**: texto envolto em aspas. Ex.: 'content: "Alguma mensagem";'

**Identificadores**: valores nomeados. Ex.: "red", "black", "blue"...

<br>

## Nem só de classes ou ID's

### Seletores e Combinators

- Seletores
  - **Element**: tagName. Ex: h1
  - **ID**: #id. Ex: #title
  - **Class**: .className. Ex: .content
  - **Attribute**: \[attributeName]. Ex: \[title]
  - **Pseudo-Class**: tagName:pseudoClassName. Ex: p:hover

Para selecionar múltiplos elementos, separar os seletores por vírgulas:

```css
h1,
p:hover,
.blue {
  color: blue;
}
```

Também é possível especificar os valores de atributos:

```css
[class="red"] {
  color: red;
}
```

- **Combinators**

Buscam e combinam seletores para aplicar estilização:

- **Descendant combinator**: seleciona um elemento que descende de outro. Coloca-se um espaço entre os seletores. Pode haver elementos entre um e outro, eles não precisam de uma relação direta de parentesco, apenas de descendência.

```css
body article h2 {
  /* estilização será aplicada a elementos h2 que sejam descendentes de article que, por sua vez, sejam descendentes de body */
}
```

Quando não há espaço entre os seletores, os elementos selecionados devem satisfazer todos os seletores:

```css
h2 .red {
  /* Seleciona todos os descendentes de h2 que contenham a classe "red" */
}

h2.red {
  /* Seleciona somente as tags h2 que também tenham a classe "red" */
}
```

- **Child combinator**: seleciona um elemento que é filho direto de outro. Coloca-se um " > " entre os seletores.

```css
body > article > h2 {
  /* estilização aplicada somente a h2 filhos de article que sejam netos de body (articles filhos de body) */
}
```

- **Adjacent sibling combinator**: seleciona um elemento (seletor da direita) que seja um irmão direto de outro (seletor da esquerda). Coloca-se um " + " entre os seletores.

```html
<h2>Título</h2>
<p>Texto 1</p>
<p>Texto 2</p>
```

```css
h2 + p {
  /* estilização aplicada somente ao primeiro p (que contém Texto 1), pois é irmão direto de h2 */
}
```

- **General sibling combinator**: seleciona todos os elementos irmãos. Coloca-se um " ~ " entre os seletores.

```css
h2 ~ p {
  /* estilização aplicada a todos os elementos p irmãos de h2 (no caso os que contém Texto 1 e Texto 2) */
}
```

### Pseudo-classes - Selecionando elementos

Seleciona elementos que estejam em um estado específico, como o primeiro elemento filho, o elemento que está sob o cursor do mouse, etc. O nome da pseudo-classe é aplicado a um seletor e vem sempre após dois pontos: `:pseudo-class-name`. Ex: `p:hover`.

- `:first-child`: seleciona o primeiro filho, considera de modo geral, não o primeiro filho de um tipo específico de seletor. Por exemplo:

Com um CSS:

```css
ul li:first-child {
  color: blue;
}
```

Caso 1: Selecionará o li que contém "A".

```html
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
```

Caso 2: Não selecionará nada, pois o primeiro filho não é um li, mas um h2.

```html
<ul>
  <h2>ABC</h2>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
```

- `:nth-of-type(x)`: seleciona o enésimo (x) elemento de um determinado tipo. Começa a contagem em 1. No caso 2 do exemplo anterior, para selecionar o li que contém "A": `ul li:nth-of-type(1)`.

- `:nth-child(x)`: seleciona o enésimo (x) elemento filho. Não faz distinção de tipo, se a condição não for satisfeita é simplesmente ignorada. No caso 2 do exemplo anterior, `ul li:nth-child(1)` não seleciona nada, `ul li:nth-child(2)` seleciona o li que contém "A".

Para a pseudo-classe `:nth-child(x)` é possível passar `even` e `odd`.

### Pseudo-classes - Ações do usuário

- `:hover`: aplica a estilização quando o usuário passa o mouse sobre o que está sendo selecionado. Ex: passar o mouse sobre um link.

- `:focus`: aplica a estilização quando o usuário foca um elemento. Ex: clicar em um campo de input.

### Pseudo-classes - Atributos

- `:disabled`: aplica a estilização quando uma tag possui o atributo _disabled_.

- `:required`: aplica a estilização quando uma tag possui o atributo _required_.

### Pseudo-elements

Com pseudo-elements é possível adicionar elementos HTML pelo próprio CSS. O nome do pseudo-element é aplicado a um seletor e vem sempre depois de dois dois pontos: `::pseudo-element-name`. Ex: `li::before`. Deve existir uma propriedade _content_, ainda que vazia "", para que a estilização seja aplicada.

- `::before`: adiciona **antes** do conteúdo que já existe.
- `::after`: adiciona **depois** do conteúdo que já existe.
- `::first-line`: aplica a estilização somente na primeira linha, não necessita da propriedade _content_.

Também é possível combinar pseudo-classes com pseudo-elements, por exemplo: `p:nth-of-type(2)::first-line`.

<br>

## Uma caixa dentro da outra

**Box model**: estrutura dos elementos HTML com width, height, content, border, padding e margin.

- `box-sizing`: Define como o tamanho da box é calculado.

  - `box-sizing: content-box`: as propriedades de tamanho (width/height) são aplicadas ao conteúdo, não à box.
  - `box-sizing: border-box`: as propriedades de tamanho são aplicadas à box.

- `display`: Define como uma box se comporta em relação a outra (comportamento externo).

  - `display: block`: ocupa toda a linha, tamanho pode ser definido, além de padding, margin, border. Por padrão: p, div, section, headings h1, h2...
  - `display: inline`: coloca os elementos lado a lado, tamanho **não** pode ser definido, apenas os valores **horizontais** de padding, margin e border são considerados. Por padrão: a, strong, span, em...
  - `display: inline-block`: coloca os elementos lado a lado mas permite definição de tamanho.

- `margin`: Define os espaços entre os elementos. Pode receber valores em _<length>_, _<percentage>_ ou _auto_.
  - `margin-top: <value>`
  - `margin-right: <value>`
  - `margin-bottom: <value>`
  - `margin-left: <value>`
  - Shorthand:
    - `margin: <top-value> <right-value> <bottom-value> <left-value>`.
    - Ex: `margin: 10px 11px 12px 13px` = 10px acima, 11 à direita, 12 embaixo e 13 à esquerda.
    - `margin: <top-value> <right-left-values> <bottom-value>`.
    - Ex: `margin: 10px 11px 12px` = 10px acima, 11 a direita e à esquerda, 12 embaixo.
    - `margin: <top-bottom-values> <right-left-values>`.
    - Ex: `margin: 10px 11px` = 10px acima e abaixo, 11 a direita e à esquerda.
    - `margin: <all-values>`.
    - Ex: `margin: 10px` - 10px em todas as direções.

**IMPORTANTE:** _margin collapsing_ -> a margem de baixo de um elemento é colapsada com a margem de cima do elemento seguinte, assim, as distâncias não são somadas. Se houver diferença de tamanho, vale a maior. Já para margens horizontais o comportamento é outro, as distâncias sao somadas. Se os elementos tiverem display diferentes (ex inline-block e block), as margens verticais são somadas. [Exemplos aqui](./style.css).

- `padding`: Define o preenchimento interno da box. É muito semelhante ao _margin_, porém internamente.

**IMPORTANTE:** o _padding_ pode causar alterações na largura de um elemento dependendo de sua _box-sizing_.

- `border`: bordas da box. "Super shorthand", recebe três valores e aplica a todas as bordas:
  - `<border-width>`: largura.
  - `<border-style>`: estilo, há muitos tipos, ex: solid, dotted, dashed, etc.
  - `<border-color>`: cor.
  - Shorthand: pode-se atribuir características específicas para cada borda (top, right, bottom, left) especificando. Ex: `border-top-color: red`.
  - Para retirar a borda: `none`.

**IMPORTANTE:** por padrão, a borda está **fora** da box, ou seja, uma box de 100px, com borda de 1px, terá 102px em uma determinada direção. Para manter o tamanho definido para a box, usar `box-sizing: border-box`.

- `outline`: semelhante a `border`, mas difere em alguns aspectos:
  - Não é parte do Box Model, entao **não modifica** o tamanho da box (fica ao redor da border).
  - Pode sobrepor outros elementos, dependendo do tamanho.
  - Pode ser diferente de retangular.
  - Não permite ajustes individuais.
  - É mais usado pelo _user agent_ para acessibilidade.

<br>

## Agora sim, cores

**Colors:**

- **Named value**: nome da cor, ex: `red`, `green`, `blue`.
- **HEX**: valor hexadecimal para vermelho, verde e azul. Vai de _00_ a _ff_. Por exemplo: #0000ff é azul, com _00_ para vermelho, _00_ para verde e _ff_ para azul. Pode ser adicionada transparência colocando o valor a direita: #0000ff7a é azul com 50% de transparência.
- **RGB / RGBA**: valores numéricos para vermelho, verde e azul. Vai de _0_ a _255_. Ex: rgb(0,0,255) é azul. Para adicionar transparência, passar um valor de 0 a 1 para o canal alpha: rgba(0,0,255,0.5) é azul com 50% de transparência.
- **HSL / HSLA**: valores para hue, saturation e lightness. Hue vai de 0 a 359 (ângulo no disco, partindo de vermelho 0º, sendo verde em 120º e azul em 240º). Saturation vai de 0 a 100% (posição radial no disco, sendo o centro sem saturação). Lightness vai de 0 a 100% sendo: 0% preto, 100% branco e 50% o tom "padrão" para aquela cor. De 0% a 50% a cor é escurecida, e de 50% a 100% a cor é clareada. Ex: hsl(240, 100%, 50%) é azul. Para adicionar transparência, passar um valor de 0 a 1 para o canal alpha: hsla(240,100%,50%,0.5) é azul com 50% de transparência.

**Background:**

- `background-color`
- `background-image`
- `background-repeat`: por padrão repete a imagem, para desativar, passar `no-repeat`. Para repetir em Y: `repeat-y`. Para repetir em X: `repeat-x`.
- `background-position`: posição do fundo, pode receber valores para o eixo vertical e horizontal, se apenas um, aplica em ambos. `top`, `right`, `bottom`, `left`.
- `background-size`:
  - `background-size: cover`: imagem aumenta ou diminui para cobrir o elemento.
  - `background-size: contain`: uma das dimensoes se adapta para que a imagem fique contida no elemento.
  - `background-size: <valueX> <valueY>`: altera o tamanho da imagem.
- `background-origin`:
  - `border-box`: inicia a background image sob a border.
  - `content-box`: coloca a background image no content, respeitando o padding, por ex.
  - `padding-box`: inicia a background image a partir do content (ignora padding).
- `background-clip`: mesma coisa do `origin` mas atua tanto a imagem quanto na cor.
- `background-attachment`: manipula como a imagem está "presa" à tela. Por padrão é `scroll`, mas pode receber `fixed` para não rolar com a página. Se for o background de um elemento, esse elemento fica semelhante a uma "janela" que mostra partes do background.

Para colocar múltiplos backgrounds, separar por vírgulas no shorthand.

<br>

## Posicionando foguetes

Fluxo normal dos elementos: um abaixo do outro (box) ou um ao lado do outro (inline).

`position`: controla onde o elemento irá ficar, alterando o fluxo normal dos elementos.

- `position: static`: valor padrão (fluxo normal).

- `position: relative`: Seu lugar se mantém reservado no fluxo (nenhum outro elemento o ocupa). Não muda a ancoragem (fica referente a sua posição original - `left: 0px; right: 0px` é sua posição original). Permite a definição de 5 propriedades de posicionamento:

  - `top: <value>`
  - `right: <value>`
  - `bottom: <value>`
  - `left: <value>`
  - `z-index: <value>`

- `position: absolute`: Seu lugar não se mantém reservado no fluxo (outros elementos tomam seu lugar). Muda a ancoragem para ter referência na página toda (`left: 0px; right: 0px` é o canto superior esquerdo da viewport). Contudo, se o elemento pai possuir um `position` diferente de `static`, o elemento pai se torna a referência para ancoragem. Também permite a definição de 5 propriedades de posicionamento.

- `position: fixed`: Elemento fixo na tela. Mantém a ancoragem em sua posição natural, mas deixa outros elementos ocuparem seu lugar. Permite a definição de 5 propriedades de posicionamento.

- `display: flex`: flexbox. É aplicado ao elemento pai e altera como os elementos filhos são posicionados. Por padrão, coloca os elementos inline, para mudar para coluna (normal sem flexbox): `flex-direction: column`.

  - `justify-content: space-between`: justifica os elementos adicionando espaço entre eles. O primeiro elemento fica colado a esquerda e o último colado a direita.
  - `justify-content: center`: centraliza os elementos (todos colados).

- `display: grid`: grid. É aplicado ao elemento pai e cria uma malha com espaços para posicionar os elementos filhos.
  - `grid-template-areas: "<areaName> <areaName>"...`: cria o template para o posicionamento dos elementos filhos. Cada linha é identificada com uma string que contém os nomes dos elementos separados por espaço, ex: `"header header" "main side"`. Esses nomes depois devem ser atribuídos aos elementos filhos utilizando: `grid-area: <nome>`, por ex: `grid-area: header`.
  - `grid-template-rows: <value> <value>...`: define o tamanho das linhas. Ex: `grid-template-rows: 80px 1fr 40px`. `fr` é uma unidade de fração, nesse caso, como as outras medidas são fixas, vai ocupar todo o espaço restante.
  - `grid-template-columns: <value> <value>...`: define o tamanho das colunas. Ex: `grid-template-columns: 1fr 125px`.

<br>

## Alinhando os planetas (flexbox)

**PROPRIEDADES APLICADAS NO ELEMENTO PAI:**

- `flex-direction`: determina a direção dos itens. Pode receber `row` (padrão, elementos inline), `row-reverse` (inline começando do final), `column` (alinhamento vertical, um elemento sobre outro começando de cima), ou `column-reverse` (começa de baixo).

- `flex-wrap: wrap`: criar mais de um eixo principal, aumentando o número de linhas (se necessário) para tentar respeitar o tamanho dos elementos. O padrão é `nowrap`.

- `flex-flow` é um shorthand para `flex-direction` e `flex-wrap`.

- `justify-content`: determina o alinhamento/distribuição dos elementos dentro de uma flexbox no EIXO PRINCIPAL.

  - `justify-content: flex-start`: padrão, alinha à esquerda.
  - `...flex-end`: alinha à direita.
  - `...center`: centraliza.
  - `...space-around`: adiciona espaços do mesmo tamanho ao redor (não colapsa os espaço, então entre dois elementos o tamanho do espaço será duplicado).
  - `...space-between`: adiciona espaços entre os elementos, o primeiro fica colado à esquerda (ou em cima) e o último fica colado à direita (ou embaixo).
  - `...espace-evenly`: adiciona espaços de mesmo tamanho entre os elementos.

- `align-items`: determina o alinhamento dos elementos no EIXO CRUZADO.

  - `align-items: stretch`: comportamento padrão, os elementos se esticam para preencher todo o espaço da flexbox.
  - `...flex-start`: elementos ficam do tamanho do conteúdo e alinhados ao **início** do eixo cruzado.
  - `...flex-end`: elementos ficam do tamanho do conteúdo e alinhados ao **final** do eixo cruzado.
  - `center`: elementos ficam do tamanho do conteúdo e **centralizados**.

- `gap: <lengthValue>`: adiciona espaços entre os elementos (não ao redor).

**PROPRIEDADES APLICADAS NOS ELEMENTOS FILHOS:**

- `flex-basis: <lengthValue>`: determina o tamanho do elemento ao longo do eixo principal: width (quando row) e height (quando column). Tem precedência em relação a tamanhos dinâmicos estabelecidos com `flex-grow`.

- `flex-grow: <number>`: determina como um elemento deve crescer para o ocupar o espaço vazio. Por padrão é 0 (não cresce). O número indica a proporção entre os tamanhos dos elementos.

- `flex-shrink: <number>`: determina como um elemento deve encolher dentro do container. Por padrão é 1 (o elemento encolhe). Para o valor 0 o elemento não encolhe. Se algum elemento tiver valor maior, ele encolherá mais que os outros (limitando-se ao tamanho de seu conteúdo, por exemplo).

- `flex`: é um shorthand para `flex-grow`, `flex-shrink` e `flex-basis` (nessa ordem). Pode ter de 1 a 3 valores.

- `order: <number>`: ordena os elementos. Por padrão é 0. Altera apenas visualmente, não estruturalmente (html). Por questões de acessibilidade, se possível, seria melhor alterar diretamente a ordem no HTML.
