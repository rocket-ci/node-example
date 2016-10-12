const fs = require("fs")

fs.writeFileSync(`${process.env.ROCKET_ARTIFACTS}/test.txt`, "foo bar")
