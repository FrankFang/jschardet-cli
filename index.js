/*jshint node:true*/
var jschardet = require('jschardet');
var fs = require('fs')

var friendlyNames = {
    "GB18030":"GB18030 (GBK or GB2312)",
    "ISO-8859-1":"ISO-8859-1 (Latin-1) (U+0080-U+00FF)",
    "ISO-8859-2":"ISO-8859-2 (Latin-2)",
    "ISO-8859-3":"ISO-8859-3 (Latin-3 or South European)",
    "ISO-8859-4":"ISO-8859-4 (Latin-4 or North European)",
    "ISO-8859-5":"ISO-8859-5 (Latin/Cyrillic)",
    "ISO-8859-6":"ISO-8859-6 (Latin/Arabic)",
    "ISO-8859-7":"ISO-8859-7 (Latin/Greek)",
    "ISO-8859-8":"ISO-8859-8 (Latin/Hebrew)",
    "ISO-8859-9":"ISO-8859-9 (Latin-5 or Turkish)",
    "ISO-8859-10":"ISO-8859-10 (Latin-6)",
    "ISO-8859-11":"ISO-8859-11 (Latin/Thai)",
    "ISO-8859-12":"ISO-8859-12 (Latin/Devanagari)",
    "ISO-8859-13":"ISO-8859-13 (Latin-7 or Baltic Rim)",
    "ISO-8859-14":"ISO-8859-14 (Latin-8 or Celtic)",
    "ISO-8859-15":"ISO-8859-15 (Latin-9 or Latin-0)",
    "ISO-8859-16":"ISO-8859-16 (Latin-10 or South-Eastern European)"
}

module.exports = function(path, callback){
    if(!path){
        console.log('usage: jschardet filepath')
        callback()
    }
    fs.readFile(path, function(error, buffer) {
        if(error){
            callback(error)
        }else{
            console.log(jschardet.detect(buffer))
        }
    })
}
