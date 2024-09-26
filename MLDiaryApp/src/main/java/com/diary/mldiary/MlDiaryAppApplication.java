package com.diary.mldiary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class MlDiaryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MlDiaryAppApplication.class, args);
	}
}
