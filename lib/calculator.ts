export interface ProjectDimensions {
  length: number; // comprimento em cm
  width: number;  // largura em cm
  height?: number; // altura em cm (opcional, para nichos)
}

export interface CalculationOptions {
  serviceType: 'bancada' | 'pia' | 'nicho' | 'outro';
  hasBuiltInSink?: boolean;
  hasCustomEdge?: boolean;
  complexity: 'simples' | 'media' | 'complexa';
}

// Preços base por metro quadrado
const BASE_PRICES = {
  bancada: 300,
  pia: 350,
  nicho: 250,
  outro: 300
};

// Multiplicadores de complexidade
const COMPLEXITY_MULTIPLIERS = {
  simples: 1,
  media: 1.3,
  complexa: 1.6
};

// Adicionais em porcentagem
const ADDITIONS = {
  builtInSink: 0.2, // +20%
  customEdge: 0.15  // +15%
};

export function calculatePrice(dimensions: ProjectDimensions, options: CalculationOptions): number {
  // Calcular área em metros quadrados
  let area = 0;
  
  if (options.serviceType === 'nicho' && dimensions.height) {
    // Para nichos, calcular área total (frente + laterais + fundo)
    const frontArea = (dimensions.length * dimensions.height) / 10000;
    const sidesArea = (2 * dimensions.width * dimensions.height) / 10000;
    const backArea = (dimensions.length * dimensions.width) / 10000;
    area = frontArea + sidesArea + backArea;
  } else {
    // Para bancadas e pias
    area = (dimensions.length * dimensions.width) / 10000;
  }
  
  // Preço base pelo tipo de serviço
  let price = area * BASE_PRICES[options.serviceType];
  
  // Aplicar multiplicador de complexidade
  price *= COMPLEXITY_MULTIPLIERS[options.complexity];
  
  // Adicionar extras
  if (options.hasBuiltInSink) {
    price += price * ADDITIONS.builtInSink;
  }
  
  if (options.hasCustomEdge) {
    price += price * ADDITIONS.customEdge;
  }
  
  // Arredondar para cima ao múltiplo de 10 mais próximo
  return Math.ceil(price / 10) * 10;
}