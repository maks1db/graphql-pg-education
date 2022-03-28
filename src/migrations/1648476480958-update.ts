import {MigrationInterface, QueryRunner} from "typeorm";

export class update1648476480958 implements MigrationInterface {
    name = 'update1648476480958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_aff396af6e595420a64943f4c26"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "REL_aff396af6e595420a64943f4c2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "REL_aff396af6e595420a64943f4c2" UNIQUE ("positionId")`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_aff396af6e595420a64943f4c26" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
