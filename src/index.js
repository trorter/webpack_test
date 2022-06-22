import Post from "./Post";
import json from "./assets/json"
import WebpackLogo from './assets/webpack-logo.png'
import "./style/style.css"
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post("Webpack Post Title", WebpackLogo)

console.log('Post toString: ', post.toString())

console.log('JSON:', json)

console.log(xml)

console.log(csv)