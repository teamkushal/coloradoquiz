import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3753Component } from './test-component3753.component';

describe('TestComponent3753Component', () => {
  let component: TestComponent3753Component;
  let fixture: ComponentFixture<TestComponent3753Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3753Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
