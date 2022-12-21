use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod outp {
    use super::*;
    pub fn create_state(ctx: Context<CreateState>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateState<'info> {
    #[account(
        init,
        seeds=[b"state".as_ref()],
        bump,
        space=size_of::<StateAccount>() + 8
    )]
    pub state Account<'info, StateAccount>,

    #[account(mut)]
    pub authority : Signer<'info>
    //
    pub system_program:UncheckedAccount<'info>

    // 
    #[account(constraint = token_program.key==&token::ID)]
    pub token_program:Program<'info,Token>,
}

#[derive(Accounts)]
pub struct CreatePost{
    #[account(
        init,
        seeds=[b"post".as_ref(),post_index.as_ref()],
        bump,
        space=size_of::<PostAccount>() + 8
    )]
    pub post Account<'info, PostAccount>,

    #[account(mut)]
    pub authority : Signer<'info>
    //
    pub system_program:UncheckedAccount<'info>

    // 
    #[account(constraint = token_program.key==&token::ID)]
    pub token_program:Program<'info,Token>,

    pub clock:Sysvar<'info,Clock>,
}

//
#[account]
pub struct PostAccount{
    pub authority : Pubkey,
    pub text : String,
    pub poster_name:String,
    pub poster_url:String,
    pub comment_count:u64, 
    pub index : u64,
    pub post_time :i64
}