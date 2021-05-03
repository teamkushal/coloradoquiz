import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3912Component } from './test-component3912.component';

describe('TestComponent3912Component', () => {
  let component: TestComponent3912Component;
  let fixture: ComponentFixture<TestComponent3912Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3912Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
