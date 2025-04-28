-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- DOCTOR TABLE MIGRATION
ALTER TABLE "doctor" ADD COLUMN "uuid_id" UUID DEFAULT uuid_generate_v4();
UPDATE "doctor" SET "uuid_id" = uuid_generate_v4();
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_pkey";
ALTER TABLE "doctor" ADD PRIMARY KEY ("uuid_id");
ALTER TABLE "doctor" DROP COLUMN "id";
ALTER TABLE "doctor" RENAME COLUMN "uuid_id" TO "id";
ALTER TABLE "doctor" ALTER COLUMN "id" SET NOT NULL;

-- PATIENT TABLE MIGRATION
ALTER TABLE "patient" ADD COLUMN "uuid_id" UUID DEFAULT uuid_generate_v4();
UPDATE "patient" SET "uuid_id" = uuid_generate_v4();
ALTER TABLE "patient" DROP CONSTRAINT "patient_pkey";
ALTER TABLE "patient" ADD PRIMARY KEY ("uuid_id");
ALTER TABLE "patient" DROP COLUMN "id";
ALTER TABLE "patient" RENAME COLUMN "uuid_id" TO "id";
ALTER TABLE "patient" ALTER COLUMN "id" SET NOT NULL;

-- RADIOLOGUE TABLE MIGRATION
ALTER TABLE "radiologue" ADD COLUMN "uuid_id" UUID DEFAULT uuid_generate_v4();
UPDATE "radiologue" SET "uuid_id" = uuid_generate_v4();
ALTER TABLE "radiologue" DROP CONSTRAINT "radiologue_pkey";
ALTER TABLE "radiologue" ADD PRIMARY KEY ("uuid_id");
ALTER TABLE "radiologue" DROP COLUMN "id";
ALTER TABLE "radiologue" RENAME COLUMN "uuid_id" TO "id";
ALTER TABLE "radiologue" ALTER COLUMN "id" SET NOT NULL;