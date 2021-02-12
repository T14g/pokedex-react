# Pokedex usando React & Redux by Tiago Oliveira ( T14g )
## Como rodar o projeto

Faça um npm install para instalar as dependências do projeto e em seguida rode com npm start para rodar em modo de desenvolvimento.

## Libs usadas no projeto
- "react-dom"
- "react-redux"
- "react-scripts
- "redux"
## Libs Extras
- "redux-logger" ( para ir testando durante o desenvolvimento )
- "styled-components" ( para componentizar o estilo )


## Sobre o projeto

O projeto visa acessar a API de pokemons e listar com scroll infinito todos os pokemons, exibindo inicialmente algumas informações básicas como imagem, nome, número e tipos.
Foi criado com um mindset de componentes, usando o styled-components para também componentizar o estilo.
Ao clicar em um pokemon o usuário pode ver detalhes do mesmo, e caso deseje pode voltar a tela inicial clicando no botão Back que apareça se o usuário estiver vendo detalhes.

O usuário pode também clicar em uma das evoluções do pokemon na tela de detalhes fazendo com que a aplicação renderize as informações do pokemon clicado.

## Soluções desenvolvidas
Foi criada uma solução de bloqueio de tela que evita que o usuário fique fazendo scroll enquanto a chamada de GET estiver sendo realizada, nessa solução é disparada uma action para o reducer alterar o state e bloquear o scroll e exibir um componente de Loading... até o Fetch ser concluído.

Houve também um aproveitamento de chamadas na API pois para exibir as informações na tela inicial como tipo,nome,id já é feita uma chamada para retornar os detalhes, estes que são salvos no state e sendo usados depois na tela de detalhes onde mais detalhes são exibidos.

## Sobre ciclos de vida de componentes

Bom, ciclos de vida de um componente são eventos que acontecem entre o nascimento e o fim de um componente.

Há basicamente três etapas:
-Mounting - quando o componente nasce.
-Update : quando por exemplo as props ou state mudam.
-Unmount : o fim do componente.

Render() é o principal método de ciclo de vida, que acontece no surgimento do componente e quando ele é atualizado.

Temos também o componentDidMount(), que pode "imitado" com React Hooks, que foi o caso neste projeto no componente Pokedex onde há uma chamada para API após o componente renderizar, carregando os dados dos pokemons para dar sequência.

Temos ainda a fase onde o componente irá alterar algo na DOM devido a alterações de props ou state, pode ser o usado o componentDidUpdate() aqui para realizar algo logo após o componente atualizar devido a mudanças.

Por último vem a fase de unmount onde você pode por exemplo excluir dados antes do componente desaparecer com o componentWillUnmount() por exemplo.


## Sobre performance

1) Um ponto que gostaria de citar foi ter bloqueado o scroll enquanto o fetch de um scroll anterior é feito, assim evita problemas da aplicação ficar fazendo requests a todo momento e causar erros.

2) Foi tratado um problema quando o fetch do pokemon retornava 404 e quebrava o scroll dos outros.

3) Os detalhes do pokemon não são buscados em uma nova requisição quando o usuário clica para ver detalhes mas sim buscados no state onde ficam salvos desde a renderização inicial do pokemon na listagem, salvando assim uma requisição.


## Sobre o tempo
Foquei no que julguei como o principal dentro desses 5 dias para realizar desafio, conforme combinado.
Não fiquei full time neste projeto pois eu tinha alguns compromissos  durante a semana, acredito que Fui fazendo partes, componentes conforme surgia tempo, um pouco de manhã, um pouco de tarde, um pouco de noite um pouco de madrugada.

Acredito que se tivesse tido 7 dias poderia ter melhorado alguns pontos no projeto.


Obrigado e tenham um bom dia.