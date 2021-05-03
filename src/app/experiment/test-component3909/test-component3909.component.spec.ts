import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3909Component } from './test-component3909.component';

describe('TestComponent3909Component', () => {
  let component: TestComponent3909Component;
  let fixture: ComponentFixture<TestComponent3909Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3909Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
