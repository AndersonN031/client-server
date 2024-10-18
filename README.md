Configuração do projeto:
  - Instale as dependencias: express, cors
  - Instale as devDependecias:  @types/express, @types/node, nodemon,ts-node, typescript

Iniciando Express app:
  - Crie um arquivo 'nodemon.json' e dentro dele adicione apenas o necessário.
  - Crie um script para o nodemon.

Estruturando diretórios:
  - Crie os seguintes diretórios dentro do src: 
    * controllers
    * exceptions 
    * middlewares
    * routes
    * schema

Iniciando prisma no app Express:
  - Instale o prisma e @prisma/client
  - Rode o prisma com 'npx prisma init'
  - Adicione nome, senha e port(5432: padrão postgresql) na URL DATABASE_URL

Crie um User model:
  - Crie uma tabela User
  - Adicione os seguintes dados: 
    * name
    * email
    * password
    * createdAt
    * updatedAt
  - Após isso, migre esses dados utilizando npx prisma migrate dev --name 'nome da migração'

Variáveis de ambiente:
  - Utilize o pacote 'dotenv' para fazer chamadas do .env sem exibir o valor no github, ou seja, deve-se adicionar o .env no gitignore por segurança e não utilizar nenhum dado explicitamente em qualquer código, invés disso utilize um process.env.nome_da_variavel

Definindo rotas:
  - Crie as rotas auth e index dentro da pasta routes

Criando fluxo de cadastro:
  - Primeiro baixe o bcrypt para hashear as senhas e adicione o express.json no arquivo raíz para retornar middlewares, também faça a chamada do prismaClient em uma constante.
  - Em seguida, no arquivo /controllers/auth.ts crie o fluxo de cadastro e o chame na rota auth.ts.
  - Utilize o Postman para fazer os testes das rotas.

Criando fluxo de login:
   - O fluxo de login é parecido com o cadastro, deve-se apenas comparar as credenciais para fazer uma busca no banco de dados e ver se está igual.



