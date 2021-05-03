import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1398Component } from './test-component1398.component';

describe('TestComponent1398Component', () => {
  let component: TestComponent1398Component;
  let fixture: ComponentFixture<TestComponent1398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
