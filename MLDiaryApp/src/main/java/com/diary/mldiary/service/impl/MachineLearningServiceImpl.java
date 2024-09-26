package com.diary.mldiary.service.impl;

import com.diary.mldiary.service.MachineLearningService;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class MachineLearningServiceImpl implements MachineLearningService {

    @Override
    public String getEmotionFromText (String inputData) {
        try
        {
            Process process = getProcess(inputData);

            // Read the script's output
            StringBuilder output = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }
            }

            // Wait for the process to complete
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                // The Python script executed successfully
                return output.toString();
            } else {
                // Handle errors if needed
                return "Python script execution failed with exit code: " + exitCode;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return "Error executing Python script: " + e.getMessage();
        }
    }

    private static Process getProcess(String inputData) throws IOException {
        String pythonCommand = "python3";
        String scriptPath = "src/main/java/machinelearningmodels/sentiment.py";

        // Prepare the command to execute
        String[] command = {pythonCommand, scriptPath, inputData};

        // Create a process builder
        ProcessBuilder processBuilder = new ProcessBuilder(command);

        // Redirect standard output to capture the script's output
        processBuilder.redirectErrorStream(true);

        // Start the process
        Process process = processBuilder.start();
        return process;
    }
}
