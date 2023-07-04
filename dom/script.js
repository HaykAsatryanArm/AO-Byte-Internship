class DomElement {
    constructor(type, attrs, children) {
        this.type = type;
        this.attrs = attrs;
        this.children = children;
    }

    draw() {
        const element = document.createElement(this.type);
        Object.keys(this.attrs).forEach(attr => element.setAttribute(attr, this.attrs[attr]));

        if (this.children === undefined || this.children === null) {
            return element;
        } else if (typeof this.children === 'string') {
            element.textContent = this.children;
        } else if (Array.isArray(this.children)) {
            this.children.forEach(child => {
                const newElement = new elements[child.type](child.attrs, child.children);
                element.append(newElement.draw());
            });
        } else {
            console.log(this.children);
            const newElement = new elements[this.children.type](this.children.attrs, this.children.children);
            element.append(newElement.draw());
        }

        return element;
    }
}

const elements = {
    a: class A extends DomElement {
        constructor(attrs, children) {
            super('a', attrs, children);
        }
    },
    abbr: class Abbr extends DomElement {
        constructor(attrs, children) {
            super('abbr', attrs, children);
        }
    },
    address: class Address extends DomElement {
        constructor(attrs, children) {
            super('address', attrs, children);
        }
    },
    area: class Area extends DomElement {
        constructor(attrs, children) {
            super('area', attrs, children);
        }
    },
    article: class Article extends DomElement {
        constructor(attrs, children) {
            super('article', attrs, children);
        }
    },
    aside: class Aside extends DomElement {
        constructor(attrs, children) {
            super('aside', attrs, children);
        }
    },
    audio: class Audio extends DomElement {
        constructor(attrs, children) {
            super('audio', attrs, children);
        }
    },
    b: class B extends DomElement {
        constructor(attrs, children) {
            super('b', attrs, children);
        }
    },
    base: class Base extends DomElement {
        constructor(attrs, children) {
            super('base', attrs, children);
        }
    },
    bdi: class Bdi extends DomElement {
        constructor(attrs, children) {
            super('bdi', attrs, children);
        }
    },
    bdo: class Bdo extends DomElement {
        constructor(attrs, children) {
            super('bdo', attrs, children);
        }
    },
    blockquote: class Blockquote extends DomElement {
        constructor(attrs, children) {
            super('blockquote', attrs, children);
        }
    },
    body: class Body extends DomElement {
        constructor(attrs, children) {
            super('body', attrs, children);
        }
    },
    br: class Br extends DomElement {
        constructor(attrs, children) {
            super('br', attrs, children);
        }
    },
    button: class Button extends DomElement {
        constructor(attrs, children) {
            super('button', attrs, children);
        }
    },
    canvas: class Canvas extends DomElement {
        constructor(attrs, children) {
            super('canvas', attrs, children);
        }
    },
    caption: class Caption extends DomElement {
        constructor(attrs, children) {
            super('caption', attrs, children);
        }
    },
    cite: class Cite extends DomElement {
        constructor(attrs, children) {
            super('cite', attrs, children);
        }
    },
    code: class Code extends DomElement {
        constructor(attrs, children) {
            super('code', attrs, children);
        }
    },
    col: class Col extends DomElement {
        constructor(attrs, children) {
            super('col', attrs, children);
        }
    },
    colgroup: class Colgroup extends DomElement {
        constructor(attrs, children) {
            super('colgroup', attrs, children);
        }
    },
    data: class Data extends DomElement {
        constructor(attrs, children) {
            super('data', attrs, children);
        }
    },
    datalist: class Datalist extends DomElement {
        constructor(attrs, children) {
            super('datalist', attrs, children);
        }
    },
    dd: class Dd extends DomElement {
        constructor(attrs, children) {
            super('dd', attrs, children);
        }
    },
    del: class Del extends DomElement {
        constructor(attrs, children) {
            super('del', attrs, children);
        }
    },
    details: class Details extends DomElement {
        constructor(attrs, children) {
            super('details', attrs, children);
        }
    },
    dfn: class Dfn extends DomElement {
        constructor(attrs, children) {
            super('dfn', attrs, children);
        }
    },
    dialog: class Dialog extends DomElement {
        constructor(attrs, children) {
            super('dialog', attrs, children);
        }
    },
    div: class Div extends DomElement {
        constructor(attrs, children) {
            super('div', attrs, children);
        }
    },
    dl: class Dl extends DomElement {
        constructor(attrs, children) {
            super('dl', attrs, children);
        }
    },
    dt: class Dt extends DomElement {
        constructor(attrs, children) {
            super('dt', attrs, children);
        }
    },
    em: class Em extends DomElement {
        constructor(attrs, children) {
            super('em', attrs, children);
        }
    },
    embed: class Embed extends DomElement {
        constructor(attrs, children) {
            super('embed', attrs, children);
        }
    },
    fieldset: class Fieldset extends DomElement {
        constructor(attrs, children) {
            super('fieldset', attrs, children);
        }
    },
    figcaption: class Figcaption extends DomElement {
        constructor(attrs, children) {
            super('figcaption', attrs, children);
        }
    },
    figure: class Figure extends DomElement {
        constructor(attrs, children) {
            super('figure', attrs, children);
        }
    },
    footer: class Footer extends DomElement {
        constructor(attrs, children) {
            super('footer', attrs, children);
        }
    },
    form: class Form extends DomElement {
        constructor(attrs, children) {
            super('form', attrs, children);
        }
    },
    h1: class H1 extends DomElement {
        constructor(attrs, children) {
            super('h1', attrs, children);
        }
    },
    h2: class H2 extends DomElement {
        constructor(attrs, children) {
            super('h2', attrs, children);
        }
    },
    h3: class H3 extends DomElement {
        constructor(attrs, children) {
            super('h3', attrs, children);
        }
    },
    h4: class H4 extends DomElement {
        constructor(attrs, children) {
            super('h4', attrs, children);
        }
    },
    h5: class H5 extends DomElement {
        constructor(attrs, children) {
            super('h5', attrs, children);
        }
    },
    h6: class H6 extends DomElement {
        constructor(attrs, children) {
            super('h6', attrs, children);
        }
    },
    head: class Head extends DomElement {
        constructor(attrs, children) {
            super('head', attrs, children);
        }
    },
    header: class Header extends DomElement {
        constructor(attrs, children) {
            super('header', attrs, children);
        }
    },
    hgroup: class Hgroup extends DomElement {
        constructor(attrs, children) {
            super('hgroup', attrs, children);
        }
    },
    hr: class Hr extends DomElement {
        constructor(attrs, children) {
            super('hr', attrs, children);
        }
    },
    html: class Html extends DomElement {
        constructor(attrs, children) {
            super('html', attrs, children);
        }
    },
    i: class I extends DomElement {
        constructor(attrs, children) {
            super('i', attrs, children);
        }
    },
    iframe: class Iframe extends DomElement {
        constructor(attrs, children) {
            super('iframe', attrs, children);
        }
    },
    img: class Img extends DomElement {
        constructor(attrs, children) {
            super('img', attrs, children);
        }
    },
    input: class Input extends DomElement {
        constructor(attrs, children) {
            super('input', attrs, children);
        }
    },
    ins: class Ins extends DomElement {
        constructor(attrs, children) {
            super('ins', attrs, children);
        }
    },
    kbd: class Kbd extends DomElement {
        constructor(attrs, children) {
            super('kbd', attrs, children);
        }
    },
    label: class Label extends DomElement {
        constructor(attrs, children) {
            super('label', attrs, children);
        }
    },
    legend: class Legend extends DomElement {
        constructor(attrs, children) {
            super('legend', attrs, children);
        }
    },
    li: class Li extends DomElement {
        constructor(attrs, children) {
            super('li', attrs, children);
        }
    },
    link: class Link extends DomElement {
        constructor(attrs, children) {
            super('link', attrs, children);
        }
    },
    main: class Main extends DomElement {
        constructor(attrs, children) {
            super('main', attrs, children);
        }
    },
    map: class Map extends DomElement {
        constructor(attrs, children) {
            super('map', attrs, children);
        }
    },
    mark: class Mark extends DomElement {
        constructor(attrs, children) {
            super('mark', attrs, children);
        }
    },
    menu: class Menu extends DomElement {
        constructor(attrs, children) {
            super('menu', attrs, children);
        }
    },
    meta: class Meta extends DomElement {
        constructor(attrs, children) {
            super('meta', attrs, children);
        }
    },
    meter: class Meter extends DomElement {
        constructor(attrs, children) {
            super('meter', attrs, children);
        }
    },
    nav: class Nav extends DomElement {
        constructor(attrs, children) {
            super('nav', attrs, children);
        }
    },
    noscript: class Noscript extends DomElement {
        constructor(attrs, children) {
            super('noscript', attrs, children);
        }
    },
    object: class Object extends DomElement {
        constructor(attrs, children) {
            super('object', attrs, children);
        }
    },
    ol: class Ol extends DomElement {
        constructor(attrs, children) {
            super('ol', attrs, children);
        }
    },
    optgroup: class Optgroup extends DomElement {
        constructor(attrs, children) {
            super('optgroup', attrs, children);
        }
    },
    option: class Option extends DomElement {
        constructor(attrs, children) {
            super('option', attrs, children);
        }
    },
    output: class Output extends DomElement {
        constructor(attrs, children) {
            super('output', attrs, children);
        }
    },
    p: class P extends DomElement {
        constructor(attrs, children) {
            super('p', attrs, children);
        }
    },
    param: class Param extends DomElement {
        constructor(attrs, children) {
            super('param', attrs, children);
        }
    },
    picture: class Picture extends DomElement {
        constructor(attrs, children) {
            super('picture', attrs, children);
        }
    },
    pre: class Pre extends DomElement {
        constructor(attrs, children) {
            super('pre', attrs, children);
        }
    },
    progress: class Progress extends DomElement {
        constructor(attrs, children) {
            super('progress', attrs, children);
        }
    },
    q: class Q extends DomElement {
        constructor(attrs, children) {
            super('q', attrs, children);
        }
    },
    rp: class Rp extends DomElement {
        constructor(attrs, children) {
            super('rp', attrs, children);
        }
    },
    rt: class Rt extends DomElement {
        constructor(attrs, children) {
            super('rt', attrs, children);
        }
    },
    ruby: class Ruby extends DomElement {
        constructor(attrs, children) {
            super('ruby', attrs, children);
        }
    },
    s: class S extends DomElement {
        constructor(attrs, children) {
            super('s', attrs, children);
        }
    },
    samp: class Samp extends DomElement {
        constructor(attrs, children) {
            super('samp', attrs, children);
        }
    },
    script: class Script extends DomElement {
        constructor(attrs, children) {
            super('script', attrs, children);
        }
    },
    section: class Section extends DomElement {
        constructor(attrs, children) {
            super('section', attrs, children);
        }
    },
    select: class Select extends DomElement {
        constructor(attrs, children) {
            super('select', attrs, children);
        }
    },
    small: class Small extends DomElement {
        constructor(attrs, children) {
            super('small', attrs, children);
        }
    },
    source: class Source extends DomElement {
        constructor(attrs, children) {
            super('source', attrs, children);
        }
    },
    span: class Span extends DomElement {
        constructor(attrs, children) {
            super('span', attrs, children);
        }
    },
    strong: class Strong extends DomElement {
        constructor(attrs, children) {
            super('strong', attrs, children);
        }
    },
    style: class Style extends DomElement {
        constructor(attrs, children) {
            super('style', attrs, children);
        }
    },
    sub: class Sub extends DomElement {
        constructor(attrs, children) {
            super('sub', attrs, children);
        }
    },
    submit: class Submit extends DomElement {
        constructor(attrs, children) {
            super('submit', attrs, children);
        }
    },
    summary: class Summary extends DomElement {
        constructor(attrs, children) {
            super('summary', attrs, children);
        }
    },
    sup: class Sup extends DomElement {
        constructor(attrs, children) {
            super('sup', attrs, children);
        }
    },
    table: class Table extends DomElement {
        constructor(attrs, children) {
            super('table', attrs, children);
        }
    },
    tbody: class Tbody extends DomElement {
        constructor(attrs, children) {
            super('tbody', attrs, children);
        }
    },
    td: class Td extends DomElement {
        constructor(attrs, children) {
            super('td', attrs, children);
        }
    },
    template: class Template extends DomElement {
        constructor(attrs, children) {
            super('template', attrs, children);
        }
    },
    textarea: class Textarea extends DomElement {
        constructor(attrs, children) {
            super('textarea', attrs, children);
        }
    },
    tfoot: class Tfoot extends DomElement {
        constructor(attrs, children) {
            super('tfoot', attrs, children);
        }
    },
    th: class Th extends DomElement {
        constructor(attrs, children) {
            super('th', attrs, children);
        }
    },
    thead: class Thead extends DomElement {
        constructor(attrs, children) {
            super('thead', attrs, children);
        }
    },
    time: class Time extends DomElement {
        constructor(attrs, children) {
            super('time', attrs, children);
        }
    },
    title: class Title extends DomElement {
        constructor(attrs, children) {
            super('title', attrs, children);
        }
    },
    tr: class Tr extends DomElement {
        constructor(attrs, children) {
            super('tr', attrs, children);
        }
    },
    track: class Track extends DomElement {
        constructor(attrs, children) {
            super('track', attrs, children);
        }
    },
    u: class U extends DomElement {
        constructor(attrs, children) {
            super('u', attrs, children);
        }
    },
    ul: class Ul extends DomElement {
        constructor(attrs, children) {
            super('ul', attrs, children);
        }
    },
    var: class Var extends DomElement {
        constructor(attrs, children) {
            super('var', attrs, children);
        }
    },
    video: class Video extends DomElement {
        constructor(attrs, children) {
            super('video', attrs, children);
        }
    },
    wbr: class Wbr extends DomElement {
        constructor(attrs, children) {
            super('wbr', attrs, children);
        }
    }

};

const el = (type, attrs, children) => {
    return new elements[type](attrs, children);
}

const tree =
el("div", {"class": "some_classname", "id": "some_id"},
  el("span", {}, 'hello')
);
document.getElementById("root").appendChild(tree.draw());