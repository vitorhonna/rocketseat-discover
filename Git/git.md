# Resumo GIT

- `&&` : encadear comandos, ex: `git add . && git commit -m "msg"`

- `git log` : ver log de commits (`--oneline` mostra só comentários)

- `git status` : ver status da stage area e arquivos não versionados

- `git <comando> --help` : abre a documentação

- `git init` : iniciar repositório

- `git clone <caminho/link github>` : clonar repositório

- `git add .` : stage todos os arquivos, para arquivos específicos, colocar o nome em vez do ponto

- `git commit -m "Escrever mensagem aqui"` : commit das mudanças

- `git commit -am "Mensagem"` : encadeia add e commit para arquivos já versionados

- `git commit --amend -m "Nova mensagem` : alterar último commit (arquivos / msg)

- `git restore <filename>` : restaurar arquivo descartando alterações

- `git restore --staged <filename>` : remover arquivo da stage area (não reverte alterações)

- `git rm --cached <filename>` : remover do versionamento

- `git rm <filename>` : deleta o arquivo e coloca a mudança na stage area

- `git diff` : mostra as modificações em arquivos versionados mas não commitados ou na stage area

- `git diff --staged` : modificações nos arquivos da staged area

- `git mv <name1> <name2>` : mover ou renomear arquivos

- `git checkout <commit code> -- <filename>` : restaura um arquivo de algum commit, o commit code são os primeiros 7 digs do commit

- `git revert HEAT~<number>` : reverte todos os arquivos para <number> commits antes do atual

- `git show <commit code>` : mostra as modificações inseridas por um commit, usar `--color-words` para destacar palavras alteradas

- `git log --oneline --graph --all`: mostra um gráfico com as modificações, commits são resumidos para uma linha. Adicionar `-10` para imprimir apenas 10 commits (ou outro número). Adicionar `--simplify-by-decoration` para simplificar o histórico

- `git log --graph --all --oneline --pretty=format:'%C(yellow)%h%C(reset)%C(auto)%d%C(reset) %C(white)%s%C(reset) %C(magenta)[%an]%C(reset) %C(cyan)(%ar)%C(reset)' -5`: gráfico de commits personalizado. Adicionar como alias de `git tree` em: ~/.gitconfig

[Referências adicionais](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
