const fs = require('fs')

fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log('a.txt를 읽어 들였습니다.', data)

    fs.readFile('b.txt', 'utf-8', function(err, data) {
        console.log('b.tx를 읽어 들였습니다.', data)

        fs.readFile('c.txt', 'utf-8', function(err, data) {
            console.log('c.txt를 읽어 들였습니다.', data)
        })
    })
})
