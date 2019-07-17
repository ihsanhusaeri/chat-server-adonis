'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.integer('user_id', 10).notNullable()
      table.integer('group_id', 10).notNullable()
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema
