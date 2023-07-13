export const foo = () => {
    console.log('foo')
}

export const bar = () => {
    console.log('bar')
}

export const empty = () => {
    const a = 1
}

export const effect = (obj) => {
    obj && obj.a
}
export default {
    name: function () {
        console.log('绝对零度')
    },
    age: () => {
        console.log(18)
    }
}