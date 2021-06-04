function theme() {
	const toggleThemeSize1 = document.querySelector('.ThemeSize1')
	console.log(toggleThemeSize1)

	toggleThemeSize1.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'size1')
	})

	const toggleThemeSize2 = document.querySelector('.ThemeSize2')
	console.log(toggleThemeSize2)

	toggleThemeSize2.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'size2')
	})

	const toggleThemeSize3 = document.querySelector('.ThemeSize3')
	console.log(toggleThemeSize3)

	toggleThemeSize3.addEventListener('click', () => {
		
		document.documentElement.setAttribute('data-theme', 'size3')
	})
}

theme()