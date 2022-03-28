import {MigrationInterface, QueryRunner} from "typeorm";

export class employee1648470584479 implements MigrationInterface {
    name = 'employee1648470584479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "positionId" integer NOT NULL, CONSTRAINT "REL_aff396af6e595420a64943f4c2" UNIQUE ("positionId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_aff396af6e595420a64943f4c26" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_aff396af6e595420a64943f4c26"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
