import {Component} from '@angular/core';

@Component({
  selector: 'sample-component',
template: `
<div>
    prova!!!
</div>
<h1>
    title!!!
</h1>`,
styles: [
`div {
    color: red;
}
h1 {
    background-color: green;
}`],
})
export class SampleComponent {

  constructor() {

  }

}