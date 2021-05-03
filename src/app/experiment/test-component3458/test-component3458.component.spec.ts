import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3458Component } from './test-component3458.component';

describe('TestComponent3458Component', () => {
  let component: TestComponent3458Component;
  let fixture: ComponentFixture<TestComponent3458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3458Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
