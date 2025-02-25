/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `counter-app`
 * 
 * @demo index.html
 * @element counter-app
 */
export class CounterApp extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "counter-app";
  }

  constructor() {
      super();
      this.count = 0;


      this.t = this.t || {};
      this.t = {
        ...this.t,
        title: "Title",
      };
      this.registerLocalization({
        context: this,
        localesPath:
          new URL("./locales/counter-app.ar.json", import.meta.url).href +
          "/../",
        locales: ["ar", "es", "hi", "zh"],
      });
    }
      // Lit reactive properties
    static get properties() {
      return {
        ...super.properties,
        
        count: { type: Number},
      };
    }
      // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .counter {
          font-size: var(--counter-app-label-font-size, var(--ddd-font-size-xxl));
        }
      `];
    }
    // Lit render the HTML
      render() {
        return html`
      <div class="wrapper">
      <div class="counter">{this.count}</div>
      <div class ="button">
        <button>-1</button>
        <button>+1</button>
      </div>
    </div>`;
      }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);