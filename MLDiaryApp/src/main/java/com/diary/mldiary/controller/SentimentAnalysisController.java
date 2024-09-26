package com.diary.mldiary.controller;

import com.diary.mldiary.service.MachineLearningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("api/ml")
public class SentimentAnalysisController {

    @Autowired
    private MachineLearningService machineLearningService;

    @PostMapping("/predict")
    public ResponseEntity<java.lang.String> getEmotionFromText (@RequestBody String text) {
        String result = machineLearningService.getEmotionFromText(text);
        return ResponseEntity.ok(result);
    }
}
