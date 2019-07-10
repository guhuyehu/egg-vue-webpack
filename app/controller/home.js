'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
class HomeController extends Controller {
  async index() {
    await this.ctx.render('index',{
    })
  }
}

module.exports = HomeController;
