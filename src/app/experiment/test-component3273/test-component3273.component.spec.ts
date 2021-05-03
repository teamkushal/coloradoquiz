import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3273Component } from './test-component3273.component';

describe('TestComponent3273Component', () => {
  let component: TestComponent3273Component;
  let fixture: ComponentFixture<TestComponent3273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
