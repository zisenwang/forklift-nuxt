-- CreateTable
CREATE TABLE "Equipment" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "type" VARCHAR NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "type_fk" BIGINT,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "capacity_kg" BIGINT,
    "lift_height_mm" BIGINT,
    "fork_size" VARCHAR,
    "battery_voltage" INTEGER,
    "battery_ampere" INTEGER,
    "battery_type" VARCHAR,
    "controller_type" VARCHAR,
    "travel_speed_kmh" REAL,
    "rrp" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "model_fk" BIGINT,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Optional" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "model_fk" BIGINT,
    "description" VARCHAR,
    "rrp" INTEGER NOT NULL,

    CONSTRAINT "Optional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_type_fk_fkey" FOREIGN KEY ("type_fk") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_model_fk_fkey" FOREIGN KEY ("model_fk") REFERENCES "Model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Optional" ADD CONSTRAINT "Optional_model_fk_fkey" FOREIGN KEY ("model_fk") REFERENCES "Model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
