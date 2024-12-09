import { fibreDeals } from "@/config/pluxnet-products"
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
      <TabsContent value="business" className=" w-full">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
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
