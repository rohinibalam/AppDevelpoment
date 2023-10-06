package com.example.demo.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ServiceProviderRequest {

    public String getServiceprovider_name() {
		return serviceprovider_name;
	}
	public void setServiceprovider_name(String serviceprovider_name) {
		this.serviceprovider_name = serviceprovider_name;
	}
	public String getServiceprovider_email() {
		return serviceprovider_email;
	}
	public void setServiceprovider_email(String serviceprovider_email) {
		this.serviceprovider_email = serviceprovider_email;
	}
	public String getServiceprovider_phonenumber() {
		return serviceprovider_phonenumber;
	}
	public void setServiceprovider_phonenumber(String serviceprovider_phonenumber) {
		this.serviceprovider_phonenumber = serviceprovider_phonenumber;
	}
	public String getServiceprovider_profession() {
		return serviceprovider_profession;
	}
	public void setServiceprovider_profession(String serviceprovider_profession) {
		this.serviceprovider_profession = serviceprovider_profession;
	}
	public String getServiceprovider_company() {
		return serviceprovider_company;
	}
	public void setServiceprovider_company(String serviceprovider_company) {
		this.serviceprovider_company = serviceprovider_company;
	}
	private String serviceprovider_name;
    private String serviceprovider_email;
    private String serviceprovider_phonenumber;
    private String serviceprovider_profession;
    private String serviceprovider_company;
    
      
}
