# Descrição

Esse é um passo a passo usando o `npx create-expo-app@latest` para gerarmos tanto os arqivos .aab (App store) quanto o .apk para rodar localmente usando emulador ou dispositivo físico. 

### Passo 1 :
É necessário especificar o nome do projeto como estamos fazendo abaixo: 

![Capturar1](https://github.com/user-attachments/assets/e7bc6475-ecfe-46b1-a3f7-17b67744a9a2)

No noso caso escolhemos o nome `react-native-tutorial`


### Passo 2 :
Vamos resetar o projeto com o script nativo : `reset-project` 

![Capturar2](https://github.com/user-attachments/assets/55e8025d-bf3e-43c2-a75a-5e6f7309bf8c)
![Capturar3](https://github.com/user-attachments/assets/87847b15-cb49-40e2-9898-7516c80bb2d6)

Assim vamos ter o projeto limpo para o desenvolvimento.

### Passo 3 :

Vamos rodar o comando `npx expo start` para iniciar o ambiente de desenvolvimento no emulador

![Capturar5](https://github.com/user-attachments/assets/4eac619a-cae7-43d6-a697-52954be4ff70)
![Capturar4](https://github.com/user-attachments/assets/f15fc5a5-1fe4-4d2a-b0cb-7c164d647c81)

Pronto 🥳 o aplicativo está rodando no emulador, utilizando o projeto limpo.
Siga as instruções disponibilizadas em aula para construir a interface e concluir a parte do frontend.


## Buildando o projeto no EAS


Obs :
- É necessário instalar a cli do EAS e logar através do prompt de comandos ou terminal de sua escolha, se você já está logado no cli é só seguir o tutorial.

Vamos para a parte que interessa, como buildar o projeto na EAS e posteriormente gerar os arquivos .aab e .apk

- Caso não queira lidar com scripts manuais para gerar o arquivo `.apk` do `.aab` siga os passos em Observações Finais e continue o tutorial ignorando a etapa do comando `eas build --platform android`, você ainda será guiado pelas mesmas etapas de build das imagens abaixo. 

Vamos rodar o comando `eas build --platform android`, com isso vamos começar o processo de build, vamos deixar o EAS criar automaticamente o projeto no nosso usuário.
Com esse comando vamos gerar uma build `.aab` É o que queremos, pois precisamos do nosso applicativo com a imagem em produção configurada. 
Caso contrário não será possivel rodar o aplicativo no emulador como queremos.

![Capturar6](https://github.com/user-attachments/assets/02fef767-1bef-4251-9522-08f103029603)

Continuando vamos escolher um nome para o nosso package.
Escolhemos `com.wakenedo.reactnativetutorial`

![Capturar7](https://github.com/user-attachments/assets/b2d90f0a-55b4-4002-80bf-4c314a6844e8)

Vamos tambem deixar o EAS lidar com as keys, depois dessa etapa o build vai entrar na fila, vamos esperar até completar.

![Capturar8](https://github.com/user-attachments/assets/864c3cfe-1ede-49ca-8f7a-1cc5fe6af55f)

Quando completar você deve ver seu terminal algo como a imagem que está abaixo

![Capturar9](https://github.com/user-attachments/assets/e890d0be-5e70-4edb-b077-2cd0c4bcc137)

Apos a build ser concluída, o `eas.json` será adicionado na raíz do seu projeto.

Em nosso `app.json` foi adicionado na chave android o nosso package: `com.wakenedo.reactnativetutorial` 

![Capturar10](https://github.com/user-attachments/assets/810b970e-0787-42b3-9725-a6f0c5dfc7b8)

Ok com o build concluido podemos baixar o arquivo `.aab`.

![Capturar20](https://github.com/user-attachments/assets/e2b06640-b3a1-4387-afc7-d557c5747a05)

Como não podemos instalar diretamente o arquivo `.aab`, vamos precisar de um script que use o `bundletool` para gerar o arquivo `.apk` que precisamos e instalar em nosso emulador ativo.

Baixe o bundletool.jar:
[Bundletool](https://github.com/google/bundletool/releases)

![Capturar11](https://github.com/user-attachments/assets/d2072672-b4a1-4608-be65-514a658b6bf9)

Vamos adicionar na raíz do projeto uma pasta `scripts` e nela criar o script `install-aab.sh`

![Capturar13](https://github.com/user-attachments/assets/e8d9a07b-6db4-4572-8550-8723bee75abd)

Com o script introduzido, adicione o bundletool.jar que você baixou no pasta `scripts`, encontre o caminho do seu arquiv `.aab` vamos alterar ou adicionar um comando na chave scripts em `package.json` para executarmos nosso script. 

Vamos também adicionar o caminho que o nosso script vai criar as apks, em nosso `.gitignore` vamos adicionar `/output-apks` desse jeito vamos ignorar essa files. Também adicione o caminho ou arquivo do `bundletool.jar`.

![Capturar12](https://github.com/user-attachments/assets/daace1c1-ac5d-4d7f-8102-c02cf93cc9ae)
![Capturar19](https://github.com/user-attachments/assets/77a6f24e-1236-4b01-b48a-a18ed24d2ba5)

No fim a pasta script deve ter essa estrutura: 

![Capturar14](https://github.com/user-attachments/assets/a94e3036-8228-48b6-b5cf-d0d05f57cee4)

Vamos rodar o script, utilizando o comando `npm run instatall-aab "caminho para seu arquivo .aab"` veja na imagem caso ainda esteja com dúvidas.

Como podemos ver na imagem abaixo, o script rodou corretamente e instalou no meu emulador.

![Capturar15](https://github.com/user-attachments/assets/983577dc-8556-4c3f-8cef-a00c8e1f560a)

Vamos encontrar o arquivo `.apk` instalado, procure por um aplicativo com o nome igual ao nome do seu projeto que contém o build no expo 

![Capturar16](https://github.com/user-attachments/assets/58b40fa0-3615-4f49-b122-97f853451b7c)

A aplicação está rodando a partir do arquivo `.apk` em produção, como precisávamos, vamos testar a navegação a seguir.

![Capturar17](https://github.com/user-attachments/assets/f74a8914-1261-44b1-95fe-c799cf427b23)

✔️ Navegação fucnionando corretamente.

![Capturar18](https://github.com/user-attachments/assets/b4f57659-7ec6-45a2-b6f8-9142cd113e79)

✔️ Arquivo `.aab` gerado com sucesso.
✔️ Arquivo `.apk` gerado e instalado com sucesso no emulador
✔️ Navegação no projeto e funções corretamente funcionando

# Observações finais

Se você preferir não lidar com scripts manuais ou o bundletool, também é possível gerar o arquivo .apk diretamente com o EAS, sem precisar converter o .aab. Basta ajustar o eas.json com a opção abaixo:

`"preview": {
  "distribution": "internal",
  "android": {
    "buildType": "apk"
  }
}`

depois rode o comando, `eas build --profile preview --platform android`

O Expo irá gerar o .apk e fornecer um link para download ao final do build, como esse:

`
✅ Build successful
👉 Download: https://expo.dev/artifacts/eas/...
`

Esse .apk pode ser instalado diretamente no seu emulador ou dispositivo físico, facilitando ainda mais o processo — sem necessidade de usar o bundletool ou script adicional.
