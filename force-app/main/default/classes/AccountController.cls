public with sharing class AccountController 
{
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountlist()
    {
        return [Select id,name from Account LIMIT 10];
    }

    @AuraEnabled
    public static List<Account> findAccount(String keyword)
    {
        String key= '%'+keyword+'%';
        return [Select id,name from account where Name like :key LIMIT  10];
    }
}