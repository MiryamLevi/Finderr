import { useEffect, useState } from "react";
// import ImageGallery from "react-image-gallery";

export const GigSlideshowImage = ({ gigId }) => {
    const [images, setImages] = useState(null)
    useEffect(() => {
        loudImages()
    }, [gigId])

    function loudImages() {
        const gigImages = [
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/9377852/original/7fa1ab489ad31ef89c2f5c7eea6870cadd4fe27d/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/9377852/original/45b0a9df0fe5a9c5020b0593c41f5f8a3b507677/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/9377852/original/e196772f6540fda916fc62229d3a04d0eb197855/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20221030/bruce_logo_design_5_fa54nr.jpg",
            "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20221030/bruce_logo_design_4_u16c5j.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ade8a61edce1c02c615197e2a6834afc-1706018528/jessicanehme_2aa/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/781e548e47cadcd319471fb155cbb2ac-1703485147/rmprim2ca/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c45b72d761ec0d510b11703f0ff3e536-1702744598/lpmania2b/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/69b8bcc51aa446562a9675a035c828eb-1702171002/hanssc30a/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ab29ba4183d787198ba53d2c5fb4f1b5-1702273493/mandyturner1b/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/8c0dbc3363760b03c90c2f315c97c5d3-1702144356/kenzochuck2/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/031f3a44786b7262501c096ceb7cc488-1701615867/combarrica/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a87aab32616cc751bd94f34abf72524e-1700317133/tazvisuals2b/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/87b259738c68cbd9c2ded867d1f975e9-1699372008/romerolc2/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/581428554416be6272184cdbb7c22ae9-1699361992/lemarchefka2d/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/d6d81dced0cd8567bf9994e23ac94226-1697520571/carolynfludd_Br4/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/11ac87a4408f2391e4d5259c897fbe42-1698812048/umakam92b/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f396dcd1e7b7f6759fb36d75c2b4dbcd-1697630072/negri_chris/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1cdefae85fb42262de4956e7e82873ff-1697464266/madiiie3/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg",
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3e6bdf48ba17fbd226eca741c7a03e76-1696503783/davidlm6b2a/design-an-awesome-vintage-or-retro-logo-88d601db-60fd-43f1-9778-0bd57e615805.jpg"
        ]
        setImages(gigImages.map(img=>({original:img, thumbnail: img}))
        )
    }

    if(!images) return <div>Loading...</div>
    return (
        <>
            <ImageGallery items={images} showPlayButton={false}
                slideDuration={300} />
        </>
    )
}

