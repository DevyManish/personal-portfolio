
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			dropShadow: {
				glow: [
					'0 0 4px rgba(59, 130, 246, 0.5)',
					'0 0 8px rgba(59, 130, 246, 0.3)'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				'color-1': 'hsl(var(--color-1))',
				'color-2': 'hsl(var(--color-2))',
				'color-3': 'hsl(var(--color-3))',
				'color-4': 'hsl(var(--color-4))',
				'color-5': 'hsl(var(--color-5))'
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
				'glitch-after': 'glitch var(--after-duration) infinite linear alternate-reverse',
				'glitch-before': 'glitch var(--before-duration) infinite linear alternate-reverse',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shine: 'shine 5s linear infinite',
				rainbow: 'rainbow var(--speed, 2s) infinite linear'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-15deg)' },
					'50%': { transform: 'rotate(15deg)' },
				},
				marquee: {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				marquee2: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0%)'
					}
				},
				'aurora-border': {
					'0%, 100%': {
						borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
					},
					'25%': {
						borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
					},
					'50%': {
						borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
					},
					'75%': {
						borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
					}
				},
				'aurora-1': {
					'0%, 100%': {
						top: '0',
						right: '0'
					},
					'50%': {
						top: '50%',
						right: '25%'
					},
					'75%': {
						top: '25%',
						right: '50%'
					}
				},
				'aurora-2': {
					'0%, 100%': {
						top: '0',
						left: '0'
					},
					'60%': {
						top: '75%',
						left: '25%'
					},
					'85%': {
						top: '50%',
						left: '50%'
					}
				},
				'aurora-3': {
					'0%, 100%': {
						bottom: '0',
						left: '0'
					},
					'40%': {
						bottom: '50%',
						left: '25%'
					},
					'65%': {
						bottom: '25%',
						left: '50%'
					}
				},
				'aurora-4': {
					'0%, 100%': {
						bottom: '0',
						right: '0'
					},
					'50%': {
						bottom: '25%',
						right: '40%'
					},
					'90%': {
						bottom: '50%',
						right: '25%'
					}
				},
				glitch: {
					'0%': {
						'clip-path': 'inset(20% 0 50% 0)'
					},
					'5%': {
						'clip-path': 'inset(10% 0 60% 0)'
					},
					'10%': {
						'clip-path': 'inset(15% 0 55% 0)'
					},
					'15%': {
						'clip-path': 'inset(25% 0 35% 0)'
					},
					'20%': {
						'clip-path': 'inset(30% 0 40% 0)'
					},
					'25%': {
						'clip-path': 'inset(40% 0 20% 0)'
					},
					'30%': {
						'clip-path': 'inset(10% 0 60% 0)'
					},
					'35%': {
						'clip-path': 'inset(15% 0 55% 0)'
					},
					'40%': {
						'clip-path': 'inset(25% 0 35% 0)'
					},
					'45%': {
						'clip-path': 'inset(30% 0 40% 0)'
					},
					'50%': {
						'clip-path': 'inset(20% 0 50% 0)'
					},
					'55%': {
						'clip-path': 'inset(10% 0 60% 0)'
					},
					'60%': {
						'clip-path': 'inset(15% 0 55% 0)'
					},
					'65%': {
						'clip-path': 'inset(25% 0 35% 0)'
					},
					'70%': {
						'clip-path': 'inset(30% 0 40% 0)'
					},
					'75%': {
						'clip-path': 'inset(40% 0 20% 0)'
					},
					'80%': {
						'clip-path': 'inset(20% 0 50% 0)'
					},
					'85%': {
						'clip-path': 'inset(10% 0 60% 0)'
					},
					'90%': {
						'clip-path': 'inset(15% 0 55% 0)'
					},
					'95%': {
						'clip-path': 'inset(25% 0 35% 0)'
					},
					'100%': {
						'clip-path': 'inset(30% 0 40% 0)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				shine: {
					'0%': {
						'background-position': '100%'
					},
					'100%': {
						'background-position': '-100%'
					}
				},
				rainbow: {
					'0%': {
						'background-position': '0%'
					},
					'100%': {
						'background-position': '200%'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
