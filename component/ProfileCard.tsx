import React from 'react';
import Image from 'next/image';
import { DiJsBadge, DiReact, DiNodejsSmall, DiSass } from 'react-icons/di'
const ProfileCard = () => {
    return (
        <div className="Profile">
            {new Array(4).fill(0).map(el => {
                return <div className="card-box">
                    <div className="card-header">
                        <div className="card-header-img" />
                        <div className="card-header-content" />
                    </div>
                    <div className="card-body">
                        <Image
                            width={500}
                            height={500}
                            src="/assets/user-logo.png"
                            alt="missing"
                        />
                        <h2>Card-Title</h2>
                        <p>Card content</p>
                    </div>
                    <div className="card-footer">
                        <DiSass fontSize="1.5rem" />
                        <DiReact fontSize="1.5rem" />
                        <DiJsBadge fontSize="1.5rem" />
                        <DiNodejsSmall fontSize="1.5rem" />
                    </div>
                </div>
            })}
        </div>
    )
}
export default ProfileCard;