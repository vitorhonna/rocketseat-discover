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

Atributos básicos:\
-> _Action_: para onde o formulário vai ser submetido, se vazio envia para a página onde estou\
-> _Method_: método http para envio (GET, POST...)

```html
<input action="login" method="post"></form>
```

Para deixar o formulário mais semântico, utilizar as tags `fieldset` e `legend`:

Atributos:\
-> _disabled_ desativa a entrada de dados.\
-> _form=""_ referencia o ID de um form, caso a tag `fieldset` fora da tag `form`.\
-> _name=""_ define o nome do grupo.

Elemento `label`: serve para associar ou identificar uma ou mais tags de entrada de dados, utilizar o atributo _for=""_ para referenciar um ID de uma tag `input`.

Elemento `button`: representa um botão e é utilizado para envia os dados de um formulário.

Atributos:.\
-> _type=""_: pode ser submit, reset ou button\
-> _autofocus_: foco automático\
-> _disabled_: desativa o botão\
-> _name=""_: key para o conteúdo passado por _value_\
-> _value=""_: valor que será passado\
-> _form=""_: link com o ID de um form

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
<input type="text" list="fruitsdata" placeholder="Escolha uma fruta" />

<datalist id="fruitsdata">
  <option>apple</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
</datalist>
```

**Tag `input`:**

Atributos:

-> _type=""_: text, date, number, file, email password...\
-> _name=""_\
-> _id=""_\
-> _autocomplete=""_: busca valores de um certo tipo para sugerir autocomplete\
-> _autofocus_: foco automático do cursor\
-> _value=""_: valor pré preenchido automaticamente no campo\
-> _disabled_: bloqueia o campo para edição\
-> _readonly_: bloqueia o campo para edição\
-> _form=""_: referencia o ID de uma tag `form`\
-> _name=""_: key para os valores enviados ao backend\
-> _required_: campo de preenchimento obrigatório\
-> _placeholder=""_: texto sugestivo dentro do campo

<br>

**Tipo _password_ - `<input type="password">`:**

```html
`<input
  type="password"
  pattern="[0-9a-fA-F]{4, 8}"
  title="Coloque um HEX de no min 4 e max 8 caracteres"
/>`
```

Atributos:\
-> _minlength=""_ / _maxlength=""_: limite o número de caracteres.\
-> _pattern=""_: expressão regular para validar o que está sendo digitado no campo, ex: `pattern="[0-9a-fA-F]{4,8}"` valida se a entrada contém somente letras e números, no mínimo 4 e no máximo 8 caracteres.\
-> _title_: é exibido junto com o balão de erro quando o formulário não pode ser enviado.\
-> _placeholder_ \
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _inputmode=""_: configura o tipo de teclado que deve aparecer: numeric, por exemplo\
-> _autocomplete=""_: ligado/desligado: "on/off", tem outras opções

<br>

**Tipo _email_ - `<input type="email">`:**

Espera que o usuário entre um email e faz uma validação básica.

Atributos: \
-> _placeholder=""_ \
-> _value=""_: valor previamente preenchido no campo\
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _multiple_: aceita várias entradas separadas por vírgula\
-> _minlength / maxlength_ \
-> _size=""_: tamanho do campo em número de caracteres \
-> _pattern_: regex, por ex, apenas emails do domínio rocketseat: `pattern=".+@rocketseat\.com\.br"` \
-> _title_: o title é mostrado quando um valor inválido tenta ser enviado \
-> _list_: faz link com um ID de uma `datalist` para sugestões

<br>

**Tipo *URL* - `<input type="url">`:**

Espera que o usuário digite uma URL e faz validação.

Atributos: \
-> _placeholder=""_: ex. http://example.com \
-> _value=""_: valor previamente preenchido no campo\
-> _readonly_ \
-> _disabled_ \
-> _required_ \
-> _minlength / maxlength_ \
-> _size=""_: tamanho do campo em número de caracteres \
-> _pattern_: regex \
-> _list_: faz link com um ID de uma `datalist` para sugestões \
-> _spellcheck="true"_: habilita correção ortográfica neste campo

<br>

**Tipo *file* - `<input type="file">`:**

Permite o usuário escolher um ou mais arquivos para enviar no formulário.

Atributos: \
-> _value=""_: contém o arquivo a ser enviado \
-> _accept=""_: descreve os tipos de arquivos aceitos, ex: .doc, .png, image/* \
-> _files_: lista de arquivo(s) a serem enviados \
-> _multiple_: permite o envio de múltiplos arquivos 

Para enviar arquivos, a tag `form` deve possuir um atributo _action=""_, com o destino, _method="post"_, e _enctype="multipart/form-data"_:

```html
<form action="" method="post" enctype="multipart/form-data">
  <input type="file">
  <button>Send</button>
