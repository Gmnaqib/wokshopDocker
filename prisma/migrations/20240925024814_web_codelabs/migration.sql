/*
  Warnings:

  - You are about to drop the column `assigment_open_from` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `assigment_open_until` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `registration_open_from` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `registration_open_until` on the `setting` table. All the data in the column will be lost.
  - Added the required column `end` to the `setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `setting` DROP COLUMN `assigment_open_from`,
    DROP COLUMN `assigment_open_until`,
    DROP COLUMN `registration_open_from`,
    DROP COLUMN `registration_open_until`,
    ADD COLUMN `end` DATETIME(3) NOT NULL,
    ADD COLUMN `start` DATETIME(3) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
