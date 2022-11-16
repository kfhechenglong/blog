export default () => ({
    type: 'input', // 命令类型
    name: 'packageName', // 键名
    message: 'set package name', // 提示语
    validate(val) { // 校验
      if (val) return true;
      return 'Please enter package name'
    }
  })
  