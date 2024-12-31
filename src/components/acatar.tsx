interface AvatarProps {
    size: number;
}

export default function Avatar({ size }: AvatarProps) {
    console.log('🥧[size]:', size);
    return (
        <div>
            <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={size}
                height={100}
            />
        </div>
    )
}