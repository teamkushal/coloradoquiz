import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3778Component } from './test-component3778.component';

describe('TestComponent3778Component', () => {
  let component: TestComponent3778Component;
  let fixture: ComponentFixture<TestComponent3778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3778Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
