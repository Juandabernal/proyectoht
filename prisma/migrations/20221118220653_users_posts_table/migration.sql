/*
  Warnings:

  - You are about to drop the column `name` on the `Login` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_id_fkey`;

-- DropIndex
DROP INDEX `Login_name_key` ON `Login`;

-- AlterTable
ALTER TABLE `Login` DROP COLUMN `name`;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
