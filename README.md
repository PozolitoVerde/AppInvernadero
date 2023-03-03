# AppInvernadero

Para arrancar el Proyecto necesitaremos la version actual de nodejs y la version 16.0.0 esta se instalara instalando node version manager.

https://github.com/coreybutler/nvm-windows/releases

De este repositorio descagaremos el ejecutable nvm-setup.exe, una vez instalado procederemos a instalar la version de node con el siguiente comando.

nvm install 16.0.0

Cuando finalice la instalacion podremos cambiar de version utilizando el siguiente comando.

nvm use 16.0.0

Una vez teniendo todo listo procederemos a instalar expo-cli si es que no lo tenemos, ejecutariamos el siguiente comando.

npm i -g expo-cli

El siguiente paso seria clonar este repositorio, despues con la version actual de nodejs realizar el siguiente comando dentro de la carpeta Appinvernadero.

npm install

Ahora cambiaremos la a la version 16.0.0 de nodejs con el siguiente comando

nvm use 16.0.0

Despues ejecutaremos el siguiente comando

npm run web

Nos aparecera un error el cual nos indicara que tenemos que instalar algo parecido a lo siguiente.

npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1

Lo instalaremos y ahora si ya podremos iniciar el proyecto con el comando.

npm run web
