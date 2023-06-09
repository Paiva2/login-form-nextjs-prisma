/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `username` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountWithEmailUserName]` on the table `username` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "username" ADD COLUMN "accountWithEmailUserName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "username_username_key" ON "username"("username");

-- CreateIndex
CREATE UNIQUE INDEX "username_accountWithEmailUserName_key" ON "username"("accountWithEmailUserName");
