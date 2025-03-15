/*
  Warnings:

  - You are about to drop the column `editor` on the `works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `works` DROP COLUMN `editor`,
    ADD COLUMN `publisher` VARCHAR(255) NULL,
    MODIFY `image` VARCHAR(255) NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;
