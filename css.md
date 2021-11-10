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
- **line*height**: altura da linha. Pode ser definido com ou sem unidades de medida.
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

<br>

## Uma caixa dentro da outra

<br>

## Agora sim, cores

<br>

## Posicionando foguetes

<br>

## Alinhando os planetas
