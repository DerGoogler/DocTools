export class dtf {
    [x: string]: any;

    constructor(id: any) {
        this.id = id;
    }

    elmt = (element: any, text: any) => {
        var elements = document.createElement(element);
        elements.innerHTML = text;
        elements.setAttribute('id', this.id)
        document.body.appendChild(elements);
    }

    styl = (css: any) => {
        document.getElementById(this.id).setAttribute('style', css);
    }

    attr = (type: any, data: any) => {
        document.getElementById(this.id).setAttribute(type, data);
    }

    full = (html:any) => {
        document.getElementById(this.id).innerHTML = html;
    }
}