import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDate1610322701175 implements MigrationInterface {
    name = 'fixDate1610322701175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_9fc134ca20766e165ad650ee74` ON `users`");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `update_at` `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `update_at` `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `roles` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `roles` CHANGE `update_at` `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `roles` CHANGE `update_at` `update_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `roles` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `update_at` `update_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `update_at` `update_at` timestamp(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp(0) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_9fc134ca20766e165ad650ee74` ON `users` (`detail_id`)");
    }

}
