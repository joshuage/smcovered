const fs = require('fs')

const db = './GroupContact.json'
const groupNickName = ['(1)USC&SM保险答疑群', '(2)USC&SM保险答疑群']
const result = []


findUser = (db, groupNickName) => {
    return new Promise(resolve => {
    fs.readFile(db, 'utf-8', (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            groupNickName.forEach((name, index) => {
                const dataINeed = JSON.parse(data)
                result[index] = [name]
                const temp = result[index]
                dataINeed.forEach(data => {
                    data.nickname === name ?
                        data.m_nsChatRoomMemList.split(';').forEach(e => temp.push(e)) : null
                })
            }
            )
        }
        resolve()
    })})
}

findUser(db, groupNickName).then(() => {console.log(result)})
