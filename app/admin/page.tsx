"use client"

import { useState } from "react"
import { Package, ShoppingCart, Users, TrendingUp, Eye, Edit, Trash2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Image from "next/image"

export default function AdminDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "products" | "orders">("overview")

  // Mock data
  const totalProducts = products.length
  const totalOrders = 47
  const totalCustomers = 156
  const totalRevenue = 234500

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Raj Kumar",
      product: "Royal Oud",
      amount: 2499,
      status: "delivered",
      date: "2025-01-28",
    },
    {
      id: "ORD-002",
      customer: "Priya Sharma",
      product: "Mystic Rose",
      amount: 1899,
      status: "shipped",
      date: "2025-01-29",
    },
    {
      id: "ORD-003",
      customer: "Amit Patel",
      product: "Luxury Collection Gift Set",
      amount: 4999,
      status: "confirmed",
      date: "2025-01-30",
    },
    {
      id: "ORD-004",
      customer: "Neha Singh",
      product: "Saffron Soul",
      amount: 2799,
      status: "pending",
      date: "2025-02-01",
    },
    {
      id: "ORD-005",
      customer: "Vikram Reddy",
      product: "Amber Nights",
      amount: 2199,
      status: "delivered",
      date: "2025-02-02",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "shipped":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "confirmed":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "pending":
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 font-serif text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your products, orders, and customers</p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="border-b border-border bg-background py-4">
          <div className="container mx-auto px-4">
            <div className="flex gap-4">
              <Button
                variant={selectedTab === "overview" ? "default" : "ghost"}
                onClick={() => setSelectedTab("overview")}
              >
                Overview
              </Button>
              <Button
                variant={selectedTab === "products" ? "default" : "ghost"}
                onClick={() => setSelectedTab("products")}
              >
                Products
              </Button>
              <Button variant={selectedTab === "orders" ? "default" : "ghost"} onClick={() => setSelectedTab("orders")}>
                Orders
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {selectedTab === "overview" && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                          <p className="mt-2 font-serif text-3xl font-bold">{totalProducts}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <Package className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                          <p className="mt-2 font-serif text-3xl font-bold">{totalOrders}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <ShoppingCart className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                          <p className="mt-2 font-serif text-3xl font-bold">{totalCustomers}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                          <p className="mt-2 font-serif text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                          <TrendingUp className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b border-border last:border-0">
                              <td className="py-4 text-sm font-medium">{order.id}</td>
                              <td className="py-4 text-sm">{order.customer}</td>
                              <td className="py-4 text-sm">{order.product}</td>
                              <td className="py-4 text-sm font-semibold text-accent">₹{order.amount}</td>
                              <td className="py-4">
                                <span
                                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4 text-sm text-muted-foreground">{order.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {selectedTab === "products" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold">All Products</h2>
                  <Button className="bg-primary text-primary-foreground">Add New Product</Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-border/40">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover object-top"
                          style={{ objectPosition: 'top center' }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {product.category}
                          </span>
                          <span
                            className={`text-xs font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                        <h3 className="mb-2 font-serif text-lg font-semibold">{product.name}</h3>
                        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-serif text-xl font-bold text-accent">₹{product.price}</span>
                          <span className="text-xs text-muted-foreground">SKU: {product.sku}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Eye className="mr-1 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Edit className="mr-1 h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive hover:bg-destructive/10 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "orders" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold">All Orders</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" className="bg-transparent">
                      Filter
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      Export
                    </Button>
                  </div>
                </div>

                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                            <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b border-border last:border-0">
                              <td className="py-4 text-sm font-medium">{order.id}</td>
                              <td className="py-4 text-sm">{order.customer}</td>
                              <td className="py-4 text-sm">{order.product}</td>
                              <td className="py-4 text-sm font-semibold text-accent">₹{order.amount}</td>
                              <td className="py-4">
                                <span
                                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4 text-sm text-muted-foreground">{order.date}</td>
                              <td className="py-4">
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
