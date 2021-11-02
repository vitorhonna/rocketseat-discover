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
  <source src="./video.mp4" type="video/mp4">
  <source src="./video.avi" type="video/avi">
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
<img src="https://source.unsplash.com/random" alt="alt text" title="titulo da imagem">
```

- `figure`

Adiciona imagens de maneira semântica, aceitando captions, por exemplo:

```html
<figure>
  <img src="" alt="">
  <figcaption>Image caption</figcaption>
</figure>
```

- `svg`

Scalable Vector Graphics, imagens vetorizadas. Aceita atributos como width e height e tags filhas para descrever elementos, como `circle`, `rect`...

Se for um arquivo, pode ser adicionado com a tag `img`


#

## Formulários de outro planeta

