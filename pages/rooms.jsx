import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  WifiIcon,
  Clock,
  AlertCircle,
} from "lucide-react"

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/api/rooms')
        const data = await response.json()
        if (data.success) {
          setRooms(data.data)
        }
      } catch (error) {
        console.error('Error fetching rooms:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRooms()
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'booked':
        return 'bg-blue-100 text-blue-800'
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Daftar Ruangan</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={room.image_url || 'https://via.placeholder.com/400x200'}
                  alt={room.name}
                  className="object-cover w-full h-full"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${getStatusColor(room.status)}`}
                >
                  {room.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{room.name}</span>
                  <span className="text-lg font-normal text-muted-foreground">
                    Rp {room.price_per_hour.toLocaleString()}
                    <span className="text-sm">/jam</span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Kapasitas: {room.capacity} orang</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Fasilitas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.facilities.map((facility, index) => (
                      <Badge key={index} variant="secondary">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {room.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Rooms