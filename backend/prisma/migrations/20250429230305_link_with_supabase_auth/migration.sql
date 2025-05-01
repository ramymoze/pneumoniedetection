/*
  Warnings:

  - You are about to drop the column `password` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `radiologue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "patient" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "radiologue" DROP COLUMN "password";
