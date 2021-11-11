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
\[class="red"] {
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

- `:nth-of-type(x)`: seleciona o enésimo (x) elemento filho de um determinado tipo. Começa a contagem em 1. No caso 2 do exemplo anterior, para selecionar o li que contém "A": `ul li:nth-of-type(1)`.

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

<br>

## Agora sim, cores

<br>

## Posicionando foguetes

<br>

## Alinhando os planetas
