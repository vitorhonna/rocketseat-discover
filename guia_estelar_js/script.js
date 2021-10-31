// Exercício 1: Transformar notas escolares

function converterNotaParaConceito(nota) {
  let conceito;

  if (typeof nota != "number" || nota < 0 || 100 < nota) {
    conceito =
      "ERRO: Nota inválida (Deve ser uma valor numérico entre 0 e 100)";
  } else if (nota >= 90) {
    conceito = "A";
  } else if (nota >= 80) {
    conceito = "B";
  } else if (nota >= 70) {
    conceito = "C";
  } else if (nota >= 60) {
    conceito = "D";
  } else {
    conceito = "F";
  }

  return conceito;
}

// console.log(converterNotaParaConceito(100));
// console.log(converterNotaParaConceito(643));
// console.log(converterNotaParaConceito(105450));
// console.log(converterNotaParaConceito(-100));
// console.log(converterNotaParaConceito(0));
// console.log(converterNotaParaConceito(12));
// console.log(converterNotaParaConceito(65));
// console.log(converterNotaParaConceito(75));
// console.log(converterNotaParaConceito(85));
// console.log(converterNotaParaConceito(95));
// console.log(converterNotaParaConceito(60));
// console.log(converterNotaParaConceito(70));
// console.log(converterNotaParaConceito(80));
// console.log(converterNotaParaConceito(90));

// ------------------------------------------------------------------------

// Exercício 2: Sistema de gastos familiares

function calcularSaldo(receitas, despesas) {
  let saldo = 0;

  for (let receita of receitas) {
    saldo += receita;
  }

  for (let despesa of despesas) {
    saldo -= despesa;
  }

  return saldo.toFixed(2);
}

function criarMensagem(saldo) {
  let mensagem = "O saldo ";

  if (saldo == 0) {
    mensagem += "é Zero :|";
  } else if (saldo > 0) {
    mensagem += `está Positivo: ${saldo} $ :)`;
  } else {
    mensagem += `está Negativo: ${saldo} $ :(`;
  }

  return mensagem;
}

let family = {
  receitas: [10000, 20.25, 30.35],
  despesas: [533.95, 15.8, 500.85],
};

let saldo = calcularSaldo(family.receitas, family.despesas);

let mensagem = criarMensagem(saldo);

// console.log(mensagem);

// ------------------------------------------------------------------------

// Exercício 3: Conversor de unidades de temperatura

function convertTemp(tempStr) {
  let unit = tempStr[tempStr.length - 1].toLowerCase();

  let tempNum = Number(tempStr.slice(0, tempStr.length - 1));
  if (isNaN(tempNum)) {
    throw new Error("ERRO: A temperatura deve ser um valor numérico");
  }

  switch (unit) {
    case "f":
      return ((tempNum - 32) * (5 / 9)).toFixed(2) + " C";
    case "c":
      return (tempNum * (9 / 5) + 32).toFixed(2) + " F";
    default:
      throw new Error("ERRO: Unidade inválida, deve ser F ou C");
  }
}

try {
  let tempC = convertTemp("77 f");
  let tempF = convertTemp("25 C");
  // console.log(tempC);
  // console.log(tempF);
} catch (error) {
  console.log(error.message);
}

// ------------------------------------------------------------------------

// Exercício 4: Buscando e contando dados em arrays

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai  rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const numberOfCategories = booksByCategory.length;
// console.log(numeroCategorias + " categorias");

function countBooksByCategory(booksByCategory, categoryName) {
  let numberOfBooksByCategory = 0;

  for (let category of booksByCategory) {
    if (category.category == categoryName) {
      return (numberOfBooksByCategory = category.books.length);
    }
  }
}
const numberOfBooksByCategory = countBooksByCategory(
  booksByCategory,
  "Riqueza"
);
// console.log(numberOfBooksByCategory);

function countAuthors(booksByCategory) {
  const authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      // console.log(book.author);
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    }
  }
  // console.log(authors);
  const numAuthors = authors.length;
  return numAuthors;

  // Outra forma, caso também precisasse saber o número de livros por autor depois:
  // for (let category of booksByCategory) {
  //   for (let book of category.books) {
  //     authors.push(book.author);
  //   }
  // }
  // let uniqueAuthors = new Set(authors);
  // let numUniqueAuthors = uniqueAuthors.size;
  // console.log(authors.length); // Augusto Cury 2x
  // console.log(numUniqueAuthors);
  // return numUniqueAuthors;
}
const numberOfAuthors = countAuthors(booksByCategory);
// console.log(numberOfAuthors);

function getBooksByAuthor(booksByCategory, author) {
  const books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      // console.log(book.author);
      if (book.author == author) {
        books.push(book.title);
      }
    }
  }
  return books;
}
const booksByAuthor = getBooksByAuthor(booksByCategory, "Augusto Cury");
// console.log(booksByAuthor);
