import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1506Component } from './test-component1506.component';

describe('TestComponent1506Component', () => {
  let component: TestComponent1506Component;
  let fixture: ComponentFixture<TestComponent1506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1506Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
