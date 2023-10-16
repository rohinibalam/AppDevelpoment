package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name="service_providers")

public class ServiceProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int serviceprovider_id;
	
	@Column(length=50 , nullable=false)
	private String serviceprovider_name;
	@Column(length=30 , nullable=false)
	private String serviceprovider_email;
	@Column(length=15 , nullable=false)
	private String serviceprovider_phonenumber;
	@Column(length=30 , nullable=false)
	private String serviceprovider_profession;
	@Column(length=100 , nullable=false)
	private String serviceprovider_company;
	
	ServiceProvider(){
		
	}
	
	public ServiceProvider(int id, String name, String email, String phoneNumber, String profession , String company) {
	    this.serviceprovider_id = id;
	    this.serviceprovider_name = name;
	    this.serviceprovider_email = email;
	    this.serviceprovider_phonenumber = phoneNumber;
	    this.serviceprovider_profession = profession;
	    this.serviceprovider_company = company;
	}

	public int getServiceprovider_id() {
		return serviceprovider_id;
	}

	public void setServiceprovider_id(int serviceprovider_id) {
		this.serviceprovider_id = serviceprovider_id;
	}

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

}

