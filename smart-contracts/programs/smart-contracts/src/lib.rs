use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod smart_contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

// Post account Structure 
//  Simple struct so defined  directly 
#[account] //
pub struct PostAccount{
    pub authority : Pubkey , // who is the person who posted them
    pub text : String ,
    pub poster_name : String,
    pub poster_url : String,
    pub comment_count : u64,
    pub index :u64,
    pub post_time :i64,

}
