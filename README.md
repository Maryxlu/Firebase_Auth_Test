### Passo a passo dos procedimentos:

```txt
1- instalei template com o 
npx react-native init Firebase_Auth_Test

2- mudei a versão do gradle em 
android\gradle\wrapper\gradle-wrapper.properties
de 8.6 para 8.5

3- iniciei a aplicação 
npx react-native start

4- após esperar funcionou

---DESENVOLVENDO A APLICAÇÃO---

5- Baixei o Firebase-Tools (emulador de firebase)(para ajudar em debugging (apesar de ser inutil pois temos o firebase))
npm install -g firebase-tools

6- Instalei o react native firebase (A biblioteca do Firebase)
npm install --save @react-native-firebase/app
(yarn) yarn add @react-native-firebase/app 

7- Eu registrei as chaves SHA1 e SHA256
cd android && ./gradlew signingReport

(No Firebase Criei um APP novo android e inseri a chave SHA1)

(No Firebase Após criado o APP eu baixei o google-services.json)
<android\app\google-services.json> (local)

8- Configurei os build.gradle com as configurações android diretamente do Firebase
android\build.gradle
android\app\build.gradle

( pra evitar erros renomeei o nome do pacote em 
android\app\google-services.json )
9- Reconstruir app com os arquivos novos
 npx react-native run-android

10- Adicionar a biblioteca google react native: sign-in 
https://react-native-google-signin.github.io/docs/install#installing <-local
comando:
yarn add @react-native-firebase/app
yarn add @react-native-google-signin/google-signin

11- Importei a biblioteca de autenticação
npm install --save @react-native-firebase/auth

12- Adicionei linhas de código e um botão que receberá os metódos 
index.js
App.tsx

13- Rodei o APP 
E funcionou yipeee!!!
```

## Como rodar no seu app

Para rodar o app simplesmente:

```bash
npx react-native start
```

## Bugs conhecidos:

- ERRO NO LINUX:
error Failed to install the app. Command failed with EACCES: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
spawn ./gradlew EACCES.

DO:chmod 755 android/gradlew
