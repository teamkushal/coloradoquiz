import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3505Component } from './test-component3505.component';

describe('TestComponent3505Component', () => {
  let component: TestComponent3505Component;
  let fixture: ComponentFixture<TestComponent3505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
