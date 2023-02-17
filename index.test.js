const { User, Cheese, Board} = require("./index.js");
const {sequelize} = require("./db.js");


describe('Cheese, Board and User', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
      // the 'sync' method will create tables based on the model class
      // by setting 'force:true' the tables are recreated each time the 
      // test suite is run
      await sequelize.sync({ force: true });
    });
    beforeEach(async () => {
        //Code that happens before each block
    })
    afterEach(async () => {
        //Happen after each test
        // await Board.sync({ force:true });
        // await Cheese.sync({ force:true });
        // await User.sync({ force:true });
    })
    afterAll(async () => {
        //After all tests finish drop the tables
        await sequelize.drop();
    })

    //Test the models
    test('can create a User', async () => {
        const testUser = await User.create({
            name: "Rifkan",
            email: "test@test.com"
        });
        expect(testUser.name).toBe("Rifkan");
        expect(testUser.email).toBe("test@test.com");
    });

    test('can create a Cheese', async () => {
        const testCheese = await Cheese.create({
            title: "Cheddar",
            description: "cheesy"
        });
        expect(testCheese.title).toBe("Cheddar");
        expect(testCheese.description).toBe("cheesy");
    });

    test('can create a Board', async () => {
        const testBoard = await Board.create({
            type: "Cheddar",
            description: "mmm",
            rating: 9
        });
        expect(testBoard.type).toBe("Cheddar");
        expect(testBoard.description).toBe("mmm");
        expect(testBoard.rating).toBe(9);
    });

    //Test the associations
    test("User and Board has one to many relationship", async() => {
        const testUser = await User.create({
            name: "Rifkan",
            email: "test@test.com"
        });
        const testBoard = await Board.create({
            type: "Cheddar",
            description: "mmm",
            rating: 9
        });
        await testUser.addBoard(testBoard)
        const fetchedUser = await testUser.reload();
        const fetchedBoard = await fetchedUser.getBoards();
        expect(fetchedBoard[0]["type"]).toContain("Cheddar")
        expect(fetchedBoard[0]["description"]).toContain("mmm")
        expect(Number(fetchedBoard[0]["rating"])).toBe(9)

    })

    test("Board can have many cheeses", async() => {
        const testBoard = await Board.create({
            type: "Cheddar",
            description: "mmm",
            rating: 9
        });
        const testCheese = await Cheese.create({
            title: "Cheddar",
            description: "cheesy"
        });
        const testCheese1 = await Cheese.create({
            title: "Cheddar1",
            description: "cheesy1"
        });
        await testBoard.addCheese(testCheese)
        await testBoard.addCheese(testCheese1)
        const fetchedBoard = await testBoard.reload();
        const fetchedCheese = await fetchedBoard.getCheeses();
        expect(fetchedCheese[0]["title"]).toContain("Cheddar")
        expect(fetchedCheese[1]["title"]).toContain("Cheddar1")
        expect(fetchedCheese[0]["description"]).toContain("cheesy")
        expect(fetchedCheese[1]["description"]).toContain("cheesy1")
    })
    
})
  