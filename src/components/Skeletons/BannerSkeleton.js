import React from 'react';
import { ColorRing } from 'react-loader-spinner';

function BannerSkeleton() {
    return (
        <div className="bannerSkeletons-Wrapper">
            <ColorRing
                visible={true}
                height="50"
                width="50"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#35a7a7', '#0c1de5e8', '#e52954', '#687783', '#1d734b']}
            />
            <h2>Banner data is loading</h2>;
        </div>
    );
}

export default BannerSkeleton;