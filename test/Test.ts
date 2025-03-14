import assert from "assert";
import { 
  TestHelpers,
  Cult_Approval
} from "generated";
const { MockDb, Cult } = TestHelpers;

describe("Cult contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Cult contract Approval event
  const event = Cult.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Cult_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Cult.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCultApproval = mockDbUpdated.entities.Cult_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCultApproval: Cult_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCultApproval, expectedCultApproval, "Actual CultApproval should be the same as the expectedCultApproval");
  });
});
