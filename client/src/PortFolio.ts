
class PortFolio {
    private $header: HTMLElement;

    constructor() {

        this.$header = document.querySelector("header.header")! as HTMLElement;

        window.onscroll = () => {
            this.$header.classList.toggle('sticky', window.scrollY > 0);
        };
    }
}

new PortFolio();