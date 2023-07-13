import userInfo,  { foo, empty, effect } from './utils.js'

const fn = () => {
    console.log('fn')
    userInfo.name()
    empty()
    effect()
    foo()
}
fn()