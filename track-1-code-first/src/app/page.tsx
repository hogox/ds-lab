import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Design System en Código</CardTitle>
          <CardDescription>
            Este es un prototipo del Track 1, generado completamente en código sin diseños previos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="hola@dslab.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">Ingresar al Laboratorio</Button>
          <Button variant="outline" className="w-full">Crear una cuenta nueva</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
