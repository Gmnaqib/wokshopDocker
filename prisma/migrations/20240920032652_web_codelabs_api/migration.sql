/*
  Warnings:

  - You are about to drop the column `entry_year` on the `users_detail` table. All the data in the column will be lost.
  - You are about to drop the column `major` on the `users_detail` table. All the data in the column will be lost.
  - You are about to drop the column `motivation` on the `users_detail` table. All the data in the column will be lost.
  - You are about to drop the column `telegram` on the `users_detail` table. All the data in the column will be lost.
  - Added the required column `entry_year` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motivation` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `entry_year` YEAR NOT NULL,
    ADD COLUMN `major` VARCHAR(191) NOT NULL,
    ADD COLUMN `motivation` VARCHAR(191) NOT NULL,
    ADD COLUMN `telegram` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users_detail` DROP COLUMN `entry_year`,
    DROP COLUMN `major`,
    DROP COLUMN `motivation`,
    DROP COLUMN `telegram`;
