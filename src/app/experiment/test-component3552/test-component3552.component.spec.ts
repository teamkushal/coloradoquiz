import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3552Component } from './test-component3552.component';

describe('TestComponent3552Component', () => {
  let component: TestComponent3552Component;
  let fixture: ComponentFixture<TestComponent3552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3552Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
