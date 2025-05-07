"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galeria de Projetos | Oficina de Porcelanato',
  description: 'Explore nossa galeria com fotos de projetos realizados em porcelanato. Bancadas, pias, nichos e mais.',
};

// Gallery items categorized
const galleryItems = {
  bancadas: [
    {
      id: 'b1',
      title: 'Bancada de Cozinha Moderna',
      description: 'Bancada em porcelanato com acabamento perfeito e cuba embutida.',
      thumbnail: 'https://images.pexels.com/photos/6207827/pexels-photo-6207827.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6207827/pexels-photo-6207827.jpeg',
      category: 'bancadas',
    },
    {
      id: 'b2',
      title: 'Bancada Gourmet',
      description: 'Bancada em L com porcelanato que imita mármore branco.',
      thumbnail: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
      category: 'bancadas',
    },
    {
      id: 'b3',
      title: 'Bancada com Cooktop',
      description: 'Bancada em porcelanato escuro com cooktop embutido.',
      thumbnail: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg',
      category: 'bancadas',
    },
  ],
  pias: [
    {
      id: 'p1',
      title: 'Cuba Esculpida em Porcelanato',
      description: 'Cuba esculpida diretamente no porcelanato, sem emendas.',
      thumbnail: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg',
      category: 'pias',
    },
    {
      id: 'p2',
      title: 'Pia de Banheiro Minimalista',
      description: 'Pia em porcelanato que imita concreto, design minimalista.',
      thumbnail: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      category: 'pias',
    },
    {
      id: 'p3',
      title: 'Pia Dupla em Porcelanato',
      description: 'Pia dupla com porcelanato que imita mármore cinza.',
      thumbnail: 'https://images.pexels.com/photos/7937366/pexels-photo-7937366.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/7937366/pexels-photo-7937366.jpeg',
      category: 'pias',
    },
  ],
  nichos: [
    {
      id: 'n1',
      title: 'Nicho de Banheiro',
      description: 'Nicho em porcelanato para produtos de banho.',
      thumbnail: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg',
      category: 'nichos',
    },
    {
      id: 'n2',
      title: 'Prateleiras Flutuantes',
      description: 'Prateleiras flutuantes em porcelanato para sala de estar.',
      thumbnail: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg',
      category: 'nichos',
    },
    {
      id: 'n3',
      title: 'Nichos Decorativos',
      description: 'Conjunto de nichos decorativos em porcelanato.',
      thumbnail: 'https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg',
      category: 'nichos',
    },
  ],
  outros: [
    {
      id: 'o1',
      title: 'Revestimento de Escada',
      description: 'Escada revestida com porcelanato, aspecto moderno.',
      thumbnail: 'https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg',
      category: 'outros',
    },
    {
      id: 'o2',
      title: 'Lareira em Porcelanato',
      description: 'Lareira com acabamento em porcelanato que imita pedra natural.',
      thumbnail: 'https://images.pexels.com/photos/6186504/pexels-photo-6186504.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6186504/pexels-photo-6186504.jpeg',
      category: 'outros',
    },
    {
      id: 'o3',
      title: 'Mesa de Jantar',
      description: 'Mesa de jantar com tampo em porcelanato.',
      thumbnail: 'https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullImage: 'https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg',
      category: 'outros',
    },
  ]
};

// Flatten array for 'todos' tab
const allItems = [
  ...galleryItems.bancadas,
  ...galleryItems.pias,
  ...galleryItems.nichos,
  ...galleryItems.outros
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<any>(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image.fullImage);
    setSelectedImageData(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setSelectedImageData(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Projetos</h1>
        <p className="text-lg text-gray-600">
          Explore nossa galeria com fotos de projetos realizados em porcelanato.
          Veja a qualidade e o acabamento de nossos trabalhos.
        </p>
      </div>
      
      <Tabs defaultValue="todos" className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-1">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="bancadas">Bancadas</TabsTrigger>
            <TabsTrigger value="pias">Pias e Cubas</TabsTrigger>
            <TabsTrigger value="nichos">Nichos</TabsTrigger>
            <TabsTrigger value="outros">Outros</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="todos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allItems.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full"
                      onClick={() => handleImageClick(item)}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    {selectedImage === item.fullImage && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleCloseDialog}
                          className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                        <div className="relative h-[70vh] w-full">
                          <Image
                            src={selectedImage}
                            alt={selectedImageData?.title || "Imagem ampliada"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="bg-white p-4">
                          <h3 className="text-xl font-bold">{selectedImageData?.title}</h3>
                          <p className="text-gray-600">{selectedImageData?.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bancadas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.bancadas.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full"
                      onClick={() => handleImageClick(item)}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    {selectedImage === item.fullImage && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleCloseDialog}
                          className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                        <div className="relative h-[70vh] w-full">
                          <Image
                            src={selectedImage}
                            alt={selectedImageData?.title || "Imagem ampliada"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="bg-white p-4">
                          <h3 className="text-xl font-bold">{selectedImageData?.title}</h3>
                          <p className="text-gray-600">{selectedImageData?.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pias" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.pias.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full"
                      onClick={() => handleImageClick(item)}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    {selectedImage === item.fullImage && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleCloseDialog}
                          className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                        <div className="relative h-[70vh] w-full">
                          <Image
                            src={selectedImage}
                            alt={selectedImageData?.title || "Imagem ampliada"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="bg-white p-4">
                          <h3 className="text-xl font-bold">{selectedImageData?.title}</h3>
                          <p className="text-gray-600">{selectedImageData?.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="nichos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.nichos.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full"
                      onClick={() => handleImageClick(item)}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    {selectedImage === item.fullImage && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleCloseDialog}
                          className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                        <div className="relative h-[70vh] w-full">
                          <Image
                            src={selectedImage}
                            alt={selectedImageData?.title || "Imagem ampliada"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="bg-white p-4">
                          <h3 className="text-xl font-bold">{selectedImageData?.title}</h3>
                          <p className="text-gray-600">{selectedImageData?.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="outros" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.outros.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full"
                      onClick={() => handleImageClick(item)}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    {selectedImage === item.fullImage && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleCloseDialog}
                          className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                        <div className="relative h-[70vh] w-full">
                          <Image
                            src={selectedImage}
                            alt={selectedImageData?.title || "Imagem ampliada"}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="bg-white p-4">
                          <h3 className="text-xl font-bold">{selectedImageData?.title}</h3>
                          <p className="text-gray-600">{selectedImageData?.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <CardContent className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}