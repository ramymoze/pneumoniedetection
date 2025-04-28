-- CreateEnum
CREATE TYPE "RadioType" AS ENUM ('Bones', 'Lung', 'Other');

-- CreateTable
CREATE TABLE "Radio" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "radiologue_id" UUID NOT NULL,
    "doctor_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "radio_image" BYTEA NOT NULL,
    "Title" TEXT NOT NULL,
    "Comment" TEXT,
    "type" "RadioType" NOT NULL,

    CONSTRAINT "Radio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_email-doctor" ON "doctor"("email");

-- CreateIndex
CREATE INDEX "idx_email-patient" ON "patient"("email");

-- CreateIndex
CREATE INDEX "idx_email-radiologue" ON "radiologue"("email");

-- AddForeignKey
ALTER TABLE "Radio" ADD CONSTRAINT "Radio_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Radio" ADD CONSTRAINT "Radio_radiologue_id_fkey" FOREIGN KEY ("radiologue_id") REFERENCES "radiologue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Radio" ADD CONSTRAINT "Radio_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
