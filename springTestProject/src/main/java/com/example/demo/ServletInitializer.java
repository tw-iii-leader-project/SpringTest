package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan({ "com.example.demo", "com.example.model", "com.example.controller", "com.example.service",
		"com.example.repository" })
@EntityScan({ "com.example.demo", "com.example.model", "com.example.controller", "com.example.service",
		"com.example.repository" })
public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SpringTestProjectApplication.class);
	}

}
