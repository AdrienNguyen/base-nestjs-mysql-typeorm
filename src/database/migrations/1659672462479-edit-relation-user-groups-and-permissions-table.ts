import { MigrationInterface, QueryRunner } from "typeorm";

export class editRelationUserGroupsAndPermissionsTable1659672462479 implements MigrationInterface {
    name = 'editRelationUserGroupsAndPermissionsTable1659672462479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`permissions_user_groups_user_groups\` (\`permissionsId\` int NOT NULL, \`userGroupsId\` int NOT NULL, INDEX \`IDX_2947361d91398082c0d9a8e5b5\` (\`permissionsId\`), INDEX \`IDX_beb57cee28afbd12d204971f32\` (\`userGroupsId\`), PRIMARY KEY (\`permissionsId\`, \`userGroupsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`group_id\` \`group_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions_user_groups_user_groups\` ADD CONSTRAINT \`FK_2947361d91398082c0d9a8e5b5f\` FOREIGN KEY (\`permissionsId\`) REFERENCES \`permissions\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`permissions_user_groups_user_groups\` ADD CONSTRAINT \`FK_beb57cee28afbd12d204971f329\` FOREIGN KEY (\`userGroupsId\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`permissions_user_groups_user_groups\` DROP FOREIGN KEY \`FK_beb57cee28afbd12d204971f329\``);
        await queryRunner.query(`ALTER TABLE \`permissions_user_groups_user_groups\` DROP FOREIGN KEY \`FK_2947361d91398082c0d9a8e5b5f\``);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`permission_id\` \`permission_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permissions\` CHANGE \`group_id\` \`group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_beb57cee28afbd12d204971f32\` ON \`permissions_user_groups_user_groups\``);
        await queryRunner.query(`DROP INDEX \`IDX_2947361d91398082c0d9a8e5b5\` ON \`permissions_user_groups_user_groups\``);
        await queryRunner.query(`DROP TABLE \`permissions_user_groups_user_groups\``);
    }

}
