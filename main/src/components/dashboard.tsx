import { Apple, Info, QrCode, Users, Wifi } from "lucide-react"

import { fibreDeals } from "@/config/pluxnet-products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ProductCard from "./common/product-card"
import { ProductsDisplayer } from "./common/products-displayer"

// Sample data (in a real application, this would come from an API or database)
const fibrePackages = [
  { id: 1, name: "Basic Fibre", speed: 10, price: 29.99, sales: 1234 },
  { id: 2, name: "Standard Fibre", speed: 20, price: 39.99, sales: 5678 },
  { id: 3, name: "Fast Fibre", speed: 50, price: 49.99, sales: 910 },
  { id: 4, name: "Ultra Fibre", speed: 100, price: 59.99, sales: 1112 },
]

const customers = [
  { id: 1, name: "John Doe", phone: "+1 (555) 123-4567", status: "completed" },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 (555) 987-6543",
    status: "verifying",
  },
  {
    id: 3,
    name: "Bob Johnson",
    phone: "+1 (555) 246-8135",
    status: "onboarding in progress",
  },
]

const statusColors = {
  completed: "bg-green-100 text-green-800",
  verifying: "bg-yellow-100 text-yellow-800",
  "onboarding in progress": "bg-blue-100 text-blue-800",
}

export default function Dashboard() {
  return (
    <div className="min-h-screen  p-8">
      <main className="space-y-8">
        <section className="w-full">
          <ProductsDisplayer />
        </section>

        <section>
          <h2 className="mb-4 flex items-center text-2xl font-semibold ">
            <Users className="mr-2 h-6 w-6" />
            Customers
          </h2>
          <Card className="rounded-xl bg-white shadow-sm">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium text-gray-600">
                      Name
                    </th>
                    <th className="p-4 text-left font-medium text-gray-600">
                      Phone Number
                    </th>
                    <th className="p-4 text-left font-medium text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b last:border-b-0">
                      <td className="p-4 text-gray-800">{customer.name}</td>
                      <td className="p-4 text-gray-600">{customer.phone}</td>
                      <td className="p-4">
                        <Badge
                          className={`font-normal ${statusColors[customer.status]}`}
                        >
                          {customer.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
