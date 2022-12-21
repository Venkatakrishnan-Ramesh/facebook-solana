import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Outp } from '../target/types/outp';

describe('outp', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Outp as Program<Outp>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
