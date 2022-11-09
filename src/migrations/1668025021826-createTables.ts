import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1668025021826 implements MigrationInterface {
    name = 'createTables1668025021826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "donations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "donated" character varying(68) NOT NULL, "donatedBy" character varying NOT NULL, "donatedTo" character varying NOT NULL, "donatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_c01355d6f6f50fc6d1b4a946abf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "species" character varying NOT NULL, "breed" character varying NOT NULL, "age" character varying NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "ownerId" character varying NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ong" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isOng" boolean NOT NULL DEFAULT true, "isOngAdm" boolean NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_946cfb7a78935a748a8e665a0b4" UNIQUE ("email"), CONSTRAINT "REL_992f55b5b25bd07374aa092c90" UNIQUE ("addressId"), CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(68) NOT NULL, "email" character varying(68) NOT NULL, "password" character varying(128) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL, "isOng" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "FK_992f55b5b25bd07374aa092c90c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "FK_992f55b5b25bd07374aa092c90c"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "ong"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "donations"`);
    }

}
