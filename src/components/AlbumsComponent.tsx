import { useSelector } from 'react-redux'
import { Album } from '../model/Album'
import { selectPhotos } from '../features/PhotosSlice'
import { selectUsers } from '../features/UsersSlice'
import UserPortfolio from './UserPortfolio'

interface AlbumProps {
	album: Album
}

const AlbumsComponent: React.FC<AlbumProps> = ({ album }) => {
	const photos = useSelector(selectPhotos).filter((photo) => photo.albumId === album.id)
	const user = useSelector(selectUsers)

	return (
		<article
			key={album.id}
			className=' my-10 px-5 py-3 flex-col items-start justify-between shadow-lg ring-1 ring-inset ring-gray-300 p-6 max-w-xll bg-gray-100 drop-shadow-xl rounded-lg border-2 border-gray-400 mx-5 mb-3'>
			<UserPortfolio user={user.find((user) => user.id === album.userId)!} />
			<div className='flex items-center p-1 justify-center rounded-lg text-center text-xl bg-stone-300'>
				{album.title}
			</div>
			<div className='flex flex-wrap justify-center'>
				{photos.map((photo) => (
					<img
						className='h-auto max-w-full mx-1 my-1 border-2 border-gray-300'
						src={photo.thumbnailUrl}
						alt={photo.title}
					/>
				))}
			</div>
		</article>
	)
}

export default AlbumsComponent
