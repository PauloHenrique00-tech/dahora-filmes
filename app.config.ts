// Módulo responsável pelo acesso à dados de variáveis de ambiente
import "dotenv/config";
import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora-Filmes",
  slug: "dahora-filmes",
  owner: "ph00", // Necessário para o EAS
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
  },
  plugins: ["expo-font", "expo-asset", "expo-router"],
  // Acessando a API_KEY através do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    // Necessário para o EAS
    eas: {
      projectId: "632b4c17-d365-4afb-8f46-6b916150b6c5",
    },
  },
  updates: {
    url: "https://u.expo.dev/632b4c17-d365-4afb-8f46-6b916150b6c5",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
