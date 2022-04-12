# Imersão FrontExpert 01

 O layout do projeto está no arquivo `assets/OnFoodIFX.fig`.

 https://github.com/odanieldcs/frontexpert-imersao01


### MINHAS ANOTAÇÕES 
Inicio do projeto: 11/04/22


## 00 ANTES DE COMEÇAR:
Inicializar API no thunder client:

1) https://api.imersaofx.danieldcs.com/cities
2) https://api.imersaofx.danieldcs.com/deliveries?city=sao-paulo-sp

TOKEN: Z21hcnRpbnMxMzA5QGdtYWlsLmNvbQ==


instalar ultima versão do NodeJS
instalar Yarn ---> npm install -g yarn (no console)
instalar next gs


criar aplicação NEXTJS
    yarn create next-app --typescript (no console)
    nomear o diretorio no console
    cd on-food (para entrar no  diretorio criado)
    code . (para abrir o vscode)

yarn run dev (para iniciar o projeto)

instalar TAILWINDCSS
https://tailwindcss.com/docs/guides/nextjs


## 01 Configurações iniciais do css

definir variaveis padrões no css
ex: 

:root{
    --background :"#f5f5f5";
}


para aplicar:

body{
    background-color: var(--background);
}

## 02 Outros topicos da aula 01:

-Como criar uma pagina estatica no NextJS
-Como criar uma pagina de url dinamica
        -criar uma slug (variavel dinamica) ex: {city}




