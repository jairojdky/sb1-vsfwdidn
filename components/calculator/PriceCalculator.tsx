"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { calculatePrice, ProjectDimensions, CalculationOptions } from '@/lib/calculator';
import { Calculator, ArrowRight } from 'lucide-react';

const PriceCalculator = () => {
  const [dimensions, setDimensions] = useState<ProjectDimensions>({
    length: 200, // 2 metros
    width: 60,   // 60 cm
    height: 40,  // 40 cm (para nichos)
  });

  const [options, setOptions] = useState<CalculationOptions>({
    serviceType: 'bancada',
    hasBuiltInSink: false,
    hasCustomEdge: false,
    complexity: 'simples',
  });

  const [price, setPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    // Simular um breve delay para dar sensação de processamento
    setTimeout(() => {
      const calculatedPrice = calculatePrice(dimensions, options);
      setPrice(calculatedPrice);
      setIsCalculating(false);
    }, 500);
  };

  const handleDimensionChange = (field: keyof ProjectDimensions, value: string) => {
    const numValue = parseFloat(value) || 0;
    setDimensions(prev => ({ ...prev, [field]: numValue }));
    // Reset price when inputs change
    setPrice(null);
  };

  const handleOptionChange = (field: keyof CalculationOptions, value: any) => {
    setOptions(prev => ({ ...prev, [field]: value }));
    // Reset price when options change
    setPrice(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-blue-50 border-b">
        <CardTitle className="flex items-center text-2xl">
          <Calculator className="mr-2 h-6 w-6 text-blue-600" />
          Calculadora de Preço
        </CardTitle>
        <CardDescription>
          Calcule o valor estimado da mão de obra para o seu projeto em porcelanato.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2">
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Tipo de Serviço</h3>
            <RadioGroup
              value={options.serviceType}
              onValueChange={(value) => handleOptionChange('serviceType', value)}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              <div>
                <RadioGroupItem
                  value="bancada"
                  id="bancada"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="bancada"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-600 [&:has([data-state=checked])]:bg-blue-50"
                >
                  <span className="text-sm font-medium">Bancada</span>
                </Label>
              </div>
              
              <div>
                <RadioGroupItem
                  value="pia"
                  id="pia"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="pia"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-600 [&:has([data-state=checked])]:bg-blue-50"
                >
                  <span className="text-sm font-medium">Pia</span>
                </Label>
              </div>
              
              <div>
                <RadioGroupItem
                  value="nicho"
                  id="nicho"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="nicho"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-600 [&:has([data-state=checked])]:bg-blue-50"
                >
                  <span className="text-sm font-medium">Nicho</span>
                </Label>
              </div>
              
              <div>
                <RadioGroupItem
                  value="outro"
                  id="outro"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="outro"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-600 [&:has([data-state=checked])]:bg-blue-50"
                >
                  <span className="text-sm font-medium">Outro</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-3">Dimensões (em cm)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length">Comprimento</Label>
                <Input
                  id="length"
                  type="number"
                  value={dimensions.length}
                  onChange={(e) => handleDimensionChange('length', e.target.value)}
                  min="10"
                  step="1"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="width">Largura</Label>
                <Input
                  id="width"
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => handleDimensionChange('width', e.target.value)}
                  min="10"
                  step="1"
                />
              </div>
            </div>
            
            {options.serviceType === 'nicho' && (
              <div className="space-y-2">
                <Label htmlFor="height">Altura</Label>
                <Input
                  id="height"
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => handleDimensionChange('height', e.target.value)}
                  min="10"
                  step="1"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-1">Complexidade do Projeto</h3>
            <p className="text-sm text-gray-500 mb-3">
              A complexidade influencia diretamente no valor final do orçamento.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Simples</span>
                <span>Média</span>
                <span>Complexa</span>
              </div>
              <Slider
                defaultValue={[0]}
                max={2}
                step={1}
                value={[options.complexity === 'simples' ? 0 : options.complexity === 'media' ? 1 : 2]}
                onValueChange={(value) => {
                  const complexityMap = ['simples', 'media', 'complexa'] as const;
                  handleOptionChange('complexity', complexityMap[value[0]]);
                }}
              />
              <div className="text-sm text-gray-500 mt-1">
                {options.complexity === 'simples' && 'Formato reto, sem recortes especiais'}
                {options.complexity === 'media' && 'Até 2 recortes ou cantos arredondados'}
                {options.complexity === 'complexa' && 'Múltiplos recortes, formas especiais'}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-3">Opções Adicionais</h3>
            
            {(options.serviceType === 'bancada' || options.serviceType === 'pia') && (
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="built-in-sink">Cuba Esculpida</Label>
                  <p className="text-sm text-gray-500">
                    Cuba esculpida na própria peça de porcelanato
                  </p>
                </div>
                <Switch
                  id="built-in-sink"
                  checked={options.hasBuiltInSink}
                  onCheckedChange={(value) => handleOptionChange('hasBuiltInSink', value)}
                />
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="custom-edge">Borda Personalizada</Label>
                <p className="text-sm text-gray-500">
                  Acabamento especial na borda da peça
                </p>
              </div>
              <Switch
                id="custom-edge"
                checked={options.hasCustomEdge}
                onCheckedChange={(value) => handleOptionChange('hasCustomEdge', value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4 pt-4">
        <Button 
          onClick={handleCalculate} 
          className="w-full"
          disabled={isCalculating}
        >
          {isCalculating ? 'Calculando...' : 'Calcular Orçamento'}
        </Button>
        
        {price !== null && (
          <div className="w-full rounded-md bg-blue-50 p-4 text-center">
            <p className="text-sm text-blue-700 mb-1">Valor Estimado da Mão de Obra:</p>
            <p className="text-3xl font-bold text-blue-800">R$ {price.toLocaleString('pt-BR')}</p>
            <p className="text-xs text-blue-600 mt-2">
              *Este é um valor estimado. O valor final pode variar após avaliação técnica.
            </p>
            <Button 
              variant="link" 
              className="mt-2 text-blue-600"
              asChild
            >
              <a 
                href={`https://wa.me/5551997778490?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20${options.serviceType}%20de%20porcelanato.%20Dimensões:%20${dimensions.length}x${dimensions.width}cm.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Solicitar orçamento oficial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PriceCalculator;