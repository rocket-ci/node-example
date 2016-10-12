const fs = require("fs")

const dir = process.env.ROCKET_ARTIFACTS
fs.mkdirSync(`${dir}/hoge`)
fs.mkdirSync(`${dir}/hoge/fuga`)
fs.mkdirSync(`${dir}/moga`)
fs.mkdirSync(`${dir}/hoha`)
fs.writeFileSync(`${dir}/test.txt`, "foo bar")
fs.writeFileSync(`${dir}/test2.txt`, "foo bar")
fs.writeFileSync(`${dir}/hoha/test.txt`, "foo bar")
fs.writeFileSync(`${dir}/hoge/test.txt`, "foo bar")
fs.writeFileSync(`${dir}/hoge/test2.txt`, "foo bar")
fs.writeFileSync(`${dir}/hoge/fuga/test.txt`, "foo bar")
