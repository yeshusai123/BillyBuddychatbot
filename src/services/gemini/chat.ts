import { genAI, MODEL_NAME } from './config';
import { CHAT_PROMPTS } from './prompts';
import { ChatResponse } from './types';

export class ChatService {
  private static instance: ChatService;
  private model = genAI.getGenerativeModel({ model: MODEL_NAME });
  private chat = this.model.startChat({
    history: [
      {
        role: 'user',
        parts: CHAT_PROMPTS.INITIAL_CONTEXT,
      }
    ],
  });

  private constructor() {}

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  public async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      
      return {
        message: text,
      };
    } catch (error) {
      console.error('Error in chat service:', error);
      return {
        message: 'I apologize, but I\'m having trouble processing your message right now. Could you please try again?',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  public async analyzeMessageSentiment(message: string): Promise<number> {
    try {
      const result = await this.model.generateContent(`
        Analyze the following message for signs of distress on a scale of 1-10,
        where 1 is neutral and 10 is severe distress. Return only the number.
        Message: "${message}"
      `);
      const response = await result.response;
      const sentiment = parseInt(response.text().trim(), 10);
      return isNaN(sentiment) ? 5 : sentiment;
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      return 5;
    }
  }
}