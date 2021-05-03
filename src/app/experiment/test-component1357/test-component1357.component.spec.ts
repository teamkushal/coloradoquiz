import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1357Component } from './test-component1357.component';

describe('TestComponent1357Component', () => {
  let component: TestComponent1357Component;
  let fixture: ComponentFixture<TestComponent1357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
