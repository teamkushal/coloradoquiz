import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3476Component } from './test-component3476.component';

describe('TestComponent3476Component', () => {
  let component: TestComponent3476Component;
  let fixture: ComponentFixture<TestComponent3476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3476Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
