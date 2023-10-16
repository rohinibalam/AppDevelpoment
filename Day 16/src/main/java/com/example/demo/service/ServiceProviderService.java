package com.example.demo.service;

import com.example.demo.request.ServiceProviderRequest;
import com.example.demo.modal.ServiceProvider;

import java.util.List;

public interface ServiceProviderService {
    List<ServiceProvider> getAllServiceProviders();
    ServiceProvider getServiceProviderById(long id);
    boolean createServiceProvider(ServiceProviderRequest serviceProviderRequest);
    boolean updateServiceProvider(long id, ServiceProviderRequest serviceProviderRequest);
    boolean deleteServiceProvider(long id);
}