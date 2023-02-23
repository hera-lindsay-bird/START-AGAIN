exports.up = function (knex) {
  return knex.schema.createTable('journal', (table) => {
    table.increments('id')
    table.text('content')
    table.datetime('date')
    table.boolean('favourite')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('journal')
}
