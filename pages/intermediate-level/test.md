- 3- `<span style="color:#00b050">`touchmove :
  در زمان حرکت انگشت (یا قلم) بر روی صفحه نمایش رخ می‌دهد.
  این رویداد تقریبا معادل رویداد `<span style="color:#0070c0">`mousemove است.
- 4- `<span style="color:#00b050">`touchcancel :
  در صورتی که در زمان لمس صفحه نمایش وقفه‌ای رخ دهد، این رویداد تولید می‌شود. البته رفتار این رویداد در مرورگرها و دستگاه‌های مختلف تا حدودی متفاوت است. مثلاً در زمان خروج انگشت از صفحه نمایش ممکن است این رویداد رخ دهد. و یا در صورت لمس همزمان با چند انگشت و یا در صورت اجرای تابع alert برای نمایش یک پیام در زمان لمس صفحه ممکن است این رویداد رخ دهد.

```javascript
const div = document.querySelector('div');

div.addEventListener('click', handler);
div.addEventListener('touchstart', handler);
div.addEventListener('touchmove', handler);          
div.addEventListener('touchend', handler);
div.addEventListener('touchcancel', handler);

function handler(event) {
	const p = document.querySelector('p');
	p.textContent += event.type + ' ';
}
```

نکات کد بالا :
1 - با هر بار رویداد touchstart و touchend یکبار رویداد click رخ میدهد.
