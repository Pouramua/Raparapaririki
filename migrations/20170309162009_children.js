exports.up = function (knex, Promise) {
  return knex.schema.createTable('children', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('age')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('children')
}
