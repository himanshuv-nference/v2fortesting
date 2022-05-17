import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core"
import OpenSeaDragon from "openseadragon";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/styles'

const viewerStyles = makeStyles({

    buttons:{
        margin: "auto", marginBottom: "20px", position: "absolute",
        bottom: "-10px",
        left: "42%",
        backgroundColor: '#dbd6d3',
        borderRadius: '5px',
        ['@media (max-width:780px)']: {
            display:'none',
            position: "absolute",
            left: "30%",
            bottom: "-20px",
        },
    }
  })
  
export default function SeaDragonViewer(props) {
    const { src } = props;
    const styles = viewerStyles()

    const [viewer, setViewer] = useState(null);
    useEffect(() => {
        if (src && viewer) {
            viewer.open(src);
        }
    }, [src]);
    const InitOpenseadragon = () => {
        viewer && viewer.destroy();
        setViewer(
            OpenSeaDragon({
                id: "openSeaDragon",
                tileSources: {
                    type: 'image',
                    url: src,
                },
                // prefixUrl : "../../../home/paraggoyal/proteomics/ui/src/components/IHC/Image/OpenSeaDragonImages/",
                zoomInButton: "zoomInButton",
                zoomOutButton: "zoomOutButton",
                homeButton: "homeButton",
                fullPageButton: "",

                // navImages : {
                //     zoomIn : "zoom",
                // },
                // animationTime: 0.5,
                // blendTime: 0.1,
                // constrainDuringPan: true,
                // maxZoomPixelRatio: 2,
                minZoomLevel: 1,
                visibilityRatio: 1,
                // zoomPerScroll: 2
            })
        );
    };
    useEffect(() => {
        InitOpenseadragon();
        return () => {
            viewer && viewer.destroy();
        };
    }, [src]);
    return (
        <>
            <div style={{ paddingTop: "70%", width: "90%", height: '100%', margin: "10px" }}>
                <div
                    id="openSeaDragon"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                >
                </div>
                <div className={styles.buttons}>
                    <IconButton id="zoomInButton" ><ZoomInIcon /></IconButton>
                    <IconButton id="zoomOutButton" ><ZoomOutIcon /></IconButton>
                    <IconButton id="homeButton" ><AutorenewIcon /></IconButton>
                </div>
            </div>
        </>
    );


    // return (
    //     <>
    //         {loading ? null :
    //             <div>
    //                 <Skeleton variant="rect" width="100%">
    //                     <div style={{ height: 400 }} />
    //                 </Skeleton>
    //             </div>
    //         }
    //         {/* <img
    //             key={src}
    //             src={src}
    //             width={'90%'}
    //             height={'90%'}
    //             loading="lazy"
    //             style={loading ? {} : {display: 'none'}}
    //             onLoad={() => setLoading(true)}
    //         /> */}
    //         <div>
    //             <OpenSeadragon
    //                 tileSources = {
    //                     type = 'image',
    //                     url = src
    //                 }
    //             />
    //         </div>
    //         {/* <div >
    //             {!!src && (<ReactImageZoom
    //             width = {600}
    //             height = {600}
    //             img = {src}
    //             zoomWidth = {600}
    //             zoomPosition = {"left"} />)}
    //         </div> */}
    //     </>
    // )
}