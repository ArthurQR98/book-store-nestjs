import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetail1610323495015 implements MigrationInterface {
    name = 'fixNameDetail1610323495015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NOT NULL");
    }

}
