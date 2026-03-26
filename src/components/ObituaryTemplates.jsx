import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiScrollQuill } from 'react-icons/gi';
import '../styles/SubPages.scss';

const ObituaryTemplates = () => {
    const [isGenerated, setIsGenerated] = useState(false);
    const [showCopiedModal, setShowCopiedModal] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);
    const [lightCount, setLightCount] = useState(142);
    const [formData, setFormData] = useState({
        bikeName: '',
        bikeColor: '',
        bikeBrand: '',
        yearPurchased: '',
        yearStolen: '',
        neighborhood: '',
        milesRidden: '',
        lastLocation: ''
    });

    const handleCopy = (text) => {
        const footer = `\n\n—\nStolen Bike Closure\nProcessing the loss of your two-wheeled companion.\nstolenbikeclosure.com`;
        navigator.clipboard.writeText(text + footer);
        setShowCopiedModal(true);
        setTimeout(() => setShowCopiedModal(false), 3000);
    };

    const handlePrint = (text, title) => {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Print Obituary - ${title}</title>
                        <style>
                            body { font-family: 'Times New Roman', serif; padding: 2rem; line-height: 1.8; max-width: 800px; margin: 0 auto; font-size: 14pt; color: #000; }
                            h1 { text-align: center; font-size: 24pt; margin-bottom: 2rem; }
                            p { text-align: justify; }
                            .footer { margin-top: 4rem; text-align: center; font-family: 'Arial', sans-serif; font-size: 11pt; color: #555; }
                            .footer p { margin: 0.2rem 0; text-align: center; }
                        </style>
                    </head>
                    <body>
                        <h1>${title}</h1>
                        <p><em>"${text}"</em></p>
                        
                        <div class="footer">
                            <p style="margin-bottom: 0.5rem;">—</p>
                            <p><strong>Stolen Bike Closure</strong></p>
                            <p><em>Processing the loss of your two-wheeled companion.</em></p>
                            <p>stolenbikeclosure.com</p>
                        </div>
                        <script>
                            window.onload = () => {
                                window.print();
                                setTimeout(() => window.close(), 500);
                            }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleGenerate = (e) => {
        e.preventDefault();
        setIsGenerated(true);
    };

    const t1Text = `It is with a heavy heart that I announce the sudden and unceremonious departure of my trusted steed, ${formData.bikeName || 'your glorious steed'}. A loyal ${formData.bikeColor || 'colorful'} ${formData.bikeBrand || 'a good bike'}, taken from us between ${formData.yearPurchased || 'before'} and ${formData.yearStolen || 'recently'} outside ${formData.lastLocation || 'last resting place'} in ${formData.neighborhood || 'the neighborhood'}. It leaves behind a grieving U-lock, an empty space in the hallway, and a rider who will now have to re-evaluate the local bus schedule. May its gears never grind for its new 'owner'.`;

    const t2Text = `Farewell to my beautiful ${formData.bikeColor || 'colorful'} friend. Your ${formData.bikeBrand || 'a good bike'} frame cut through the wind like a hot knife through butter. Whoever took you better appreciate Shimano Ultegra shifting. We shared ${formData.milesRidden || 'many miles'} together. I hope you give them flat tires every day for the rest of their pathetic life. Rest in peace, ${formData.bikeName || 'your glorious steed'}, forever remembered in ${formData.neighborhood || 'the neighborhood'}.`;

    const t3Text = `To the person who stole my ${formData.bikeColor || 'colorful'} ${formData.yearPurchased || 'before'} ${formData.bikeBrand || 'a good bike'} from ${formData.lastLocation || 'last resting place'}: Congratulations. You've somehow managed to steal a bike that costs less than the bolt cutters you used. Enjoy the fact that the left pedal is permanently loose after ${formData.milesRidden || 'many miles'}. May it throw you into a bush at the earliest opportunity. Goodbye, ${formData.bikeName || 'your glorious steed'}.`;

    const t4Text = `${formData.bikeName || 'your glorious steed'}, a beloved ${formData.bikeColor || 'colorful'} ${formData.bikeBrand || 'a good bike'}, was tragically taken from us in ${formData.yearStolen || 'recently'}. Born in a ${formData.yearPurchased || 'before'} factory and raised on the streets of ${formData.neighborhood || 'the neighborhood'}, ${formData.bikeName || 'your glorious steed'} was known for a smooth cadence and a stubborn refusal to shift into the highest gear. It is survived by a lonely U-lock, a pair of clipping-in shoes with nowhere to go, and a very frustrated owner. In lieu of flowers, the family asks that you keep a sharp eye on Facebook Marketplace and report any suspiciously cheap listings.`;

    const t5Text = `It is with a heavy heart and a clenched fist that we announce the passing of ${formData.bikeName || 'your glorious steed'} into the hands of a complete stranger. A loyal companion for ${formData.milesRidden || 'many miles'}, ${formData.bikeName || 'your glorious steed'} was last seen near ${formData.lastLocation || 'last resting place'} being handled by someone who definitely doesn't know how to maintain a disc brake. While we hope ${formData.bikeName || 'your glorious steed'} finds peace, we hope the new "owner" finds nothing but a slipped chain on every uphill climb. A private viewing of the empty garage space will be held this evening.`;

    const t6Text = `${formData.bikeName || 'your glorious steed'} (${formData.yearPurchased || 'before'}–${formData.yearStolen || 'recently'}). A good ride. A better friend. Taken by a bolt cutter, but never forgotten by the pavement. May your tires never lose pressure in the Great Beyond, and may your thief's shins always find the pedals at high velocity.`;

    return (
        <div className="page">
            <div className="page__header">
                <h2>Obituary Templates</h2>
                <p>{isGenerated ? "Your personalized obituaries are ready to be published." : "Tell us about your ride so we can help you find the right words."}</p>
            </div>

            <AnimatePresence mode="wait">
                {!isGenerated ? (
                    <motion.div
                        key="form"
                        className="karma-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}
                    >
                        <form className="story-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleGenerate}>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="bikeName" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Name of Bike</label>
                                    <input id="bikeName" type="text" placeholder="e.g. Silver Streak" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.bikeName} onChange={handleInputChange} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="bikeColor" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Color of Bike</label>
                                    <input id="bikeColor" type="text" placeholder="e.g. Matte Black" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.bikeColor} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="bikeBrand" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Brand / Model</label>
                                <input id="bikeBrand" type="text" placeholder="e.g. Trek Marlin 5" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.bikeBrand} onChange={handleInputChange} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="yearPurchased" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Year Purchased</label>
                                    <input id="yearPurchased" type="text" placeholder="e.g. 2018" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.yearPurchased} onChange={handleInputChange} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="yearStolen" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Year of Theft</label>
                                    <input id="yearStolen" type="text" placeholder="e.g. 2023" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.yearStolen} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="neighborhood" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>City / Neighborhood</label>
                                    <input id="neighborhood" type="text" placeholder="e.g. North End, Boston" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.neighborhood} onChange={handleInputChange} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 45%' }}>
                                    <label htmlFor="milesRidden" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Approx. Miles Ridden <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(Optional)</span></label>
                                    <input id="milesRidden" type="text" placeholder="e.g. 4,500" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.milesRidden} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="lastLocation" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Last Known Location</label>
                                <input id="lastLocation" type="text" placeholder="e.g. Tied to the Stop Sign on 4th Ave" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} value={formData.lastLocation} onChange={handleInputChange} />
                            </div>

                            <button type="submit" className="btn btn--secondary" style={{ marginTop: '1rem', width: '100%' }}>Generate Obituaries</button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="templates"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="karma-grid"
                    >
                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 1</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>The Stoic Commuter</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t1Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t1Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t1Text, "The Stoic Commuter")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 2</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>The Passionate Carbon</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t2Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t2Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t2Text, "The Passionate Carbon")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 3</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>The Frankenbiker</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t3Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t3Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t3Text, "The Frankenbiker")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 4</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>Gone Too Soon</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t4Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t4Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t4Text, "Gone Too Soon")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 5</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>The Vigilante's Lament</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t5Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t5Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t5Text, "The Vigilante's Lament")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <motion.div className="karma-card" whileHover={{ y: -5 }}>
                            <div className="karma-card__badge">Template 6</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <GiScrollQuill size={32} color="var(--color-primary)" />
                                <h3 style={{ margin: 0, textShadow: 'none' }}>Minimalist Tribute</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                                "{t6Text}"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
                                <button className="btn btn--primary" style={{ flex: 1 }} onClick={() => handleCopy(t6Text)}>
                                    Copy to Clipboard
                                </button>
                                <button className="btn btn--secondary" style={{ flex: 1 }} onClick={() => handlePrint(t6Text, "Minimalist Tribute")}>
                                    Print Obituary
                                </button>
                            </div>
                        </motion.div>

                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button className="btn btn--secondary" onClick={() => setIsGenerated(false)}>Edit Details</button>
                        </div>

                        <div style={{ 
                            marginTop: '3rem', 
                            padding: '2.5rem 1rem', 
                            background: 'rgba(255, 255, 255, 0.03)', 
                            borderRadius: '16px', 
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <h3 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1.5rem' }}>Show Solidarity</h3>
                            <p style={{ margin: 0, color: 'var(--color-text-main)', maxWidth: '450px', lineHeight: 1.6, fontSize: '1rem' }}>
                                Light a digital LED bike light in honor of this stolen ride and all others who have met a tragic end at the hands of angle grinders.
                            </p>
                            
                            <motion.button 
                                onClick={() => {
                                    if (!isLightOn) {
                                        setIsLightOn(true);
                                        setLightCount(prev => prev + 1);
                                    }
                                }}
                                whileHover={{ scale: isLightOn ? 1 : 1.05 }}
                                whileTap={{ scale: isLightOn ? 1 : 0.95 }}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: isLightOn ? 'default' : 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem',
                                    outline: 'none',
                                    marginTop: '1rem'
                                }}
                            >
                                <motion.div 
                                    animate={isLightOn ? { 
                                        opacity: [1, 0.5, 1],
                                        boxShadow: ['0 0 15px #ff3333', '0 0 35px #ff3333', '0 0 15px #ff3333']
                                    } : {}}
                                    transition={isLightOn ? { repeat: Infinity, duration: 1.2 } : {}}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: isLightOn ? '#ff3333' : '#222',
                                        boxShadow: isLightOn ? '0 0 20px #ff3333' : 'inset 0 3px 6px rgba(0,0,0,0.8)',
                                        border: '4px solid #111',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: isLightOn ? '#ffffff' : '#444', opacity: 0.9 }} />
                                </motion.div>
                                <span style={{ color: isLightOn ? '#ff3333' : 'var(--color-text-muted)', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                    {isLightOn ? 'Beacon Lit' : 'Turn On Light'}
                                </span>
                            </motion.button>
                            
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', margin: 0, marginTop: '1rem', fontStyle: 'italic' }}>
                                <strong>{lightCount}</strong> riders are sharing their glow tonight.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCopiedModal && (
                    <motion.div 
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            left: '50%',
                            background: 'var(--color-primary)',
                            color: '#fff',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            zIndex: 1000,
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>✓</span> Obituary copied to clipboard!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ObituaryTemplates;
