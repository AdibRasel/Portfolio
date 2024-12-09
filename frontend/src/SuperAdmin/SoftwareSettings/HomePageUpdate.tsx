import { HomePageInfoSeeAllDetails, updateHomePageInfo } from "SuperAdmin/SuperAdminAPIService/SuperAdminAPIService";
import SuperAdminLayout from "SuperAdmin/SuperAdminLayout/SuperAdminLayout";
import SettingsNav from "SuperAdmin/SuperAdminNav/SettingsNav";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  useParams } from "react-router-dom";


interface HomePageData {
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

const HomePageUpdate: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<HomePageData | null>(null);
    const [error, setError] = useState<unknown | null>(null);
    const [formData, setFormData] = useState<Partial<HomePageData>>({});
    const [updateStatus, setUpdateStatus] = useState<string | null>(null);
    const [previewImages, setPreviewImages] = useState<{ [key: string]: string }>({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await HomePageInfoSeeAllDetails();
                if (response?.Data?.data?.data && response.Data.data.data.length > 0) {
                    setData(response.Data.data.data[0]);
                    setFormData(response.Data.data.data[0]);
                } else {
                    setError('Unexpected response structure');
                    console.error('Unexpected response structure:', response);
                }
            } catch (err) {
                setError(err);
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, [field]: reader.result as string }));
                setPreviewImages((prev) => ({ ...prev, [field]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const PostBody = {
                SuperAdminID: formData.SuperAdminID,
                AuthorName: formData.AuthorName,
                Title: formData.Title,
                Logo: formData.Logo,
                LogoInfoImage: formData.LogoInfoImage,
                SliderOne: formData.SliderOne,
                SliderTwo: formData.SliderTwo,
                SliderThree: formData.SliderThree,
                FacebookURL: formData.FacebookURL,
                GithubURL: formData.GithubURL,
                LinkdinURL: formData.LinkdinURL,
                GmailAddressOne: formData.GmailAddressOne,
                GmailAddressTwo: formData.GmailAddressTwo,
                PhoneNumberOne: formData.PhoneNumberOne,
                PhoneNumberTwo: formData.PhoneNumberTwo,
                FooterText: formData.FooterText,
            };
            const response = await updateHomePageInfo(PostBody, id);
            if (response?.status === "Update Success") {
                setUpdateStatus("Update successful!");
                // navigate('/SoftwareSettings/HomePageSettings');
                // setInterval(navigatePage, intervalTime);

            } else {
                setUpdateStatus("Update failed. Please try again.");
            }
        } catch (err) {
            setUpdateStatus(`Error: ${err instanceof Error ? err.message : "Unknown error"}`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error instanceof Error ? error.message : 'Something went wrong'}</p>;

    return (
        <SuperAdminLayout>
            <SettingsNav />

            <Card border="dark" className="border my-2 p-3">
                <Card.Title className="text-center">Update Home Page Settings</Card.Title>

                {updateStatus && <p className={`alert ${updateStatus.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{updateStatus}</p>}

                <Form onSubmit={handleSubmit}>

                    {/* Author Name start  */}
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Author Name</h4>
                        <Form.Control
                            type="text"
                            name="AuthorName"
                            value={formData.AuthorName || ""}
                            onChange={(e) => setFormData({ ...formData, AuthorName: e.target.value })}
                        />
                    </Form.Group>
                    {/* Author Name end  */}


                    {/* Title start  */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Title</h4>
                        <Form.Control
                            type="text"
                            name="Title"
                            value={formData.Title || ""}
                            onChange={(e) => setFormData({ ...formData, Title: e.target.value })}
                        />
                    </Form.Group>
                    {/* Title end  */}

                    {/* Logo start */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Logo</h4>
                        <Form.Control
                            type="file"
                            name="Logo"
                            onChange={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>, "Logo")}
                        />
                        {formData.Logo && (
                            <div className="row">
                                <div className="col-6">
                                    <p>Old Logo</p>
                                    <img className="rounded" src={data?.Logo} width={200} />
                                </div>
                                
                                
                                <div className="col-6">
                                    <p>New Logo Preview</p>
                                    <img className="rounded" src={previewImages.Logo} width={250} />
                                </div>
                            </div>
                        )}
                        <span>Logo Size:- Width: 320px, Height: 150px</span>
                    </Form.Group>
                    {/* Logo Image end */}

                    {/* Logo Info Image start */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Logo Info Image</h4>
                        <Form.Control
                            type="file"
                            name="LogoInfoImage"
                            onChange={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>, "LogoInfoImage")}
                        />
                        {formData.LogoInfoImage && (
                            <div className="row">
                                <div className="col-6">
                                    <p>Old logo info</p>
                                    <img className="rounded" src={data?.LogoInfoImage} width={350} />
                                </div>
                                
                                
                                <div className="col-6">
                                    <p>New logo info Preview</p>
                                    <img className="rounded" src={previewImages.LogoInfoImage} width={350} />
                                </div>
                            </div>
                        )}
                        <span>Logo Info Size:- Width: 725px, Height: 90px</span>
                    </Form.Group>
                    {/* Logo Info Image end */}



                    {/* User Link Start  */}
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Facebook URL</h4>
                        <Form.Control
                            type="text"
                            name="FacebookURL"
                            value={formData.FacebookURL || ""}
                            onChange={(e) => setFormData({ ...formData, FacebookURL: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Github URL</h4>
                        <Form.Control
                            type="text"
                            name="GithubURL"
                            value={formData.GithubURL || ""}
                            onChange={(e) => setFormData({ ...formData, GithubURL: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Linkdin URL</h4>
                        <Form.Control
                            type="text"
                            name="LinkdinURL"
                            value={formData.LinkdinURL || ""}
                            onChange={(e) => setFormData({ ...formData, LinkdinURL: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Gmail Address One</h4>
                        <Form.Control
                            type="text"
                            name="GmailAddressOne"
                            value={formData.GmailAddressOne || ""}
                            onChange={(e) => setFormData({ ...formData, GmailAddressOne: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Gmail Address Two</h4>
                        <Form.Control
                            type="text"
                            name="GmailAddressTwo"
                            value={formData.GmailAddressTwo || ""}
                            onChange={(e) => setFormData({ ...formData, GmailAddressTwo: e.target.value })}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Phone Number One</h4>
                        <Form.Control
                            type="text"
                            name="PhoneNumberOne"
                            value={formData.PhoneNumberOne || ""}
                            onChange={(e) => setFormData({ ...formData, PhoneNumberOne: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Phone Number Two</h4>
                        <Form.Control
                            type="text"
                            name="PhoneNumberTwo"
                            value={formData.PhoneNumberTwo || ""}
                            onChange={(e) => setFormData({ ...formData, PhoneNumberTwo: e.target.value })}
                        />
                    </Form.Group>
                    {/* User Link end  */}





                    {/* Slider One start */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Slider One</h4>
                        <Form.Control
                            type="file"
                            name="SliderOne"
                            onChange={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>, "SliderOne")}
                        />
                        {formData.SliderOne && (
                           
                            <div className="row">
                                <div className="col-6">
                                    <p>Old Slider One</p>
                                    <img className="rounded" src={data?.SliderOne} width={400} />
                                </div>
                                
                                
                                <div className="col-6">
                                    <p>Slider One Preview</p>
                                    <img className="rounded" src={previewImages.SliderOne} width={400} />
                                </div>
                            </div>
                        )}
                        <span>Slider Size:- Width: 750px, Height: 420px</span>
                    </Form.Group>
                    {/* Slider One end */}

                    {/* Slider Two start */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Slider Two</h4>
                        <Form.Control
                            type="file"
                            name="SliderTwo"
                            onChange={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>, "SliderTwo")}
                        />
                        {formData.SliderTwo && (
                           
                            <div className="row">
                                <div className="col-6">
                                    <p>Old Slider Two</p>
                                    <img className="rounded" src={data?.SliderTwo} width={400} />
                                </div>
                                
                                
                                <div className="col-6">
                                    <p>Slider Two Preview</p>
                                    <img className="rounded" src={previewImages.SliderTwo} width={400} />
                                </div>
                            </div>
                        )}
                        <span>Slider Size:- Width: 750px, Height: 420px</span>
                    </Form.Group>
                    {/* Slider Two end */}

                    {/* Slider Three start */}
                    <Form.Group className="mb-3  border rounded p-3">
                        <h4>Slider Three</h4>
                        <Form.Control
                            type="file"
                            name="SliderThree"
                            onChange={(e) => handleImageUpload(e as React.ChangeEvent<HTMLInputElement>, "SliderThree")}
                        />
                        {formData.SliderThree && (
                           
                            <div className="row">
                                <div className="col-6">
                                    <p>Old Slider Three</p>
                                    <img className="rounded" src={data?.SliderThree} width={400} />
                                </div>
                                
                                
                                <div className="col-6">
                                    <p>Slider Three Preview</p>
                                    <img className="rounded" src={previewImages.SliderThree} width={400} />
                                </div>
                            </div>
                        )}
                        <span>Slider Size:- Width: 750px, Height: 420px</span>
                    </Form.Group>
                    {/* Slider Three end */}


                    {/* Footer Text start  */}
                    <Form.Group className="mb-3 border rounded p-3 ">
                        <h4>Footer Text</h4>
                        <Form.Control
                            type="text"
                            name="FooterText"
                            value={formData.FooterText || ""}
                            onChange={(e) => setFormData({ ...formData, FooterText: e.target.value })}
                        />
                    </Form.Group>
                    {/* Footer Text end  */}

                    <Button variant="success" type="submit" disabled={loading}>
                        {loading ? 'Updating...' : 'Update'}
                    </Button>
                </Form>
            </Card>
        </SuperAdminLayout>
    );
};

export default HomePageUpdate;
