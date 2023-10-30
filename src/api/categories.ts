import { BASE_URL } from '../constants'
import ICategory from '../interfaces/ICategory'

const categoriesFetchApi = async (accessToken) => {
    try {
        console.log('categoriesFetchApi')

        const url = `${BASE_URL}/browse/categories`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            // body: JSON.stringify({ payload }),
        })

        const json = await response.json()
        if (response.status === 200) {
            const categories: ICategory[] = json.categories.items.map(
                (category) => {
                    const iCategory: ICategory = {
                        id: category.id,
                        icons: category.icons.map((image) => {
                            return {
                                url: image.url,
                                height: image.height,
                                width: image.width,
                            }
                        }),
                        name: category.name,
                    }

                    return iCategory
                }
            )

            return categories
        } else {
            throw json
        }
    } catch (error) {
        console.log('categoriesFetchApi - error -> ', error)
        throw error
    }
}

export { categoriesFetchApi }
