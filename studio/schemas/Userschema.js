export const Userschema = {
    name:'users',
    type:'document',
    title: 'Users',
    feilds:[
        {
        name:'name',
        type:'string',
        title:'Name'
        },
        {
            name:'walletaddress',
            type:'string',
            title:'Walletaddress'
            },

        {
            name:'profileImg',
            type:'string',
            title:'ProfileImg'
        }
]
}