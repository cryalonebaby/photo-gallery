import { Flex } from '@chakra-ui/react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/new%20photo%2F44.jpg?alt=media&token=1d74432c-d8df-4959-93fb-d87c43278b03',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/new%20photo%2F22.jpg?alt=media&token=06232537-8616-46ad-80ec-0b97ebd4e1a2',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/new%20photo%2F33.jpg?alt=media&token=9900b0be-7e2e-4a3f-99fd-8e0af224ac84',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/new%20photo%2F55.jpg?alt=media&token=9df145fe-d861-478c-9cdb-f56a1c5d352c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F74.JPG?alt=media&token=beb77076-563d-479e-8f26-b79947d15a0b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F75.JPG?alt=media&token=a54079cf-efe2-4897-b8e6-df3be81f0e16',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F76.JPG?alt=media&token=9b6afc46-2b1b-4264-8133-1b545253ec41',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F77.JPG?alt=media&token=5dcd7a81-f2b8-46f7-a87c-2ec134ca0f7f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F78.JPG?alt=media&token=4d361bf3-a958-43b4-b401-2afc73008412',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F79.JPG?alt=media&token=77016d17-b0cd-42c8-958c-3e61b7ae8ba8',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F80.JPG?alt=media&token=c5dced90-b936-4797-8d68-670fe42abc5a',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F81.JPG?alt=media&token=6bed5399-d4d0-4b08-b1a7-b0b718f4109c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F33.JPG?alt=media&token=5663e7a0-28c3-451b-a43a-f1351ab4f9d0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F34.JPG?alt=media&token=6296e065-eb97-4094-b1aa-2995e03cd139',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F35.JPG?alt=media&token=4c9a6f8d-98ef-4f13-bc4a-ed064d1dbf53',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F36.JPG?alt=media&token=cc08cd8b-f55c-4968-aab3-a300de02e519',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F37.JPG?alt=media&token=9f5c9143-0836-41fb-ba97-0308b98dcd31',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F38.JPG?alt=media&token=c3a73f1d-b8e2-4b70-b878-a03ef56f8d97',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F39.JPG?alt=media&token=49df0c17-f37b-419d-8c64-015c52de9b9f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F40.JPG?alt=media&token=b1180b60-4470-40b8-8355-6a488b401d96',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F41.JPG?alt=media&token=e6d8b145-6a33-451e-926d-ee2063f17667',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F42.JPG?alt=media&token=aaa239e4-3881-416f-b81f-b429cb51be40',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F43.JPG?alt=media&token=52cc577e-f5d9-4782-9869-1a8418554179',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F45.JPG?alt=media&token=518c4b1e-06f8-43d5-86c8-11572936203d',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F47.JPG?alt=media&token=02cfeb38-743d-4c9e-a410-2e3d3f4c736c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F48.JPG?alt=media&token=682eb21a-a859-443f-a354-e88d037086c7',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F50.JPG?alt=media&token=ab5e9c9d-1d7e-44df-87d3-e54aa4487ec3',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F51.JPG?alt=media&token=012c4c13-4bfc-40b3-bfaf-438c08b733ad',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F54.JPG?alt=media&token=e54a7e92-cdd2-4800-a8c7-5ff778c018d7',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F55.JPG?alt=media&token=528af131-3a76-4dc9-b58f-63709e4d2eb2',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F56.JPG?alt=media&token=e539752b-26d8-4c34-8fd3-0468b73d52ff',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F57.JPG?alt=media&token=79e6bff3-6aba-4865-be42-ae3790845e41',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F58.JPG?alt=media&token=1d6c7ec9-82d8-4d3c-a492-69871c22277f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F59.JPG?alt=media&token=a123f635-19cb-4b3d-9486-b751f2cf1706',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F60.jpg?alt=media&token=f6538be4-edd1-42f3-9555-9b0f1d3b4e73',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F64.jpg?alt=media&token=b2f9e903-f874-4dc1-96cc-fe214e70bd94',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F65.JPG?alt=media&token=08a052c6-8944-4a22-b502-4959b691ecfc',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F66.jpg?alt=media&token=c1235db2-38fe-4a27-9015-674e1623d157',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F67.JPG?alt=media&token=8ca4ceb0-b9e1-4aa9-a089-f62d83bf2392',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F68.JPG?alt=media&token=033ab2fd-2705-44aa-9269-b4fcb80b25d0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F69.JPG?alt=media&token=8ed174ee-b758-4703-a2b8-655d5628377f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F70.JPG?alt=media&token=07bb7664-6d2b-4dce-ac3a-33cde5f64136',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F71.JPG?alt=media&token=53fc0048-ba65-40d6-95c9-7deefd4c1204',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F72.JPG?alt=media&token=2db0067b-1447-4d06-a5e7-6b8b94be74de',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F82.JPG?alt=media&token=26781d6b-68f7-41dc-a649-f2e80f6fd7d2',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F84.JPG?alt=media&token=5b8d3588-b1c8-4568-8977-70291a9c6fc4',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F85.JPG?alt=media&token=ddc8bcc8-faa1-4ec9-9621-a987c28f32e2',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F86.JPG?alt=media&token=89491377-e651-4869-99ac-008d138afd83',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F87.JPG?alt=media&token=09156873-f134-421d-819a-4eef641ab848',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F88.JPG?alt=media&token=9e59adba-6285-41e0-aaa6-bc8bf6922ed0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F89.jpg?alt=media&token=c2d40922-42bd-42d7-9985-ad010c170f78',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F90.JPG?alt=media&token=b6d5f17c-0aa3-4553-969c-4c2ee6a9b7d3',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F91.JPG?alt=media&token=441c54a7-1a93-482c-8cc4-96d0dcab40a2',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F92.JPG?alt=media&token=13afabd1-2b2d-4996-bb3b-6e8eb4894a52',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F93.JPG?alt=media&token=b6dc6dc4-cf95-4977-9130-b8466eddff93',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F96.JPG?alt=media&token=2f0c8d81-dd9b-40de-bd0b-f2574c265923',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F98.JPG?alt=media&token=e2c872b3-aea9-4f6c-94f6-24aaafac3834',
]

const SecondCollection = () => {  
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Ceramics Collection'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default SecondCollection