"use client"

import QrScanner from "@/app/components/QRScanner"

export default function ScanPage() {


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Scan Your QR Code</h1>
      <QrScanner />


    </main>
  )
}
