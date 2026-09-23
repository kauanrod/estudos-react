import './header.css';

interface HeaderProps {
    title?: string;
}

export function Header({ title="Estudos React + TypeScript" }: HeaderProps) {
    return (
        <header className='header'>
            <h1 className='header-title'>{title}</h1>
            <hr/>
        </header>
    )
}