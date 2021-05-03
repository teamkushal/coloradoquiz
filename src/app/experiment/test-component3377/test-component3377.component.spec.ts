import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3377Component } from './test-component3377.component';

describe('TestComponent3377Component', () => {
  let component: TestComponent3377Component;
  let fixture: ComponentFixture<TestComponent3377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
