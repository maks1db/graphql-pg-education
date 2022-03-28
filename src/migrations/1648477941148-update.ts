import {MigrationInterface, QueryRunner} from "typeorm";

export class update1648477941148 implements MigrationInterface {
    name = 'update1648477941148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "art" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d7867f9fa7239b188ec631066bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "art"`);
    }

}
