-- Add the column with NULL allowed temporarily
ALTER TABLE "patient" ADD COLUMN "firstName" TEXT;

-- Set default values for existing records
UPDATE "patient" SET "firstName" = 'Unknown' WHERE "firstName" IS NULL;

-- Then make it NOT NULL if needed
ALTER TABLE "patient" ALTER COLUMN "firstName" SET NOT NULL;