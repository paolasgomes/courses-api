import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.date('birth_date').notNullable();
    table.string('cpf').notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('phone').notNullable();
    table.string('street').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip_code').notNullable();
    table.string('street_number').notNullable();
    table.string('complement').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('students');
}
