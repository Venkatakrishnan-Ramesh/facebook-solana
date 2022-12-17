use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}
// Complex account structure
#[derive(Accounts)]
pub struct CreateState<'info>{
    #[account(init,
    seeds=[b"state".as_ref()],bump, // making a new random seed unique id
    payer=authority,
    space =size_of::<StateAccount>() +8 // 8 bytes for the bump
    )]

    // Authority is the person who is creating the account
    #[account(mut)] // mutability
    pub authority: Signer<'info>, // who is the person who posted them

    // System program is the program that is going to create the account
    pub system_program: UncheckedAccount<'info>, // Unchecked Account stands for Lesser security 

    // adding the constraint that the account 
    #[account(constraint = token_program,key=&token::key)]
    pub token_program:Program<'info,Token>,// Token program

}
 
#[account]
pub struct StateAccount{
    pub authority:Pubkey, // who is the person who posted them
    pub post_count:u64, //  unsigned 64 bit integer

}

#[derive(Accounts)] {
    pub state : Account<'info,StateAccount>, // letting the Account know that it is a state account
    
}




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
