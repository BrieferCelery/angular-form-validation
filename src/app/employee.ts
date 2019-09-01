export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public country: string,
    public securityQuestion?: string
  ) {}
}
