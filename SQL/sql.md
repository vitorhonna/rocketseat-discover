# SQL, a caixa preta da nossa nave

## Tipos de Campos

- `TEXT`: texto, pode conter caracteres especiais, números, etc.
- `NUMBER`: números.
- `DATETIME`:  combinação de data e hora.
- `PRIMARY KEY`: chave primária, identifica um dado e deve ser única, apenas uma por tabela.
- `FOREIGN KEY`: chave estrangeira, faz referência a uma chave primária de outra tabela, uma tabela pode ter diversas chaves estrangeiras.
- `UNIQUE`: indica que um valor deve ser único.

Regras para nomes de tabelas e campos:
- Deve começar por uma letra
- Pode conter underlines: `_`
- **Não** são permitidos os caracteres especiais: `( ) + - / * " ; = & > < ^ ' { } %`
- **Não** deve conter caracteres acentuados
- **Não** pode conter espaços

`SELECT`: seleciona dados de uma tabela

```sql
SELECT * FROM aluno

SELECT nome, responsavel FROM aluno

SELECT nome, responsavel FROM aluno WHERE matricula = 1

SELECT nome, responsavel FROM aluno WHERE nome LIKE '%g%'
```

**Operadores Relacionais**:

- `=`, *Igual*: utilizado para números.
- `LIKE`: utilizado para textos, pode receber regex (por ex: `%` indica qualquer sequência de caracteres de qualquer tamanho). 
- `>`, *Maior que*
- `<`, *Menor que*
- `>=`, *Maior ou igual*
- `<=`, *Menor ou igual*
- `<>` ou `!=`, *Diferente de*

**Operadores Matemáticos**:

- `+`, *Adição*
- `-`, *Subtração*
- `*`, *Multiplicação*
- `/`, *Divisão*
- `%`, *Módulo*

**Operadores Lógicos**:

- `AND`
- `OR`
- `BETWEEN`
- `IN` e `NOT IN`
- `IS NULL` e `IS NOT NULL`

