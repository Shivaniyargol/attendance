<!-- "use client"

import { useEffect, useRef, useState } from "react"
import { Html5Qrcode } from "html5-qrcode"

type Props = {
    onScan: (result: string) => void
}

export default function QrScanner({ onScan }: Props) {
    const qrRegionId = "qr-reader"
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isScanning, setIsScanning] = useState(false)

    useEffect(() => {
        const html5QrCode = new Html5Qrcode(qrRegionId)
        html5QrCodeRef.current = html5QrCode

        Html5Qrcode.getCameras()
            .then(devices => {
                if (devices.length === 0) {
                    setError("No camera found")
                    return
                }

                const cameraId = devices[0].id

                html5QrCode.start(
                    cameraId,
                    { fps: 10, qrbox: 250 },
                    (decodedText) => {
                        if (!isScanning) {
                            setIsScanning(true)
                            onScan(decodedText)
                            html5QrCode.stop().then(() => {
                                html5QrCode.clear()
                            })
                        }
                    },
                    (errMsg) => {
                        // optionally handle scan errors
                    }
                ).catch(err => {
                    setError("Camera start error: " + err)
                })
            })
            .catch(err => {
                setError("Camera access error: " + err)
            })

        return () => {
            html5QrCodeRef.current?.stop().catch(() => { })
        }
    }, [onScan, isScanning])

    return (
        <div>
            <div id={qrRegionId} style={{ width: 300 }} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
} -->
