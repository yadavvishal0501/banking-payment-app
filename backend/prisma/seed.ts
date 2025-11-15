import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "test@gmail.com" },
    update: {}, // do nothing if user exists
    create: {
      email: "test3@gmail.com",
      password: "12345678"
    }
  });

  console.log("User seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
