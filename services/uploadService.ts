
import { geminiService } from './geminiService';

/**
 * Simulated Upload Service for FFN
 * In a real-world scenario, this would send a FormData object to a REST/GraphQL endpoint.
 */
export const uploadService = {
  async uploadImage(file: File, type: 'avatar' | 'cover'): Promise<{ url: string; analysis?: any }> {
    console.log(`Uploading ${type}:`, file.name);

    // 1. Simulate Network Latency (Server Roundtrip)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. Create a local preview URL (representing the stored URL from the server)
    const mockServerUrl = URL.createObjectURL(file);

    // 3. Optional: AI Analysis of the "uploaded" image to provide immediate platform value
    // This demonstrates the "Professional Fashion Ecosystem" requirement
    let analysis = null;
    try {
      // In a real app, we'd send the base64 or file to Gemini
      // For this demo, we'll just trigger a trend analysis to simulate "AI processing"
      analysis = await geminiService.analyzeStyle(mockServerUrl);
    } catch (e) {
      console.warn("AI Analysis skipped during upload simulation", e);
    }

    return {
      url: mockServerUrl,
      analysis
    };
  }
};
