import React from 'react';
import Image from 'next/image';
import { DiJsBadge, DiReact, DiNodejsSmall, DiSass } from 'react-icons/di'
import profileImg from '../public/user-logo.png'

const ProfileCard = () => {
    return (
        <div className="Profile">
            {new Array(4).fill(0).map(el => {
                return (
                    <div className="card-box" key={el}>
                        <div className="card-header">
                            <div className="card-header-img" />
                            <div className="card-header-content" />
                        </div>
                        <div className="card-body">
                            <div className="card-body-img">
                                <Image
                                    src={profileImg}
                                    width={60}
                                    height={60}
                                    alt="missing"
                                    priority
                                />
                            </div>
                            <h2 style={{ margin: 0 }}>Card-Title</h2>
                            <p>Card content</p>
                        </div>
                        <div className="card-footer">
                            <DiSass fontSize="1.5rem" />
                            <DiReact fontSize="1.5rem" />
                            <DiJsBadge fontSize="1.5rem" />
                            <DiNodejsSmall fontSize="1.5rem" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ProfileCard;