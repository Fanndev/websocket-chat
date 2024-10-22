/*
  Warnings:

  - You are about to drop the column `createdAt` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "createdAt",
ADD COLUMN     "last_chat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "roomchats" (
    "id" SERIAL NOT NULL,
    "chat" TEXT,
    "userId" INTEGER NOT NULL,
    "image" TEXT,
    "pdf" TEXT,
    "word" TEXT,
    "archive" BOOLEAN,
    "last_chat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roomchats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupchats" (
    "id" SERIAL NOT NULL,
    "chat" TEXT,
    "title" TEXT,
    "bio" TEXT,
    "member" TEXT,
    "admin" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "image" TEXT,
    "pdf" TEXT,
    "word" TEXT,
    "archive" BOOLEAN,
    "last_chat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groupchats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomchats" ADD CONSTRAINT "roomchats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupchats" ADD CONSTRAINT "groupchats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
