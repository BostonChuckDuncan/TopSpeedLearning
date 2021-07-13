export class UserDto {
    public userName!: string;  
    public password!: string;

    public UserDto()
    {
        this.userName = '';
        this.password = '';
    }
}
