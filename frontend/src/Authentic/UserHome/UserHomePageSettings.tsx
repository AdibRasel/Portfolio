import { SuperAdminCretedHomeAllInfo, UserHomeAllInfo } from "ApiService/UserHomeApiService/UserHomeApiService";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import UserHomeLayout from "./UserHomeLayout";


interface HomePageData {
    _id: string;
    SuperAdminID: string;
    AuthorName: string;
    Title: string;
    Logo: string;
    LogoInfoImage: string;
    SliderOne: string;
    SliderTwo: string;
    SliderThree: string;
    FacebookURL: string;
    GithubURL: string;
    LinkdinURL: string;
    GmailAddressOne: string;
    GmailAddressTwo: string;
    PhoneNumberOne: string;
    PhoneNumberTwo: string;
    FooterText: string;
    CreateDate: string;
}

const UserHomePageSettings: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);  // Loading starts as true
    const [data, setData] = useState<HomePageData | null>(null);
    const [error, setError] = useState<unknown | null>(null);
    
    
    
    
    
    
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);  // Set loading true at the beginning
    //         try {
    //             const HomePageAllInfos = await UserHomeAllInfo(); 
    //             const SuperAdminCretedHomeAllInfos = await SuperAdminCretedHomeAllInfo(); 
                
                
                
                
                
                
                
    //             // ইউজারের ডাটা যাচাই করবে, যদি না পাই বাই ডিপোল্ড সুপার এডমিন ক্রিয়েট করা ডাটা পাবে।
    //             // ইউজার ক্রিয়েট করা ডাটা খুজবে
    //             if (HomePageAllInfos.UserHomeinfo?.data?.data[0]) {
    //                 setData(HomePageAllInfos.UserHomeinfo?.data?.data[0]); // Store the data
    //             }
                
    //             // সুপার এডমিন ক্রিয়েট করা ডাটা খুজবে। 
    //             else if (SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data?.[0]) {
    //                 setData(SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data?.[0]); // Store the data
    //             }

    //             else {
    //                 setError('Unexpected response structure');
    //                 console.error('Unexpected response structure:', HomePageAllInfos);
    //             }
              
              
              
              
    //             // if (SuperAdminCretedHomeAllInfos.UserHomeinfo?.data?.data[0]) {
    //             //     setData(SuperAdminCretedHomeAllInfos.UserHomeinfo?.data?.data[0]); // Store the data
    //             // }
            
            
            
            
    //             // if (HomePageAllInfos.UserHomeinfo?.data?.data[0]) {
    //             //     setData(HomePageAllInfos.UserHomeinfo?.data?.data[0]); // Store the data
    //             // } else {
    //             //     setError('Unexpected response structure');
    //             //     console.error('Unexpected response structure:', HomePageAllInfos);
    //             // }




    //         } catch (err) {
    //             setError(err); // Capture any error
    //             console.error('Error fetching data:', err);
    //         } finally {
    //             setLoading(false); // Loading complete
    //         }
    //     };

    //     fetchData();
    // }, []);







    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);  // Start by setting loading state to true
            try {
                // Fetch user and admin data in parallel
                const [HomePageAllInfos, SuperAdminCretedHomeAllInfos] = await Promise.all([
                    UserHomeAllInfo(),
                    SuperAdminCretedHomeAllInfo()
                ]);
    
                // Safely check if user data exists using optional chaining
                const userHomeData = HomePageAllInfos?.UserHomeinfo?.data?.data?.[0];
                const adminHomeData = SuperAdminCretedHomeAllInfos?.UserHomeinfo?.data?.data?.[0];
    
                if (userHomeData) {
                    setData(userHomeData);
                } else if (adminHomeData) {
                    setData(adminHomeData);
                } else {
                    setError('No valid data found from user or admin');
                    console.error('No valid data:', HomePageAllInfos, SuperAdminCretedHomeAllInfos);
                }
            } catch (err) {
                setError(err); // Capture any error
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false); // Set loading state to false after completion
            }
        };
    
        fetchData(); // Call the async function
    
    }, []); // Empty dependency array ensures this runs only once after initial render
    











    if (error) return <p>Error: {error instanceof Error ? error.message : 'Something went wrong'}</p>; // Display error message
    if (!data) return <p>No data available</p>; // If no data is available

    return (
        <>
        <UserHomeLayout>

            <Card border="dark" className="border my-2 p-3">
                <Card.Title className="text-center">Home Page Settings</Card.Title>

                {loading && (
                    <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

                <p>Author Name: {data.AuthorName}</p>
                <p>Title: {data.Title}</p>
                <p>Logo: <img src={data.Logo} alt="Logo" width={100} />   Logo Size:- Width: 320px, Height: 150px</p>
                <p>Logo Info Image: <img src={data.LogoInfoImage} alt="Logo Info" width={100} /> Logo Info Size:- Width: 725px, Height: 90px</p>
                <p>Slider One: <img src={data.SliderOne} alt="Slider One" width={100} /> Slider Size:- Width: 750px, Height: 420px</p>
                <p>Slider Two: <img src={data.SliderTwo} alt="Slider Two" width={100} /> Slider Size:- Width: 750px, Height: 420px</p>
                <p>Slider Three: <img src={data.SliderThree} alt="Slider Three" width={100} /> Slider Size:- Width: 750px, Height: 420px</p>
                <p>Facebook URL: <a href={data.FacebookURL}>{data.FacebookURL}</a></p>
                <p>Github URL: <a href={data.GithubURL}>{data.GithubURL}</a></p>
                <p>LinkedIn URL: <a href={data.LinkdinURL}>{data.LinkdinURL}</a></p>
                <p>Gmail Address One: {data.GmailAddressOne}</p>
                <p>Gmail Address Two: {data.GmailAddressTwo}</p>
                <p>Phone Number One: {data.PhoneNumberOne}</p>
                <p>Phone Number One: {data.PhoneNumberTwo}</p>
                <p>Footer Text: {data.FooterText}</p>
                <p>Create Date: {new Date(data.CreateDate).toLocaleDateString()}</p>

                {/* <button className="btn btn-success" >Edit</button> */}
                <NavLink className="TopBarNavLink" to={"/UserHomePageUpdate/" + data?._id}>
                    <u className='NavBar'>Edit</u>
                </NavLink>
            </Card>
            </UserHomeLayout>
        </>
    );
};

export default UserHomePageSettings;
