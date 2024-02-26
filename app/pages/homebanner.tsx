import PostsPage from "../components/Models/Banners";
import Banners from "../components/Models/Banners";
import React from 'react';

interface HomeBanner {
  mainBannerId: number;
  title: string;
  // Add other properties as needed
}

interface HomeBannerProps {
  homebanner: HomeBanner[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ homebanner }) => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-column gap-2 md:flex-row items-center justify-evenly">
        <div>all the values here......</div>
			  <div>
			
          {homebanner.map(banner => (
            <div key={banner.mainBannerId}>
              <a className="">
                <h3>{banner.title}</h3>
              </a>
            </div>
		  ))}
		
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://api.testvalley.kr/main-banner/all");
    const data: HomeBanner[] = await res.json();
	console.log('Fetched data:', data);
	  
    return {
      props: { homebanner: data }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { homebanner: [] } // Return an empty array if there's an error
    };
  }
};

export default HomeBanner;