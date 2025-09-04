'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 2 },
    { i: "b", x: 4, y: 0, w: 4, h: 2 },
    { i: "c", x: 8, y: 0, w: 4, h: 2 },
    { i: "d", x: 0, y: 2, w: 6, h: 4 },
    { i: "e", x: 6, y: 2, w: 6, h: 4 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <Button variant="outline">Sign Out</Button>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
        >
          <div key="a">
            <Card>
              <CardHeader>
                <CardTitle>Card 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
          </div>
          <div key="b">
            <Card>
              <CardHeader>
                <CardTitle>Card 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
          </div>
          <div key="c">
            <Card>
              <CardHeader>
                <CardTitle>Card 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
          </div>
          <div key="d">
            <Card>
              <CardHeader>
                <CardTitle>Card 4</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
          </div>
          <div key="e">
            <Card>
              <CardHeader>
                <CardTitle>Card 5</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
          </div>
        </ResponsiveGridLayout>
      </main>
      <footer className="flex items-center justify-center h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
