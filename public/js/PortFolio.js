"use strict";
class PortFolio {
    constructor() {
        this.$header = document.querySelector("header.header");
        window.onscroll = () => {
            this.$header.classList.toggle('sticky', window.scrollY > 0);
        };
    }
}
new PortFolio();
