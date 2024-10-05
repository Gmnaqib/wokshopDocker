/*
  Warnings:

  - Added the required column `portfolio` to the `users_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users_detail` ADD COLUMN `portfolio` VARCHAR(191) NOT NULL;
