import { MigrationInterface, QueryRunner } from "typeorm";

export class editUsersTable1659520525780 implements MigrationInterface {
    name = 'editUsersTable1659520525780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`group_id\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`group_id\` \`group_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`group_id\` \`group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`group_id\``);
    }

}
