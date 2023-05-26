import { LitElement, html, css } from "lit";
import { WiredButton } from "wired-elements";
import { WiredCard } from "wired-elements";
// import { WiredInput } from "wired-elements";
import '@dile/dile-input/dile-input';
import { WiredSlider } from "wired-elements";


export class EitCounter extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    h2 {
      color: red;
    }
    .myParagraph {
      color: blue;
      font-size: 24px;
    }
    wired-input {
      width: 70px;
      font-size: 24px;
      padding: 5px;
    }
    wired-button {
      background-color: #8cf;
    }
    wired-button.decrement {
      background-color: #fcc;
    }
    wired-card {
      margin: 1rem;
      padding: 1rem;
    }
    @media (min-width: 500px) {
      .myParagraph {
        font-size: 50px;
        color: orange;
      }
    }
  `;

  //   static get properties() { //old sintaxis, it works again
  //     return {
  //         prop1: { types: String }
  //     };
  //   }

  static properties = {
    counter: {
      type: Number,
      reflect: true, // actualiza automaticamente en 'Element' de la console
    },
    quantity: { type: Number },
  };

  constructor() {
    super();
    this.counter = 0;
    this.quantity = 10;
  }

  render() {
    return html`
      <wired-card elevation="3">
        <slot></slot>
        <h2>This is a H2</h2>
        <p class="myParagraph">${this.counter}</p>
        <p>
          <wired-slider
            .value="${this.quantity}"
            min="1"
            max="20"
            @change=${this.handleChangeSlider}
          ></wired-slider>
        </p>
        <dile-input
          label="Quantity"
          class="form-control"
          name="quantity"
          id="quantity"
          type="number"
          value="${this.quantity}"
          @input=${this.handleQuantityChange}
        >
        </dile-input>
        <wired-button @click=${this.increment}>Incrementar</wired-button>
        <wired-button class="decrement" @click=${this.decrement}
          >Decrementar</wired-button
        >
      </wired-card>
    `;
  }

  get quantityInput() {
    return this.shadowRoot.getElementById("quantity");
  }

  handleQuantityChange(event) {
    this.quantity = parseInt(event.target.value);
  }

  handleChangeSlider(event) {
    this.quantity = parseInt(event.detail.value);
  };

  increment() {
    this.counter += this.quantity;
  }

  decrement() {
    this.counter -= this.quantity;
  }
}

customElements.define("eit-counter", EitCounter);
