import React, {useState} from 'react'
import cn from 'classnames'
import arrowLeft from '../../../assets/images/icons/scroll_arrow_left.svg'
import arrowRight from '../../../assets/images/icons/cscroll_arrow_right.svg'
import s from './CalendarFilter.module.scss'


const CalendarFilter = () => {
    const days: string[] = ['Today', 'Back', 'Next']
    const periods: string[] = ['Month', 'Week', 'Work Week', 'Day', 'Agenda']

    const [checkedDay, setCheckedDay] = useState<string>(days[0])
    const [checkedPeriod, setCheckedPeriod] = useState<string>(periods[0])

    const checkDay = (day: string) => setCheckedDay(day)
    const checkPeriod = (period: string) => setCheckedPeriod(period)

    return (
        <div className={s.calendarFilter}>
            <div className={s.ownerManagerFilter}>
                <div className={s.filterBlock}>
                    <div className={s.owner}>
                        <span>Filter by Owner</span>
                        <div>Select Owner</div>
                    </div>
                    <div className={s.manager}>
                        <span>Filter by Manager</span>
                        <div>Select Manager</div>
                    </div>
                </div>
                <button>+ ADD REMINDER</button>
            </div>
            <div className={s.monthFilter}>
                <div className={s.daysWrapper}>
                    <div className={s.days}>
                        {
                            days.map(day =>
                                <div
                                    className={cn({[s.checked]: checkedDay === day})}
                                    onClick={() => checkDay(day)}
                                    key={day}>
                                    {day}
                                </div>)
                        }
                    </div>
                </div>
                <div className={s.monthWrapper}>
                    <img src={arrowLeft} alt=''/>
                    <span>October 2020</span>
                    <img src={arrowRight} alt=''/>
                </div>
                <div className={s.periodsWrapper}>
                    <div className={s.periods}>
                        {
                            periods.map(period =>
                                <div
                                    className={cn({[s.checked]: checkedPeriod === period})}
                                    onClick={() => checkPeriod(period)}
                                    key={period}
                                >
                                    {period}
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarFilter
