import { Knex } from 'knex';

export async function up(knex: Knex) {
    //Alterações que serão realizadas no banco de dados.
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

export async function down(knex: Knex) {
    //Desfazer os últimos ajustes que foram feitos no banco de dados.
    return knex.schema.dropTable('connections');
}