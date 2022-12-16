import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Progr } from "../target/types/progr";

describe("progr", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Progr as Program<Progr>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
