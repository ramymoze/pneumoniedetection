/*
  Warnings:

  - You are about to drop the column `firstName` on the `patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctor" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "patient" DROP COLUMN "firstName",
ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "radiologue" ALTER COLUMN "id" DROP DEFAULT;
