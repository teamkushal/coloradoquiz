import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3783Component } from './test-component3783.component';

describe('TestComponent3783Component', () => {
  let component: TestComponent3783Component;
  let fixture: ComponentFixture<TestComponent3783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3783Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
