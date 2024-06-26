import React from 'react';

export default function MilestoneCards() {
    return (
        <section className='page-section'>
            <div>
                <h2>Vedette's <span className='text-gradient spacer'>Milestones</span></h2>
                <p className='heading-caption'>The creation of Vedette was an entertaining ride. From calm waters to rough seas, Vedette and the team overcame all challenges with perseverance and dedication. This log serves as a record.</p>
            </div>
            <div className='milestones-parent-conainter'>
                <div className='milestone-container'>
                    <div className='milestone-card'>
                        <p className='milestone-value'>23</p>
                        <p className='milestone-name'>Weeks</p>
                    </div>
                    <div className='milestone-card'>
                        <p className='milestone-value'>5K</p>
                        <p className='milestone-name'>Lines Of Code</p>
                    </div>
                    <div className='milestone-card'>
                        <p className='milestone-value'>4</p>
                        <p className='milestone-name'>HQ Visits</p>
                    </div>
                </div>
                <div className='milestone-container'>
                    <div className='milestone-card'>
                        <p className='milestone-value'>11.5 <span className='milestone-name'>Hrs</span></p>
                        <p className='milestone-name'>Longest Meeting</p>
                    </div>
                    <div className='milestone-card'>
                        <p className='milestone-value'>47</p>
                        <p className='milestone-name'>Doodles Drawn</p>
                    </div>
                    <div className='milestone-card'>
                        <p className='milestone-value'>805</p>
                        <p className='milestone-name'>Cups Of Coffee</p>
                    </div>
                </div>
            </div>
        </section>

    )
}