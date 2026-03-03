import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, ShieldCheck, Star, TrendingUp, Users, Clock, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section style={{ padding: '6rem 2rem 4rem', backgroundColor: '#fff', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            {/* Left Column: Text */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem', border: '1px solid #e5e7eb', marginBottom: '2rem', backgroundColor: '#f9fafb' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#027bff' }}>The Future is Hybrid</span>
              </div>

              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#111827' }}>
                Hire <span style={{ background: 'linear-gradient(to right, #027bff, #28a745)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>AI-Powered</span> Remote Talent from the Philippines
              </h1>

              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '600px' }}>
                Skilled virtual staff + advanced AI training = <strong>exponential productivity gains</strong> and up to <strong>70% lower hiring costs</strong>. <br />
                Pre-certified VAs with AI badges and verified English.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/hire">
                  <Button size="lg" style={{ fontSize: '1.125rem', padding: '1.25rem 2.5rem', borderRadius: '2rem', backgroundColor: '#027bff', borderColor: '#027bff' }}>
                    Build Your Hybrid AI Team
                  </Button>
                </Link>
                <Link href="/hire">
                  <Button variant="outline" size="lg" style={{ fontSize: '1.125rem', padding: '1.25rem 2rem', borderRadius: '2rem', borderWidth: '0', color: '#4b5563' }}>
                    Browse Certified VAs Now →
                  </Button>
                </Link>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="#22c55e" /> 7-day money-back guarantee. Zero risk.
              </p>
            </div>

            {/* Right Column: Profile Card (Sarah J.) */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                aspectRatio: '3/4',
                maxWidth: '450px',
                margin: '0 auto'
              }}>
                <Image
                  src="/sarah-profile-filipino.png"
                  alt="Sarah J - AI Certified VA"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%)' }}></div>

                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#22c55e', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    <Zap size={12} fill="currentColor" /> AI CERTIFIED
                  </div>
                  <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.9)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    TOP 1% TALENT
                  </div>
                </div>

                <div style={{ position: 'absolute', bottom: '18rem', left: '2rem', color: 'white' }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Sarah J.</h2>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>AI Skills: Advanced</span>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#22c55e' }}>$15/hour</span>
                  </div>
                  <ul style={{ fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#22c55e" /> Claude, Grok, Gemini and ChatGPT</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#22c55e" /> Canva</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#22c55e" /> Heygen Video Editing</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#22c55e" /> Zapier Integration</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="#22c55e" /> Agentic AI workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hybrid Future Stats */}
        <section style={{ padding: '4rem 2rem', backgroundColor: '#f0fdf4' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>The Hybrid Future is Here</h2>
              <p style={{ color: '#4b5563', fontSize: '1.125rem' }}>By 2026, AI-augmented teams will outperform traditional teams by 300%.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <TrendingUp size={40} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827' }}>3.5x</h3>
                <p style={{ color: '#6b7280' }}>Productivity Increase</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <Clock size={40} color="#027bff" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827' }}>20h</h3>
                <p style={{ color: '#6b7280' }}>Weekly Time Saved per Exec</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <TrendingUp size={40} color="#fbbf24" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827' }}>76%</h3>
                <p style={{ color: '#6b7280' }}>Cost Savings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', color: '#111827', textAlign: 'center' }}>See the Exponential Difference</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '1rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#6b7280' }}>Traditional US Employee</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Salary (avg)</span>
                  <span style={{ fontWeight: 'bold' }}>$65,000/yr</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Benefits & Taxes</span>
                  <span style={{ fontWeight: 'bold' }}>+$15,000/yr</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Office/Equip</span>
                  <span style={{ fontWeight: 'bold' }}>+$8,000/yr</span>
                </div>
                <hr style={{ margin: '1.5rem 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold' }}>
                  <span>Total Cost</span>
                  <span>$88,000/yr</span>
                </div>
              </div>

              <div style={{ padding: '2rem', backgroundColor: '#f0fdf4', borderRadius: '1rem', border: '2px solid #22c55e', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1rem', right: '2rem', backgroundColor: '#22c55e', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '0.875rem' }}>RECOMMENDED</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Hybrid AI-Powered VA</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Salary (Expert)</span>
                  <span style={{ fontWeight: 'bold' }}>$30,000/yr</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>AI Training & Certification</span>
                  <span style={{ fontWeight: 'bold' }}>FREE</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Recruiting Fees</span>
                  <span style={{ fontWeight: 'bold' }}>$0</span>
                </div>
                <hr style={{ margin: '1.5rem 0', borderColor: '#22c55e' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', color: '#22c55e' }}>
                  <span>Total Cost</span>
                  <span>$30,000/yr</span>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center', color: '#15803d', fontWeight: '600', fontSize: '0.875rem' }}>
                  Save $58,000/year per role
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Talent Teasers */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', color: '#111827', textAlign: 'center' }}>Meet Your Future Hybrid Team</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { name: 'Mark D.', industry: 'Real Estate, Legal', image: '/mark-profile.png', tools: 'ChatGPT, Canva Pro, Heygen' },
                { name: 'Elena R.', industry: 'E-Commerce, Retail', image: '/elena-profile.png', tools: 'Midjourney, Jasper, Klaviyo' },
                { name: 'Chris T.', industry: 'SaaS, Tech Startups', image: '/chris-profile.png', tools: 'Gong, Salesforce Einstein, Zapier' }
              ].map((va) => (
                <div key={va.name} style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                      <Image src={va.image} alt={va.name} width={60} height={60} style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold' }}>{va.name}</h4>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{va.industry}</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#22c55e', backgroundColor: '#f0fdf4', padding: '0.25rem 0.5rem', borderRadius: '0.5rem' }}>AI CERTIFIED</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1.5rem' }}>
                    <span style={{ fontWeight: '600' }}>AI Expertise:</span> {va.tools}
                  </p>
                  <Link href="/hire" style={{ color: '#027bff', fontWeight: '600', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    View Profile <ArrowRight size={14} />
                  </Link>
                </div>
              ))}

              <div style={{ backgroundColor: '#eff6ff', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '2px dashed #bfdbfe' }}>
                <Users size={32} color="#027bff" />
                <h4 style={{ fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>500+ More VAs</h4>
                <Link href="/hire" style={{ marginTop: '0.5rem' }}>
                  <Button variant="outline" size="sm">Browse Market</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', color: '#111827' }}>How to Build Your Hybrid Team</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
              {[1, 2, 3].map((step, i) => (
                <div key={step} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#027bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{step}</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{['Browse & Filter', 'Interview', 'Onboard'][i]}</h3>
                    <p style={{ color: '#6b7280' }}>
                      {['Use our AI-search to find VAs with specific tool stacks (e.g. "Klavyio + Midjourney").',
                        'Chat directly with candidates. No middleman delays.',
                        'Start working instantly. We handle payroll and compliance.'][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#111827', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to future-proof your workforce?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#9ca3af' }}>
              Join 500+ forward-thinking companies building hybrid AI teams.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link href="/hire">
                <Button size="lg" style={{ fontSize: '1.125rem', padding: '1.25rem 2rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: 'white' }}>
                  Build Your Team
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" style={{ fontSize: '1.125rem', padding: '1.25rem 2rem', color: 'white', borderColor: 'white' }}>
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