</form>
```

<br>

**Tipo *color* - `<input type="color">`:**

Interface para selecionar uma cor

Atributos: \
-> _value=""_: RGB, se for inválido, será exibido preto \
-> _list_: faz link com um ID de uma `datalist` para sugestões 

<br>

**Tipo *checkbox* - `<input type="checkbox">`:**

Caixas de seleção que podem ser marcadas/desmarcadas. Seleciona um valor a ser enviado. Se estiver desmarcado, nao envia nada. Se estiver marcado, envia o nome=on.

Atributos: \
-> _name_ \
-> _value=""_: valor que é passado, por padrão é "on" \
-> _checked_: estado inicial marcado 

Para várias caixas, utiliza o mesmo _name_ e trocar os _value_. 

<br>

**Tipo *hidden* - `<input type="hidden">`:**

É invisível para o usuário, porém é enviado junto com o formulário. Por exemplo, para enviar um timestamp.

<br>

**Tipo *radio* - `<input type="radio">`:**

Permite a seleção de uma única opção em uma lista (com bolinhas).

Atributos: \
-> _checked_: indica o campo marcado inicialmente \
-> _value_: valor que o campo contém 

<br>

**Tipo *search* - `<input type="search">`:**

Usado para campos de busca. Igual ao tipo "text", porem podendos ser diferente dependendo do user agent (navegador).

Atributos: \
-> _list_: faz link com uma `datalist`  \
-> _pattern_: regex \
-> _aria-label_: opção de acessibilidade quando não se pode usar `label` 

<br>

**Tipo *number* - `<input type="number">`:**

Espera uma entrada numérica.

Atributos: \
-> _min="" / max=""_ \
-> _step_

<br>

**Tipo *range* - `<input type="range">`:**

Exibe um controle para selecionar um valor numérico. Pode ser um slider ou dial control.

Atributos: \
-> _min="" / max=""_ \
-> _step_

<br>

**Tipo *date* - `<input type="date">`:**

Exibe um calendário para selecionar uma data.

<br>

**Tipo *datetime-local* - `<input type="datetime-local">`:**

Utilizado para selecionar data e hora.

<br>

**Tipo *month* - `<input type="month">`:**

Utilizado para selecionar um mês.

<br>

**Tipo *week* - `<input type="week">`:**

Utilizado para selecionar uma semana.

<br>

**Tipo *time* - `<input type="time">`:**

Utilizado para selecionar uma hora.

#

**Tag `textarea`:**

Recebe entradas de texto com múltiplas linhas.

Atributos: \
-> _id=""_ \
-> _name=""_ \
-> _rows=""_ \
-> _cols=""_ \
-> _maxlength="" / minlength=""_ \
-> _wrap="off"_: desativa a quebra de linha, pode ser *soft* ou *hard*, pesquisar \
-> outros como para input: *autocomplete*, *autofocus*, *disabled*, *placeholder*, *readonly*, *form*, *required*. 

```html
<textarea name="message" id="message" cols="30" rows="10"></textarea>
```

#

**Tags `select` e `option`:**

Cria um dropdown com opções descritas com a tag `option` usando o atributo _value_.

Atributos: \
-> *multiple*: permite multiplas escolhas \
-> *size*: define quantas opções aparecem na lista

```html
<label for="listaOpcoes">Qual a opção?</label>
<select name="opcao" id="listaOpcoes">
  <option value="" selected disabled>Selecione uma opção</option>
  <option value="op1">Opção 1</option>
  <option value="op2">Opção 2</option>
  <option value="op3">Opção 3</option>
  <option value="op4">Opção 4</option>
</select>    
```

Elemento `optgroup`: cria grupos de opções que podem ser escolhidas, é filho de `select` e pai dos `option`.

```html
<label for="listaOpcoes">Qual a opção?</label>
<select name="opcao" id="listaOpcoes"  multiple size="5">
  <option value="" selected disabled>Selecione uma opção</option>
  <optgroup label="Grupo 1">
    <option value="op1">Opção 1</option>
    <option value="op2">Opção 2</option>
    <option value="op3">Opção 3</option>
  </optgroup>
    <optgroup label="Grupo 2">
    <option value="op1">Opção 1</option>
    <option value="op2">Opção 2</option>
    <option value="op3">Opção 3</option>
  </optgroup>
</select>    
```