import { MigrationInterface, QueryRunner } from "typeorm";

export class editUserGroupPermissionsTable1659682397535 implements MigrationInterface {
    name = 'editUserGroupPermissionsTable1659682397535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`group_id\` \`user_group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`user_group_id\` \`user_group_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` ADD CONSTRAINT \`FK_73e94dd62ca0b30440501614f75\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permissions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` ADD CONSTRAINT \`FK_2a8794db5a8088ea9aac6d08802\` FOREIGN KEY (\`user_group_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` DROP FOREIGN KEY \`FK_2a8794db5a8088ea9aac6d08802\``);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` DROP FOREIGN KEY \`FK_73e94dd62ca0b30440501614f75\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`user_group_id\` \`user_group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`user_group_id\` \`group_id\` int NOT NULL`);
    }

}
