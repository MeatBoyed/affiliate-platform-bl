import { Check, Info, QrCode, Zap } from "lucide-react"
import QRCode from "react-qr-code"

import { FibreDeal } from "@/config/pluxnet-products"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

interface product {
  id: number
  name: string
  speed: number
  price: number
  sales: number
}

// export default function ProductCard({
//   product: { id, name, price, speed },
// }: {
//   product: FibreDeal
// }) {
//   return (
//     <Card className="rounded-xl bg-popover shadow-sm transition-shadow hover:shadow-md">
//       <CardHeader className="pb-2">
//         <CardTitle className="text-lg font-medium">{name}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-3xl font-semibold">{speed} Mbps</p>
//         <p className="mt-1 text-xl font-medium ">${price}/mo</p>
//         {/* <p className="mt-2 text-sm">{sales} sales</p> */}
//       </CardContent>
//       <CardFooter className="flex gap-2">
//         <Button
//           variant="default"
//           size="sm"
//           className="flex w-full items-center"
//         >
//           <QrCode className="mr-2 h-4 w-4" />
//           QR Code
//         </Button>
//         <Button
//           variant="secondary"
//           size="sm"
//           className="flex w-full items-center"
//         >
//           <Info className="mr-2 h-4 w-4" />
//           Details
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

export default function ProductCard({ product: pkg }: { product: FibreDeal }) {
  return (
    <Card className={cn(pkg.mostPopular && "border-primary")}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
          {pkg.mostPopular && (
            <Badge variant="secondary" className="font-semibold">
              Most Popular
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{pkg.type}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline justify-center space-x-2">
          <span className="text-3xl font-bold">R{pkg.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-lg font-semibold">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span>{pkg.speed}</span>
        </div>
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        {/* <Button
          variant="default"
          size="sm"
          className="flex w-full items-center"
        >
          <QrCode className="mr-2 h-4 w-4" />
          Enroll via QR Code
        </Button> */}
        <ProductQRCode
          url={"https://pluxnet.co.za/switch-today-black-friday/"}
        />
        {/* <Button
          variant="secondary"
          size="sm"
          className="flex w-full items-center"
        >
          <Info className="mr-2 h-4 w-4" />
          Details
        </Button> */}
      </CardFooter>
    </Card>
  )
}

export function ProductQRCode({ url }: { url: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="flex w-full items-center"
        >
          <QrCode className="mr-2 h-4 w-4" />
          Enroll via QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Scan QR code to enroll</DialogTitle>
          <DialogDescription>
            Provide this QR to your customers for them to enroll today using
            your offer.
          </DialogDescription>
        </DialogHeader>
        <div className="grid p-4">
          <div
            // style={{
            //   height: "auto",
            //   margin: "0 auto",
            //   maxWidth: 64,
            //   width: "100%",
            // }}
            className="w-full "
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={url}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
