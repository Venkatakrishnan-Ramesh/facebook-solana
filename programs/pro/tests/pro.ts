import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Pro } from "../target/types/pro";

describe("pro", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Pro as Program<Pro>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
