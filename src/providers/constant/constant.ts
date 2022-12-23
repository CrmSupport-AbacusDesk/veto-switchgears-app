import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }

  // Testing url

  // public rootUrl: string = 'https://devcrm.abacusdesk.com/vetoswitchgears/dd_api/';  
  // public server_url: string = this.rootUrl + 'index.php/app/';
  // public upload_url: string ='https://devcrm.abacusdesk.com/vetoswitchgears/dd_api/app/uploads/';



  //   Live Url 


  public rootUrl: string = 'https://apps.abacusdesk.com/vetoswitchgears/dd_api/';  
  public server_url: string = this.rootUrl + 'index.php/app/';
  public upload_url: string ='https://apps.abacusdesk.com/vetoswitchgears/dd_api/app/uploads/';


  public backButton = 0;

}
