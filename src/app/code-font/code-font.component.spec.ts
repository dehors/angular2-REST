import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFontComponent } from './code-font.component';

describe('CodeFontComponent', () => {
  let component: CodeFontComponent;
  let fixture: ComponentFixture<CodeFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
