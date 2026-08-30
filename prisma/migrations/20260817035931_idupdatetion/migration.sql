-- DropForeignKey
ALTER TABLE "Dout" DROP CONSTRAINT "Dout_userid_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_uploaderId_fkey";

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("clerkid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dout" ADD CONSTRAINT "Dout_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("clerkid") ON DELETE RESTRICT ON UPDATE CASCADE;
