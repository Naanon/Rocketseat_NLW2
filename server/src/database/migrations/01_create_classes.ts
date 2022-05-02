import { Knex } from 'knex';

export async function up(knex: Knex) {
    //Alterações que serão realizadas no banco de dados.
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

export async function down(knex: Knex) {
    //Desfazer os últimos ajustes que foram feitos no banco de dados.
    return knex.schema.dropTable('classes');
}