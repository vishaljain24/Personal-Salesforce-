public with sharing class AccController 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() 
    {
        return [Select id,Name,Type,Industry from Account LIMIT 5];
    }   

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccounttypebytype(String type) 
    {
        return [Select id,Name,Type,Industry from Account where Type=:type LIMIT 5];
    }   

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccount(String searchKey) 
    {
        String key='%'+ searchKey + '%';
        return [Select id,Name,Type,Industry from Account where Name Like :key LIMIT 5];
    } 
}