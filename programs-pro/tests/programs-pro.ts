import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ProgramsPro } from "../target/types/programs_pro";

describe("programs-pro", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ProgramsPro as Program<ProgramsPro>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
