-- AlterTable
ALTER TABLE `users` ADD COLUMN `gender` ENUM('Male', 'Female') NOT NULL DEFAULT 'Male';
