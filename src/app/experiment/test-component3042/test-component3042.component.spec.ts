import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3042Component } from './test-component3042.component';

describe('TestComponent3042Component', () => {
  let component: TestComponent3042Component;
  let fixture: ComponentFixture<TestComponent3042Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3042Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
