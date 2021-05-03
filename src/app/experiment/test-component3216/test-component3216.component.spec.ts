import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3216Component } from './test-component3216.component';

describe('TestComponent3216Component', () => {
  let component: TestComponent3216Component;
  let fixture: ComponentFixture<TestComponent3216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
