/*
  Warnings:

  - Added the required column `password` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `radiologue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "radiologue" ADD COLUMN     "password" TEXT NOT NULL;
