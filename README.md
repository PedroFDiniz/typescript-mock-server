## 1 - Para Rodar Localmente

### 1.1 - Dependências básicas
#### 1.1.1 - NodeJS
O [NodeJS](https://nodejs.org/pt) é o ambiente de execução de JavaScript usado no projeto. recomenda-se utilizar a versão v22.11.0 ou superior. Para checar se esta dependência está devidamente instalada, e qual sua versão use o seguinte comando:
```shell
node -v
```

#### 1.1.2 - Git
O [Git](https://git-scm.com/downloads) é o sistema de versionamento de projetos mais utilizado hoje em dia. Essa ferramenta permite que vários membros de uma equipe possam trabalhar no mesmo projeto através de repositórios online. Recomenda-se ter instalada em sua máquina a versão 2.40.1 ou superior. Para checar se esta dependência está devidamente instalada, e qual sua versão use o seguinte comando:
```shell
git --version
```

### 1.2 - Clonagem do Projeto
Uma vez instaladas as dependências básicas, você deve navegar até a pasta onde você gostaria de armazenar os arquivos do projeto no seu computador, e abrir um terminal de linha de comando.

Uma vez aberto o terminal, você pode abrir o [Visual Studio Code](https://code.visualstudio.com/) (IDE recomendada) nesta pasta específica através do seguinte comando:
```shell
code .
```
E então utilizar o terminal da própria IDE para executar o comando a seguir:
```shell
git clone https://github.com/PedroFDiniz/typescript-mock-server.git
```
OBSERVAÇÃO: Certifique-se de usar o terminal Git Bash, porque o PowerShell e o Command Prompt podem se recusar a rodar alguns scripts.
### 1.3 - Instalação das Dependências
Uma vez clonado o projeto, navegue até a pasta específica baixada no terminal (Git Bash fortemente recomendado) e a partir de lá, execute o seguinte script:
```shell
npm install .
```

Este passo deve tomar um tempo, pois o Node Package Manager (NPM) instalará todas as dependências do projeto.

### 1.4 - Rodando os Scripts
Ao finalizar a instalação das dependências, o projeto estará pronto para ser rodado. Para maior conveniência, preparei o seguinte script para executar o projeto:
```shell
npm start
```