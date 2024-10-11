Objetivo
Em grupos de 5 pessoas, construir uma aplicação React que permite
adicionar, remover e listar livros. A aplicação deve utilizar Redux para o
gerenciamento global da lista de livros e Context API para alternar entre temas
(claro e escuro). Cada integrante será responsável por uma parte específica da
aplicação e, ao final, as partes serão integradas em uma única aplicação funcional.

Divisão de Tarefas e Funções
Cada integrante será responsável por uma parte específica da aplicação. Ao
final, todos se reunirão para integrar as partes.

Parte 1: Configuração Inicial do Projeto (Integrante 1)
Tarefas
1. Criar o projeto React utilizando Create React App.
2. Instalar as dependências necessárias para o Redux e o React Redux.
3. Configurar a estrutura inicial do Redux, criando a store e o reducer básico. Esta
parte servirá de base para as próximas etapas.
Bash
npm install redux react-redux
Parte 2: Criação do Reducer para Gerenciamento de Livros (Integrante 2)
Tarefas
1. Criar o reducer responsável por gerenciar uma lista de livros. O estado inicial será
uma lista vazia de livros.
2. Definir as actions necessárias para adicionar e remover livros da lista.
O foco desta parte é preparar o Redux para que ele controle a lista de livros
globalmente.
Parte 3: Conectar Componentes ao Redux (Integrante 3)
Tarefas
1. Criar os componentes necessários: ListaLivros (para exibir os livros) e
FormularioLivro (para adicionar novos livros).
2. Conectar os componentes ao estado global do Redux, permitindo que os livros
adicionados sejam mostrados na tela e possam ser removidos.
Essa parte envolve o uso do Redux para acessar e modificar o estado global.
Parte 4: Implementação da Context API para Tema (Integrante 4)
Tarefas
1. Criar o contexto de tema (claro e escuro) utilizando a Context API do React.
2. Implementar um botão para alternar entre os temas e garantir que toda a aplicação
seja afetada pela escolha do tema.

O objetivo desta parte é utilizar a Context API para mudar dinamicamente o estilo
da aplicação, oferecendo uma experiência visual personalizada.
Parte 5: Integração dos Componentes e Estilos (Integrante 5)
Tarefas
1. Integrar todos os componentes criados pelos outros membros dentro do arquivo
principal da aplicação (App.js).
2. Aplicar os estilos baseados no tema selecionado e garantir que os componentes
conectados ao Redux estejam funcionando corretamente.
O trabalho desta parte é garantir que a aplicação funcione de maneira coesa,
integrando o gerenciamento de livros e o sistema de temas.
Integração Final e Testes
Todos os membros do grupo devem se reunir para integrar as partes, resolver
possíveis conflitos de código e testar à aplicação como um todo.
A aplicação deve permitir que os usuários adicionem e removam livros da lista e
alterem entre os temas claro e escuro.
Resultado Esperado
Ao final da atividade, à aplicação React deverá estar funcional, permitindo:
1. Gerenciar uma lista de livros utilizando Redux.
2. Alternar entre temas claro ---e escuro utilizando Context API.
