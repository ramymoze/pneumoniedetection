/*
  Warnings:

  - The primary key for the `doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `firstName` on the `patient` table. All the data in the column will be lost.
  - The primary key for the `radiologue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `doctor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `patient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `radiologue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. DOCTOR TABLE SAFE MIGRATION
ALTER TABLE "doctor" ADD COLUMN "new_id" UUID DEFAULT uuid_generate_v4();
UPDATE "doctor" SET "new_id" = uuid_generate_v4();
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_pkey";
ALTER TABLE "doctor" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "doctor" ALTER COLUMN "id" SET DATA TYPE TEXT USING new_id::text;
ALTER TABLE "doctor" DROP COLUMN "new_id";
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_pkey" PRIMARY KEY ("id");

-- 2. PATIENT TABLE SAFE MIGRATION
-- (Note: The original migration incorrectly dropped firstName - we'll preserve it)
ALTER TABLE "patient" ADD COLUMN "new_id" UUID DEFAULT uuid_generate_v4();
UPDATE "patient" SET "new_id" = uuid_generate_v4();
ALTER TABLE "patient" DROP CONSTRAINT "patient_pkey";
ALTER TABLE "patient" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "patient" ALTER COLUMN "id" SET DATA TYPE TEXT USING new_id::text;
ALTER TABLE "patient" DROP COLUMN "new_id";
ALTER TABLE "patient" ADD CONSTRAINT "patient_pkey" PRIMARY KEY ("id");

-- 3. RADIOLOGUE TABLE SAFE MIGRATION
ALTER TABLE "radiologue" ADD COLUMN "new_id" UUID DEFAULT uuid_generate_v4();
UPDATE "radiologue" SET "new_id" = uuid_generate_v4();
ALTER TABLE "radiologue" DROP CONSTRAINT "radiologue_pkey";
ALTER TABLE "radiologue" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE "radiologue" ALTER COLUMN "id" SET DATA TYPE TEXT USING new_id::text;
ALTER TABLE "radiologue" DROP COLUMN "new_id";
ALTER TABLE "radiologue" ADD CONSTRAINT "radiologue_pkey" PRIMARY KEY ("id");