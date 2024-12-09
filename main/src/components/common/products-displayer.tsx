import { fibreDeals } from "@/config/pluxnet-products"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ProductCard from "./product-card"

export function ProductsDisplayer() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="business">Business</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {fibreDeals
            .filter((prod) => prod.type === "Home")
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="business">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {fibreDeals
            .filter((prod) => prod.type !== "Home")
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
