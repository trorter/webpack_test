import * as JQuery from 'jquery'
import Post from "@models/Post";
import json from "@/assets/json"
import WebpackLogo from '@/assets/webpack-logo'
import "@/style/style.css"
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import './bable'

const post = new Post("Webpack Post Title", WebpackLogo)

console.log('Post toString: ', post.toString())
console.log('JSON:', json)
console.log(xml)
console.log(csv)

JQuery('pre').addClass('code').html(post.toString())