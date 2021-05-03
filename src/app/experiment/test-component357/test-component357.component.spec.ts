import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent357Component } from './test-component357.component';

describe('TestComponent357Component', () => {
  let component: TestComponent357Component;
  let fixture: ComponentFixture<TestComponent357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
