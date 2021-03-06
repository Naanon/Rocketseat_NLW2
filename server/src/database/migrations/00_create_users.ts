import { Knex } from 'knex';

export async function up(knex: Knex) {
    //Alterações que serão realizadas no banco de dados.
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex) {
    //Desfazer os últimos ajustes que foram feitos no banco de dados.
    return knex.schema.dropTable('users');
}