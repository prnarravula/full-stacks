const RoomDetails = ({ room }) => {
    return (
        <div className="room-details">
            <h4>Room Number: {room.roomNumber}</h4>
            <p><strong>Price ($): </strong>{room.price}</p>
            <p><strong>Max Capacity: </strong>{room.maxCapacity}</p>
        </div>
    )
}

export default RoomDetails