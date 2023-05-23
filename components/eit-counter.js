import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        border: solid;
        /* background-color: blue; */
      }
      h2 {
        color: red;
      }
      .myParagraph {
        color: blue;
        font-size: 24px;
      }
      @media (min-width: 500px) {
        .myParagraph {
          font-size: 50px;
          color: orange;
        }
      }
    `,
  ];

  //   static get properties() { //old sintaxis, it works again
  //     return {
  //         prop1: { types: String }
  //     };
  //   }

  static properties = {
    counter: { type: Number },
    reflect: true // actualiza automaticamente en Element de la console
  };

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <slot></slot>
      <h2>Flavio</h2>
      <p class="myParagraph">${this.counter}</p>
      <button @click=${this.increment}>+ 1</button>
      <button @click=${this.decrement}>- 1</button>
    `;
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter = this.counter - 1;
  }
}
customElements.define('eit-counter', EitCounter);
