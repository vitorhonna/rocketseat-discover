# HTML - Anotações

## HTML que faz sentido, para todos

Elementos semânticos

- `blockquote` : bloco de citação
- `cite` : autor da citação
- `header` : cabeçalho (pode mais de um por página)
- `nav` : barra de navegação (geralmente dentro do header)
- `main` : conteudo principal (um por página, dentro do body)
- `article` : artigo (dentro do main)
- `aside` : conteúdos levemente relacionados (glossário, biografia, etc)
- `footer` : rodapé (autor, contato, copyright, sitemap, etc)
- `section` : seção, componente de outra tag, tem título e conteúdo

Elementos Genéricos Não-Semânticos

- `div` : elemento de bloco, usar classes para mais significado
- `span` : elemento de texto, usar classes para mais significado

#

## Posso ver e ouvir o HTML

- `video`

Aceita os atibutos: src, controls, width, height, autoplay, preload="metadata ou none", loop, muted, poster="./thumbnail.png".

```html
<video src="./video.mp4" controls>
  <p>alt text</p>
</video>
```

Fallback content:

```html
<video controls>
  <source src="./video.mp4" type="video/mp4" />
  <source src="./video.avi" type="video/avi" />
  <p>alt text</p>
</video>
```

- `audio`

Semelhante a tag `video`.

- `iframe` : inline frame element

Adiciona conteúdo externo.

Aceita os atributos: src, width, height, title (para acessibilidade), allow="", allowfullscreen, frameborder="0", style

- `img`

Aceita os atributos: src, width, height, alt, title...

```html
<img
  src="https://source.unsplash.com/random"
  alt="alt text"
  title="titulo da imagem"
/>
```

- `figure`

Adiciona imagens de maneira semântica, aceitando captions, por exemplo:

```html
<figure>
  <img src="" alt="" />
  <figcaption>Image caption</figcaption>
</figure>
```

- `svg`

Scalable Vector Graphics, imagens vetorizadas. Aceita atributos como width e height e tags filhas para descrever elementos, como `circle`, `rect`...

Se for um arquivo, pode ser adicionado com a tag `img`

#

## Formulários de outro planeta

\- `form`

Atributos básicos:
-> _Action_: para onde o formulário vai ser submetido, se vazio envia para a página onde estou
-> _Method_: método http para envio (GET, POST...)

```html
<input action="login" method="post"></form>
```

Para deixar o formulário mais semântico, utilizar as tags `fieldset` e `legend`:

Atributos:
-> _disabled_ desativa a entrada de dados.
-> _form_ referencia o ID de um form, caso a tag `fieldset` fora da tag `form`
-> _name_ define o nome do grupo

Elemento `label`: serve para associar ou identificar uma ou mais tags de entrada de dados, utilizar o atributo _for_ para referenciar um ID de uma tag `input`.

Elemento `button`: representa um botão e é utilizado para envia os dados de um formulário.

Atributos:
-> _type_: pode ser submit, reset ou button.
-> _autofocus_: foco automático
-> _disabled_: desativa o botão
-> _name_: key para o conteúdo passado por _value_
-> _value_: valor que será passado
-> _form_: link com o ID de um form

```html
<form action="">
  <fieldset name="inputs-contact">
    <legend>Contato</legend>
    <label for="">Nome</label>
    <input type="text" />
    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

Elemento `datalist`: dropdown com uma lista de valores como sugestão a uma tag `input`, porém os valores são apenas sugestões, não são obrigatórios. O usuário pode digitar no campo. Cada opção da lista é dada por uma tag `option`.

```html
<input type="text" list="fruitsdata" placeholder="Escolha uma fruta"/>

<datalist id="fruitsdata">
  <option>apple</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
</datalist>
```