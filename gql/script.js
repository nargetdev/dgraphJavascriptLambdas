async function authorsByName({args, dql}) {
    const results = await dql.query(`query queryAuthor($name: string) {
        queryAuthor(func: type(Author)) @filter(eq(Author.name, $name)) {
            name: Author.name
            dob: Author.dob
            reputation: Author.reputation
        }
    }`, {"$name": args.name})
    console.log(args)
    return results.data.queryAuthor
}

self.addGraphQLResolvers({
    "Query.authorsByName": authorsByName,
})
