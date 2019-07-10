'use strict'


const  Service = require('egg').Service

class NewsService extends Service{
    async getNewsList (){
        var list = ['11111','22222','33333']
        return list
    }
}



module.exports = NewsService