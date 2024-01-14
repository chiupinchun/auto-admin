import inquirer from 'inquirer';

/**
 * 
 * @returns {Promise<{
 *  isTs: boolean,
 *  framework: 'vue' | 'react'
 * }>}
 */
export const ask = () => {
  return Promise.resolve({
    isTs: true,
    framework: 'vue'
  });

  // return inquirer.prompt([
  //   {
  //     type: 'confirm',
  //     name: 'isTs',
  //     message: '是否使用TypeScript模板'
  //   },
  //   {
  //     type: 'list',
  //     name: 'framework',
  //     message: '請選擇使用的框架',
  //     default: 'vue',
  //     choices: ['vue']
  //   }
  // ]);
};