
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TIMELINE_EVENTS, TESTIMONIALS, BENEFITS, FAQ_ITEMS, BERITA_ITEMS, DEFAULT_PROFILE_DATA } from '../constants';
import type { TimelineEvent, Testimonial, Benefit, FaqItem, BeritaItem, ProfileData } from '../types';

const inputClass = "w-full px-4 py-2 rounded-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green transition-shadow bg-white";
const labelClass = "block text-sm font-medium text-secondary-text mb-1";

// Reusable Modal for Add/Edit Forms
const FormModal: React.FC<{
    isOpen: boolean;
    mode: 'add' | 'edit';
    itemType: string | null;
    itemData: any;
    onClose: () => void;
    onSave: (data: any) => void;
}> = ({ isOpen, mode, itemType, itemData, onClose, onSave }) => {
    const [formData, setFormData] = useState(itemData);

    useEffect(() => {
        setFormData(itemData);
    }, [itemData]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // This is a simulation. In a real app, you'd handle file uploads properly.
        const { name } = e.target;
        if (e.target.files && e.target.files.length > 0) {
            setFormData((prev: any) => ({ ...prev, [name]: e.target.files![0].name }));
            alert(`Image "${e.target.files[0].name}" selected (simulation). The path is a placeholder.`);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const renderFormFields = () => {
        switch (itemType) {
            case 'berita':
                return (
                    <>
                        <div><label className={labelClass}>Title</label><input type="text" name="title" value={formData.title || ''} onChange={handleChange} required className={inputClass} /></div>
                        <div><label className={labelClass}>Excerpt</label><textarea name="excerpt" value={formData.excerpt || ''} onChange={handleChange} required className={inputClass} rows={3}></textarea></div>
                        <div><label className={labelClass}>Full Content</label><textarea name="content" value={formData.content || ''} onChange={handleChange} required className={inputClass} rows={5}></textarea></div>
                        <div><label className={labelClass}>Image</label><input type="file" name="imageUrl" onChange={handleFileChange} className="w-full text-sm text-secondary-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent-green/10 file:text-accent-green hover:file:bg-accent-green/20"/></div>
                    </>
                );
            case 'testimonials':
                 return (
                    <>
                        <div><label className={labelClass}>Name</label><input type="text" name="name" value={formData.name || ''} onChange={handleChange} required className={inputClass} /></div>
                        <div><label className={labelClass}>Title</label><input type="text" name="title" value={formData.title || ''} onChange={handleChange} required className={inputClass} /></div>
                        <div><label className={labelClass}>Quote</label><textarea name="quote" value={formData.quote || ''} onChange={handleChange} required className={inputClass} rows={3}></textarea></div>
                        <div><label className={labelClass}>Photo</label><input type="file" name="photoUrl" onChange={handleFileChange} className="w-full text-sm text-secondary-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent-green/10 file:text-accent-green hover:file:bg-accent-green/20"/></div>
                    </>
                );
            case 'timeline':
                 return (
                    <>
                        <div><label className={labelClass}>Date</label><input type="text" name="date" value={formData.date || ''} onChange={handleChange} required className={inputClass} placeholder="e.g., 1 - 10 Januari"/></div>
                        <div><label className={labelClass}>Title</label><input type="text" name="title" value={formData.title || ''} onChange={handleChange} required className={inputClass} placeholder="e.g., Pendaftaran"/></div>
                    </>
                );
            case 'faqs':
                 return (
                     <>
                        <div><label className={labelClass}>Question</label><input type="text" name="question" value={formData.question || ''} onChange={handleChange} required className={inputClass} /></div>
                        <div><label className={labelClass}>Answer</label><textarea name="answer" value={formData.answer || ''} onChange={handleChange} required className={inputClass} rows={4}></textarea></div>
                    </>
                );
            case 'benefits':
                 return (
                     <>
                        <div><label className={labelClass}>Title</label><input type="text" name="title" value={formData.title || ''} onChange={handleChange} required className={inputClass} /></div>
                        <div><label className={labelClass}>Description</label><textarea name="description" value={formData.description || ''} onChange={handleChange} required className={inputClass} rows={3}></textarea></div>
                        <p className="text-xs text-secondary-text">Note: The icon cannot be changed from this dashboard.</p>
                    </>
                );
            default:
                return <p>Form not available.</p>;
        }
    };

    const title = `${mode === 'edit' ? 'Edit' : 'Add New'} ${itemType ? itemType.charAt(0).toUpperCase() + itemType.slice(1) : ''}`;

    return (
         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 animate-fade-in">
            <div className="bg-white rounded-xl shadow-google border border-border-gray w-full max-w-2xl max-h-full overflow-y-auto">
                <div className="p-6 border-b flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-primary-text">{title}</h3>
                    <button onClick={onClose} className="text-secondary-text hover:text-primary-text">&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        {renderFormFields()}
                    </div>
                    <div className="p-6 border-t bg-light-gray-bg flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="bg-gray-200 text-secondary-text font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                         <button type="submit" className="bg-accent-green text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                            {mode === 'edit' ? 'Save Changes' : 'Add Item'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Simplified Presentational Component for Management Sections
const ManagementSection: React.FC<{ title: string; onAddNew?: () => void; children: React.ReactNode }> = ({ title, onAddNew, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-google border border-border-gray">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-primary-text tracking-tight">{title}</h2>
            {onAddNew && (
                <button 
                    onClick={onAddNew}
                    className="bg-accent-green text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all text-sm"
                >
                    Add New
                </button>
            )}
        </div>
        <div className="overflow-x-auto">
            {children}
        </div>
    </div>
);


const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();

    // Data states
    const [beritaItems, setBeritaItems] = useState<BeritaItem[]>(BERITA_ITEMS);
    const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
    const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(TIMELINE_EVENTS);
    const [faqItems, setFaqItems] = useState<FaqItem[]>(FAQ_ITEMS);
    const [benefits, setBenefits] = useState<Benefit[]>(BENEFITS);
    const [profileData, setProfileData] = useState<ProfileData>(() => {
        const storedProfile = localStorage.getItem('profileData');
        return storedProfile ? JSON.parse(storedProfile) : DEFAULT_PROFILE_DATA;
    });
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileMessage, setProfileMessage] = useState('');


    // Modal state
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        mode: 'add' | 'edit';
        itemType: string | null;
        itemData: any;
        itemIndex: number | null;
    }>({ isOpen: false, mode: 'add', itemType: null, itemData: {}, itemIndex: null });

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };
    
    const handleDelete = (index: number, itemType: string) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        const setters: { [key: string]: React.Dispatch<React.SetStateAction<any[]>> } = {
            berita: setBeritaItems,
            testimonials: setTestimonials,
            timeline: setTimelineEvents,
            faqs: setFaqItems,
            benefits: setBenefits,
        };
        setters[itemType]?.((prevItems) => prevItems.filter((_, i) => i !== index));
    };
    
    const handleOpenModal = (mode: 'add' | 'edit', itemType: string, itemData = {}, itemIndex: number | null = null) => {
        setModalState({ isOpen: true, mode, itemType, itemData, itemIndex });
    };

    const handleCloseModal = () => {
        setModalState({ isOpen: false, mode: 'add', itemType: null, itemData: {}, itemIndex: null });
    };

    const handleSave = (formData: any) => {
        const { mode, itemType, itemIndex } = modalState;
        
        const setters: { [key: string]: React.Dispatch<React.SetStateAction<any[]>> } = {
            berita: setBeritaItems,
            testimonials: setTestimonials,
            timeline: setTimelineEvents,
            faqs: setFaqItems,
            benefits: setBenefits,
        };
        const setter = setters[itemType!];

        if (mode === 'edit' && itemIndex !== null) {
            setter((prevItems) => prevItems.map((item, index) => 
                index === itemIndex ? { ...item, ...formData } : item
            ));
        } else {
            if (itemType === 'berita' && !formData.id) formData.id = Date.now();
            if (itemType === 'benefits' && !formData.icon) formData.icon = <div className="h-8 w-8 bg-gray-300 rounded-full" />;
            setter((prevItems) => [...prevItems, formData]);
        }
        handleCloseModal();
    };

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };
    
    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        setProfileMessage('');
        
        if (newPassword && newPassword !== confirmPassword) {
            setProfileMessage('New passwords do not match.');
            return;
        }

        localStorage.setItem('profileData', JSON.stringify(profileData));
        
        let message = 'Profile updated successfully.';
        if (newPassword) {
            // In a real app, you'd make an API call to update the password
            message += ' Password changed (simulation).';
            setNewPassword('');
            setConfirmPassword('');
        }
        
        setProfileMessage(message);
        setTimeout(() => setProfileMessage(''), 3000); // Clear message after 3 seconds
    };

    return (
        <div className="bg-light-gray-bg py-20 min-h-screen">
            <FormModal {...modalState} onClose={handleCloseModal} onSave={handleSave} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-10">
                     <h1 className="text-4xl font-bold text-primary-text tracking-tight">Admin Dashboard</h1>
                     <button onClick={handleLogout} className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Logout
                    </button>
                </div>
                
                <div className="space-y-8">
                    <ManagementSection title="Manage Profile">
                        <form onSubmit={handleProfileUpdate} className="space-y-4">
                             {profileMessage && <p className="text-sm text-accent-green">{profileMessage}</p>}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className={labelClass}>Full Name</label><input type="text" name="fullName" value={profileData.fullName} onChange={handleProfileChange} required className={inputClass} /></div>
                                <div><label className={labelClass}>Email Address</label><input type="email" name="email" value={profileData.email} onChange={handleProfileChange} required className={inputClass} /></div>
                                <div><label className={labelClass}>Primary Phone</label><input type="text" name="phone1" value={profileData.phone1} onChange={handleProfileChange} required className={inputClass} /></div>
                                <div><label className={labelClass}>Secondary Phone</label><input type="text" name="phone2" value={profileData.phone2} onChange={handleProfileChange} required className={inputClass} /></div>
                                <div><label className={labelClass}>New Password</label><input type="password" name="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} className={inputClass} placeholder="Leave blank to keep current"/></div>
                                <div><label className={labelClass}>Confirm New Password</label><input type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className={inputClass} /></div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="bg-accent-green text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </ManagementSection>


                    <ManagementSection title="Manage Berita" onAddNew={() => handleOpenModal('add', 'berita')}>
                         <table className="w-full text-left text-sm text-secondary-text">
                            <thead className="bg-gray-50 text-xs uppercase"><tr className="text-left"><th className="px-6 py-3">Title</th><th className="px-6 py-3">Excerpt</th><th className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>
                                {beritaItems.map((item, index) => (
                                    <tr key={item.id} className="bg-white border-b"><td className="px-6 py-4 font-medium text-primary-text">{item.title}</td><td className="px-6 py-4 truncate max-w-sm">{item.excerpt}</td><td className="px-6 py-4 text-right space-x-2 whitespace-nowrap"><button onClick={() => handleOpenModal('edit', 'berita', item, index)} className="font-medium text-primary-green hover:underline">Edit</button><button onClick={() => handleDelete(index, 'berita')} className="font-medium text-red-600 hover:underline">Delete</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </ManagementSection>

                    <ManagementSection title="Manage Testimonials" onAddNew={() => handleOpenModal('add', 'testimonials')}>
                        <table className="w-full text-left text-sm text-secondary-text">
                            <thead className="bg-gray-50 text-xs uppercase"><tr><th className="px-6 py-3">Name</th><th className="px-6 py-3">Title</th><th className="px-6 py-3">Quote</th><th className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>
                                {testimonials.map((item, index) => (
                                    <tr key={index} className="bg-white border-b"><td className="px-6 py-4 font-medium text-primary-text">{item.name}</td><td className="px-6 py-4">{item.title}</td><td className="px-6 py-4 truncate max-w-xs">{item.quote}</td><td className="px-6 py-4 text-right space-x-2 whitespace-nowrap"><button onClick={() => handleOpenModal('edit', 'testimonials', item, index)} className="font-medium text-primary-green hover:underline">Edit</button><button onClick={() => handleDelete(index, 'testimonials')} className="font-medium text-red-600 hover:underline">Delete</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </ManagementSection>

                    <ManagementSection title="Manage Benefits" onAddNew={() => handleOpenModal('add', 'benefits')}>
                        <table className="w-full text-left text-sm text-secondary-text">
                            <thead className="bg-gray-50 text-xs uppercase"><tr><th className="px-6 py-3">Title</th><th className="px-6 py-3">Description</th><th className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>
                                {benefits.map((item, index) => (
                                    <tr key={index} className="bg-white border-b"><td className="px-6 py-4 font-medium text-primary-text">{item.title}</td><td className="px-6 py-4 truncate max-w-sm">{item.description}</td><td className="px-6 py-4 text-right space-x-2 whitespace-nowrap"><button onClick={() => handleOpenModal('edit', 'benefits', item, index)} className="font-medium text-primary-green hover:underline">Edit</button><button onClick={() => handleDelete(index, 'benefits')} className="font-medium text-red-600 hover:underline">Delete</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </ManagementSection>

                    <ManagementSection title="Manage Timeline" onAddNew={() => handleOpenModal('add', 'timeline')}>
                         <table className="w-full text-left text-sm text-secondary-text">
                            <thead className="bg-gray-50 text-xs uppercase"><tr><th className="px-6 py-3">Date</th><th className="px-6 py-3">Title</th><th className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>
                                {timelineEvents.map((item, index) => (
                                    <tr key={index} className="bg-white border-b"><td className="px-6 py-4 font-medium text-primary-text">{item.date}</td><td className="px-6 py-4">{item.title}</td><td className="px-6 py-4 text-right space-x-2 whitespace-nowrap"><button onClick={() => handleOpenModal('edit', 'timeline', item, index)} className="font-medium text-primary-green hover:underline">Edit</button><button onClick={() => handleDelete(index, 'timeline')} className="font-medium text-red-600 hover:underline">Delete</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </ManagementSection>

                     <ManagementSection title="Manage FAQs" onAddNew={() => handleOpenModal('add', 'faqs')}>
                        <table className="w-full text-left text-sm text-secondary-text">
                            <thead className="bg-gray-50 text-xs uppercase"><tr><th className="px-6 py-3">Question</th><th className="px-6 py-3">Answer</th><th className="px-6 py-3 text-right">Actions</th></tr></thead>
                            <tbody>
                                {faqItems.map((item, index) => (
                                    <tr key={index} className="bg-white border-b"><td className="px-6 py-4 font-medium text-primary-text">{item.question}</td><td className="px-6 py-4 truncate max-w-xs">{item.answer}</td><td className="px-6 py-4 text-right space-x-2 whitespace-nowrap"><button onClick={() => handleOpenModal('edit', 'faqs', item, index)} className="font-medium text-primary-green hover:underline">Edit</button><button onClick={() => handleDelete(index, 'faqs')} className="font-medium text-red-600 hover:underline">Delete</button></td></tr>
                                ))}
                            </tbody>
                        </table>
                    </ManagementSection>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
