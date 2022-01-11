import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <Link href="/" passHref={false}>
                <a>返回</a>
            </Link>
        </div>
    );
};

export default About;