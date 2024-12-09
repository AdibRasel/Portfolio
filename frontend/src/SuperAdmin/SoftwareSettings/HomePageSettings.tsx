import { HomePageInfoSeeAllDetails } from "SuperAdmin/SuperAdminAPIService/SuperAdminAPIService";
import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout";
import SettingsNav from "SuperAdmin/SuperAdminNav/SettingsNav";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";


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

const HomePageSettings: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);  // Loading starts as true
    const [data, setData] = useState<HomePageData | null>(null);
    const [error, setError] = useState<unknown | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);  // Set loading true at the beginning
            try {
                const response = await HomePageInfoSeeAllDetails(); // Ensure the response matches ApiResponse type

                if (response?.Data?.data?.data && response.Data.data.data.length > 0) {
                    setData(response.Data.data.data[0]); // Store the data
                } else {
                    setError('Unexpected response structure');
                    console.error('Unexpected response structure:', response);
                }
            } catch (err) {
                setError(err); // Capture any error
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false); // Loading complete
            }
        };

        fetchData();
    }, []);

    if (error) return <p>Error: {error instanceof Error ? error.message : 'Something went wrong'}</p>; // Display error message
    if (!data) return <p>No data available</p>; // If no data is available

    return (
        <>
            <SuperAdminLayout>
                <SettingsNav />

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
                    <NavLink className="TopBarNavLink" to={"/SoftwareSettings/HomePageUpdate/" + data?._id}>
                        <u className='NavBar'>Edit</u>
                    </NavLink>
                </Card>
            </SuperAdminLayout>
        </>
    );
};

export default HomePageSettings;
