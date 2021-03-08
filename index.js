#! /usr/bin/env node

'use strict'
const ora = require('ora');
const emoji = require('node-emoji');


const clone = ora(`Cloning the repository... ${emoji.get('inbox_tray')}`);
const installing = ora(`Installing dependencies... ${emoji.get('package')}`);

clone.color = "blue";
installing.color = "blue";

const appName = process.argv[2] || 'vue-tailwind-boilerplate';
const { spawnSync } = require('child_process');
const url = 'https://github.com/videsk/vue-tailwind-boilerplate.git';

console.log('Creating', appName);
clone.start();
spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
clone.succeed();
installing.start();
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);
installing.succeed();

console.log(emoji.get('tada'), 'The Vue + TailwindCSS Boilerplate was installed');
console.log('NPX package created with love by Videsk with', emoji.get('heart'), ' https://videsk.io');
