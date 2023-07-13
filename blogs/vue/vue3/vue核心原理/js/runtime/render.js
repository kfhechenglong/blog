const render = (node, root) => {
    const el = document.createElement(node.tag);
    if (typeof node.children === 'string') {
        // 如果子元素是文本节点，则创建文本节点。
        const text = document.createTextNode(node.children)
        el.appendChild(text)
    } else if (Array.isArray(node.children)) {
        node.children.forEach(child => {
            render(child, el)
        });
    }
    root.appendChild(el);
};

const node = {
    tag: 'div',
    children: [
        {
            tag: 'h1',
            children: '运行时'
        }
    ]
}
const div = document.createElement('div')
render(node, div)
console.log(div)