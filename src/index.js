#!/usr/bin/env node
import { program } from 'commander';
import download from 'download-git-repo';
import fs from 'fs';
import ora from 'ora';
import { ask } from './utils/questions.js';

const spinner = ora('下載中...');

program.command('create <projectName>').alias('c').description('創建項目').action(async projectName => {
  if (fs.existsSync(projectName)) {
    throw new Error('專案已存在。');
  }

  const config = await ask();
  config.projectName = projectName;

  spinner.start();
  download(`direct:https://github.com/chiupinchun/auto-admin.git#${config.framework}`, `./${projectName}`, { clone: true }, (err) => {
    if (err) {
      spinner.fail('下載失敗。');
      console.log(err);
    } else spinner.succeed('下載完成。');
  });
});

program.parse(process.argv);