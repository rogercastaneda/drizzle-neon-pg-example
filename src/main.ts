// import 'dotenv';
import { asc, sql } from 'drizzle-orm';
import { db } from './drizzle/db';
import { UserPreferencesTable, UserTable } from './drizzle/schema';

async function main() {
  // console.log('hello')
  // await db.insert(UserTable).values({
  //   name: 'Roger',
  // });
  // const user = await db.query.UserTable.findFirst();
  // console.log(user);

  // await db.delete(UserTable);

  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: 'Roger',
  //       age: 39,
  //       email: 'roger@demo.com',
  //     },
  //     {
  //       name: 'Noelia',
  //       age: 35,
  //       email: 'noelia@demo.com',
  //     },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //     userName: UserTable.name,
  //   })
  //   .onConflictDoUpdate({
  //     target: UserTable.email,
  //     set: { name: 'Updated Name' },
  //   });

  // console.log({ user });

  // await db.insert(UserPreferencesTable).values({
  //   emailUpdates: true,
  //   userId: 'b402dcc6-5f49-49d9-9841-ef27a98af3cb',
  // });

  const users = await db.query.UserTable.findMany({
    columns: { name: true, age: true },
    // extras: { lowerCaseName: sql<string>`lower(${UserTable.name})`.as('lowerCaseName') },
    // with: { preferences: { columns: { emailUpdates: true } } },
    // with: {
    //   posts: {
    //     with: { postCategories: true },
    //   },
    // },
    orderBy: asc(UserTable.age),
    where: (table, funcs) => funcs.gt(table.age, 35),
  });

  console.log(users);
}

main();
