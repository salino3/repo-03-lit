import { LitElement, html, css } from 'lit';
// https://www.youtube.com/watch?v=JXcNPXGHjlM&t=3856s&ab_channel=DesarrolloWeb.com
// min 1.04.00
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
      input {
        width: 70px;
        font-size: 24px;
        padding: 5px;
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
    reflect: true // actualiza automaticamente en 'Element' de la console
  };

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <slot></slot>
      <h2>This is a H2</h2>
      <p class="myParagraph">${this.counter}</p>
      <input class="form-control" id="quantity" type="number" value="0" name="quantity" />
      <button @click=${this.increment}>+ 1</button>
      <button @click=${this.decrement}>- 1</button>
    `;
  }

  get quantity() {
   return this.shadowRoot.getElementById("quantity").value;
  }

  increment() {
    this.counter += parseInt(this.quantity);
  }
  decrement() {
    this.counter -= parseInt(this.quantity);
  }
}

customElements.define('eit-counter', EitCounter);
