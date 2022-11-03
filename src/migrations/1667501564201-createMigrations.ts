import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1667501564201 implements MigrationInterface {
    name = 'createMigrations1667501564201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ong" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "isActive" boolean NOT NULL, "password" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_946cfb7a78935a748a8e665a0b4" UNIQUE ("email"), CONSTRAINT "REL_992f55b5b25bd07374aa092c90" UNIQUE ("addressId"), CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "species" character varying NOT NULL, "breed" character varying NOT NULL, "age" character varying NOT NULL, "adopted" boolean NOT NULL DEFAULT false, "userId" uuid, "ongId" uuid, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(68) NOT NULL, "email" character varying(68) NOT NULL, "password" character varying(128) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "donations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying(68) NOT NULL, "quantity" character varying(68) NOT NULL, "userId" uuid, "ongId" uuid, CONSTRAINT "PK_c01355d6f6f50fc6d1b4a946abf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ong" ADD CONSTRAINT "FK_992f55b5b25bd07374aa092c90c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_086f6d244796a0ee53da78c02a1" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donations" ADD CONSTRAINT "FK_cfd5edc39019b9001bd86e90f77" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donations" ADD CONSTRAINT "FK_8a3e1047bc53f7a94e06e971c8a" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "donations" DROP CONSTRAINT "FK_8a3e1047bc53f7a94e06e971c8a"`);
        await queryRunner.query(`ALTER TABLE "donations" DROP CONSTRAINT "FK_cfd5edc39019b9001bd86e90f77"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_086f6d244796a0ee53da78c02a1"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb"`);
        await queryRunner.query(`ALTER TABLE "ong" DROP CONSTRAINT "FK_992f55b5b25bd07374aa092c90c"`);
        await queryRunner.query(`DROP TABLE "donations"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "ong"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
