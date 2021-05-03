import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3928Component } from './test-component3928.component';

describe('TestComponent3928Component', () => {
  let component: TestComponent3928Component;
  let fixture: ComponentFixture<TestComponent3928Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3928Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
