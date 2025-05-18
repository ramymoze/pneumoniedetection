/*
  Warnings:

  - You are about to drop the `Radio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Radio" DROP CONSTRAINT "Radio_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Radio" DROP CONSTRAINT "Radio_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Radio" DROP CONSTRAINT "Radio_radiologue_id_fkey";

-- DropTable
DROP TABLE "Radio";

-- CreateTable
CREATE TABLE "radio" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "radiologue_id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "radio_image" BYTEA NOT NULL,
    "Title" TEXT NOT NULL,
    "Comment" TEXT,
    "type" "RadioType" NOT NULL,

    CONSTRAINT "radio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "radio" ADD CONSTRAINT "radio_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "radio" ADD CONSTRAINT "radio_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "radio" ADD CONSTRAINT "radio_radiologue_id_fkey" FOREIGN KEY ("radiologue_id") REFERENCES "radiologue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
