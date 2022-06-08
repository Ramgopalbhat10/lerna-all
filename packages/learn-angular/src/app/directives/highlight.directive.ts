import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private borderApplied: boolean = false;

  constructor() {}

  @HostBinding('style.border') border: string | undefined;

  @HostListener('click') onClick = () => {
    this.borderApplied
      ? (this.border = '2px solid gray')
      : (this.border = '5px solid gray');
    this.borderApplied = !this.borderApplied;
  };
}
