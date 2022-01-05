import React, { useEffect, useRef } from 'react';

const PerspectiveCube = () => {
    const [isToggle, setToggle] = React.useState<boolean>(true)
    const tabFirst = useRef<any>(null)
    const tabSecond = useRef<any>(null)
    const tabThird = useRef<any>(null)

    const toggle = (cube: string, time: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(cube)
            }, time)
        })
    }
    useEffect(() => {
        toggle('tab-top', 2000).then((res: any) => {
            tabFirst.current.click()
            return toggle('tab-front', 2000);
        }).then((res: any) => {
            tabSecond.current.click()
            return toggle('tab-bottom', 2000);
        }).then((res: any) => {
            tabThird.current.click()
            setToggle(!isToggle)
        }).catch(err => {
           console.log(err)
        })
        return () => setToggle(true)
    }, [isToggle])
    return (
        <div className="Cube">
            <div className="Cube-tab">
                {/* <label htmlFor="tab-top">第一張</label>
                <label htmlFor="tab-front">第二張</label>
                <label htmlFor="tab-bottom">第三張</label> */}
            </div>
            <input type="radio" name="tabs" id="tab-top" ref={tabFirst} />
            <input type="radio" name="tabs" id="tab-front" ref={tabSecond} />
            <input type="radio" name="tabs" id="tab-bottom" ref={tabThird} />
            <div className="Cube-box">
                <div className="Cube-content">
                    <span>First</span>
                </div>
                <div className="Cube-content">
                    <span>Second</span>
                </div>
                <div className="Cube-content">
                    <span>Third</span>
                </div>
            </div>
        </div>
    )
}

export default PerspectiveCube;