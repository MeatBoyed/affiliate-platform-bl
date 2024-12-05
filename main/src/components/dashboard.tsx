import { Apple, Wifi, Users, Info, QrCode } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample data (in a real application, this would come from an API or database)
const fibrePackages = [
  { id: 1, name: "Basic Fibre", speed: 10, price: 29.99, sales: 1234 },
  { id: 2, name: "Standard Fibre", speed: 20, price: 39.99, sales: 5678 },
  { id: 3, name: "Fast Fibre", speed: 50, price: 49.99, sales: 910 },
  { id: 4, name: "Ultra Fibre", speed: 100, price: 59.99, sales: 1112 },
]

const customers = [
  { id: 1, name: "John Doe", phone: "+1 (555) 123-4567", status: "completed" },
  { id: 2, name: "Jane Smith", phone: "+1 (555) 987-6543", status: "verifying" },
  { id: 3, name: "Bob Johnson", phone: "+1 (555) 246-8135", status: "onboarding in progress" },
]

const statusColors = {
  "completed": "bg-green-100 text-green-800",
  "verifying": "bg-yellow-100 text-yellow-800",
  "onboarding in progress": "bg-blue-100 text-blue-800"
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 flex items-center">
          <Apple className="mr-2 h-8 w-8" />
          Fibre Affiliate Dashboard
        </h1>
      </header>

      <main className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Wifi className="mr-2 h-6 w-6" />
            Fibre Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fibrePackages.map((pkg) => (
              <Card key={pkg.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold text-gray-800">{pkg.speed} Mbps</p>
                  <p className="text-xl font-medium text-gray-600 mt-1">${pkg.price}/mo</p>
                  <p className="text-sm text-gray-500 mt-2">{pkg.sales} sales</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <QrCode className="w-4 h-4 mr-2" />
                    QR Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Customers
          </h2>
          <Card className="bg-white rounded-xl shadow-sm">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-600">Name</th>
                    <th className="text-left p-4 font-medium text-gray-600">Phone Number</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b last:border-b-0">
                      <td className="p-4 text-gray-800">{customer.name}</td>
                      <td className="p-4 text-gray-600">{customer.phone}</td>
                      <td className="p-4">
                        <Badge className={`font-normal ${statusColors[customer.status]}`}>
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

