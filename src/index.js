import Post from "./Post";
import json from "./assets/json"
import WebpackLogo from './assets/webpack-logo.png'
import "./style/style.css"

const post = new Post("Webpack Post Title", WebpackLogo)

console.log('Post toString: ', post.toString())

console.log('JSON:', json)