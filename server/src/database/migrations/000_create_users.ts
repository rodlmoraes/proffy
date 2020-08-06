import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('bio').notNullable()
    table.string('phone').notNullable()
    table.string('avatar').nullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}