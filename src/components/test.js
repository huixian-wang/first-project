const testRequire = "require"

// exports.tr = testRequire
module.exports = {
    123: " require in module exports",
    tr: testRequire,
    extra
}


// const testImport = "import"
let extra = 1
setTimeout(console.log("test count of import after 500ms", ++extra), 500);
// export {
//     extra,
// }
// export default testImport