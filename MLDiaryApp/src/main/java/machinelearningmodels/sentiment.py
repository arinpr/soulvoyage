import sys
from transformers import pipeline
from transformers import logging

logging.set_verbosity_error()

model = "nlptown/bert-base-multilingual-uncased-sentiment"
sentiment_classifier = pipeline('sentiment-analysis', model=model)

class EmotionAnalyzer:

    def analyze_emotion(self, text):
        result = sentiment_classifier(text)
        emotion_label = result[0]['label']
        return emotion_label

def main():
    if len(sys.argv) < 2:
        print("Usage: python my_script.py <input_string>")
        sys.exit(1)

    # Extract the input string from the command-line arguments
    input_string = ' '.join(sys.argv[1:])
    analyzer = EmotionAnalyzer()
    emotion = analyzer.analyze_emotion(input_string)
    print(f"Emotion: {emotion}")
    return emotion

if __name__ == "__main__":
    main()
