import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3231Component } from './test-component3231.component';

describe('TestComponent3231Component', () => {
  let component: TestComponent3231Component;
  let fixture: ComponentFixture<TestComponent3231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
