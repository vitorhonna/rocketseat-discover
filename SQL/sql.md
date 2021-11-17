# SQL, a caixa preta da nossa nave

## **Tipos de Campos**:

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

## **Operadores Relacionais**:

- `=`, *Igual*: utilizado para números.
- `LIKE`: utilizado para textos, pode receber regex (por ex: `%` indica qualquer sequência de caracteres de qualquer tamanho). 
- `>`, *Maior que*
- `<`, *Menor que*
- `>=`, *Maior ou igual*
- `<=`, *Menor ou igual*
- `<>` ou `!=`, *Diferente de*

## **Operadores Matemáticos**:

- `+`, *Adição*
- `-`, *Subtração*
- `*`, *Multiplicação*
- `/`, *Divisão*
- `%`, *Módulo*

## **Operadores Lógicos**:

- `AND`
- `OR`
- `BETWEEN`
- `IN` e `NOT IN`
- `IS NULL` e `IS NOT NULL`

## **Mais Comandos**:

- `INSERT INTO`: adiciona dados a uma tabela. Ex: 
```sql
INSERT INTO aluno (nome, cpf, responsavel) VALUES ('John Doe', 15947863255, 'Jane Doe')
```

- `UPDATE`: altera dados já presentes na tabela. Ex:
```sql
UPDATE aluno SET nome='Johnny Doe', cpf=15947863256 WHERE responsavel LIKE 'Jane Doe'
```

- `DELETE`: deleta dados da tabela. Ex:
```sql
`DELETE FROM aluno WHERE matricula = 4`
```

Para deletar todos os dados de uma tabela, utilizar `DELETE FROM` sem passar uma posição específica com `WHERE`.
```sql
-- Deleta os dados de todos os alunos
`DELETE FROM aluno`
```

## **Unindo tabelas**:

- `JOIN`: une tabelas que possuem alguem relacionamento. Ex:
```sql
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```

- `JOIN com WHERE`: 
```sql
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
WHERE funcionarios.id_departamento = 2
```

- `JOIN especificando campos`:
```sql
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
WHERE funcionarios.id_departamento = 2
```

- `Alias`: nomes temporários para facilitar a leitura/escrita do código. A estruturação das tabelas **não** é modificada. Ex:
```sql
SELECT f.nome, f.cpf, d.descricao
FROM funcionarios as f
JOIN departamentos as d
ON d.id_dept = f.id_departamento
```

Também é possível alterar os nomes do campos na visualização de resultados:

```sql
SELECT f.nome as 'Nome', f.cpf as 'CPF', d.descricao as 'Departamento'
FROM funcionarios as f
JOIN departamentos as d
ON d.id_dept = f.id_departamento
```

- `LEFT OUTER JOIN`: une duas tabelas que possuem algum relacionamento, mas também retorna todos os dados da tabela da esquerda (passada primeiro, com `FROM`), mesmo que não tenha relacionamento com a da direita (passada depois, ao lado de `JOIN`).

Por exemplo, para mostrar todos os funcionários, incluindo os que não têm departamento:
```sql
SELECT f.nome as 'Nome', f.cpf as 'CPF', d.descricao as 'Departamento'
FROM funcionarios as f
LEFT OUTER JOIN departamentos as d
ON d.id_dept = f.id_departamento
```

Já para mostrar todos os departamentos, incluindo os que não têm funcionários, deve-se inverter a ordem de passagem das tabelas:
```sql
SELECT f.nome as 'Nome', f.cpf as 'CPF', d.descricao as 'Departamento'
FROM departamentos as d
LEFT OUTER JOIN funcionarios as f
ON f.id_departamento = d.id_dept
```

## **Comandos Avançados**:

- `ORDER BY`: organiza os resultados em ordem crescente/alfabética (`ASC` por padrão). Para organizar em ordem decrescente, passar `DESC`. Ex:
```sql
-- Ordem alfabética A-Z
SELECT *
FROM funcionarios
ORDER BY nome -- Por padrão ASC
```

```sql
-- Ordem alfabética invertida Z-A
SELECT *
FROM funcionarios
ORDER BY nome DESC
```

- `LIMIT`: limita a quantidade de resultados mostrados.
```sql
SELECT * 
FROM funcionarios
LIMIT 5
```

- `OFFSET`: desloca o limite de resultados mostrados.
```sql
SELECT * 
FROM funcionarios
LIMIT 5 OFFSET 2
```

- `COUNT`: conta as linhas não nulas de uma determinada coluna.
```sql
SELECT COUNT(nome)
FROM funcionarios
```

- `GROUP BY`: agrupa valores para serem contados.
```sql
SELECT id_departamento, COUNT(id_departamento)
FROM funcionarios
GROUP BY id_departamento
```

- `JOIN, GROUP BY, COUNT e Alias juntos`
```sql
SELECT d.descricao as 'Departamento', COUNT(f.id_departamento) as 'Número de funcionários'
FROM funcionarios as f
JOIN departamentos as d
ON f.id_departamento = d.id_dept
GROUP BY f.id_departamento
```

- `HAVING`: funcionamento semelhante ao `WHERE`, ou seja, para limitar os resultados de acordo com uma condição. Contudo, `WHERE` não pode ser utilizado para resultados agrupados, usa-se `HAVING` no lugar. Por exemplo, para mostrar os departamento com dois funcionários ou mais:
```sql
SELECT d.descricao as 'Departamento', COUNT(f.id_departamento) as 'Número de funcionários'
FROM funcionarios as f
JOIN departamentos as d
ON f.id_departamento = d.id_dept
GROUP BY f.id_departamento
HAVING COUNT(f.id_departamento) >= 2
```

## **Comandos nas tabelas**:

- `CREATE TABLE`: cria tabelas no banco de dados.
```sql
CREATE TABLE fornecedores (
  id_fornecedor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_fornecedor TEXT UNIQUE,
  nome_responsavel TEXT, 
  telefone INTEGER
)
```

```sql
CREATE TABLE produtos (
  id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_produto TEXT,
  categoria TEXT,
  id_fornecedor INTEGER,
  FOREIGN KEY(id_fornecedor) REFERENCES fornecedores(id_fornecedor)
)
```

- `ALTER TABLE`: modifica tabelas existentes.
```sql
-- Altera o nome da tabela
ALTER TABLE funcionarios RENAME TO colaboradores
```

```sql
-- Altera o nome de uma coluna dentro de uma tabela
ALTER TABLE departamentos RENAME COLUMN descricao TO nome_depto
```

- `DROP TABLE`: exclui tabelas (não os dados da tabela).
```sql
DROP TABLE produtos
```