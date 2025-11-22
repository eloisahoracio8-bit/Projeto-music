Uso do `DefaultLoginLayout` (componente standalone)

Este componente é `standalone: true` e pode ser importado em outros componentes standalone.

Exemplo de uso em outro componente (ex.: `Login`):

```ts
import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../components/default-login-layout/default-login-layout';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayout],
  template: `<app-default-login-layout></app-default-login-layout>`,
})
export class Login {}
```

Se você preferir usar módulos (NgModule), exporte o `DefaultLoginLayout` a partir de um módulo e importe/declare normalmente.
