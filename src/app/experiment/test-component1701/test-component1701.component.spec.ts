import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1701Component } from './test-component1701.component';

describe('TestComponent1701Component', () => {
  let component: TestComponent1701Component;
  let fixture: ComponentFixture<TestComponent1701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1701Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
