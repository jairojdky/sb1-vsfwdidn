"use client";

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Send, Upload, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  serviceType: z.string().min(1, { message: 'Selecione um tipo de serviço' }),
  dimensions: z.string().min(1, { message: 'Informe as dimensões aproximadas' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const QuoteRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      dimensions: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Format WhatsApp message with the form data
    const whatsappMessage = `
Olá! Gostaria de solicitar um orçamento.

*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone}
*Serviço:* ${data.serviceType}
*Dimensões:* ${data.dimensions}

${data.message ? `*Mensagem:* ${data.message}` : ''}
`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Solicitação enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar seu pedido.",
      });
      
      // Delay before opening WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/5551997778490?text=${encodedMessage}`, '_blank');
      }, 1500);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader className="bg-blue-50 border-b">
        <CardTitle className="text-2xl">Formulário de Orçamento</CardTitle>
        <CardDescription>
          Preencha os dados abaixo para solicitar um orçamento personalizado.
        </CardDescription>
      </CardHeader>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="pt-6 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone / WhatsApp</FormLabel>
                    <FormControl>
                      <Input placeholder="(51) 98765-4321" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de serviço</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Bancada de cozinha, Pia de banheiro..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="dimensions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dimensões aproximadas</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 2m x 60cm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem adicional (opcional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva detalhes adicionais sobre seu projeto..." 
                      className="resize-none"
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Enviar foto ou projeto</span>
              </div>
              <FormDescription>
                Para enviar imagens, finalize o preenchimento e continue pelo WhatsApp.
              </FormDescription>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between items-center border-t pt-6">
            <Button variant="outline" type="button" asChild>
              <a 
                href="https://wa.me/5551997778490?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20técnica."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Visita
              </a>
            </Button>
            
            <Button type="submit" disabled={isSubmitting || isSuccess}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Enviado!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default QuoteRequestForm;