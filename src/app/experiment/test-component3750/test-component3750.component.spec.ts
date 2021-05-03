import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3750Component } from './test-component3750.component';

describe('TestComponent3750Component', () => {
  let component: TestComponent3750Component;
  let fixture: ComponentFixture<TestComponent3750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3750Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
