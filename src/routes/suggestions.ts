import express from 'express';
import generateSuggestions from '../agents/suggestionGeneratorAgent'; 
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { getAvailableChatModelProviders } from '../lib/providers';
import { HumanMessage, AIMessage } from '@langchain/core/messages';
import logger from '../utils/logger';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let { chat_history, chat_model, chat_model_provider, query } = req.body;

    // Process chat history
    const messages = chat_history.map((msg: any) => {
      if (msg.role === 'user') {
        return new HumanMessage(msg.content);
      } else if (msg.role === 'assistant') {
        return new AIMessage(msg.content);
      }
    });

    // Load available chat models
    const chatModels = await getAvailableChatModelProviders();
    const provider = chat_model_provider ?? Object.keys(chatModels)[0];
    const chatModel = chat_model ?? Object.keys(chatModels[provider])[0];

    let llm: BaseChatModel | undefined;

    // Select the appropriate model
    if (chatModels[provider] && chatModels[provider][chatModel]) {
      llm = chatModels[provider][chatModel].model as BaseChatModel | undefined;
    }

    if (!llm) {
      res.status(500).json({ message: 'Invalid LLM model selected' });
      return;
    }

    // Call the model with messages directly if valid
    const response = await llm.call(messages); // Check if this works

    res.status(200).json({ response: response });
  } catch (err) {
    res.status(500).json({ message: 'An error has occurred.' });
    logger.error(`Error in generating suggestions: ${err.message}`);
  }
});

export default router;
