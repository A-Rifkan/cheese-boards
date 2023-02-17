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
  
    test('can create a User', async () => {
        const testUser = await User.create({
            name: "Rifkan",
            email: "test@test.com"
        });
        expect(testUser.name).toBe("Rifkan");
        expect(testUser.email).toBe("test@test.com");
    });
})
  