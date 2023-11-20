import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import myCustomPermission from '@salesforce/customPermission/show_details'
export default class CheckPermissionDemo extends LightningElement 
{
    get hasViewAllDataAvialable()
    {
        return hasViewAllData;
    }

    get hasCustompermission()
    {
        return myCustomPermission
    }
}