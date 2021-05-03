import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1444Component } from './test-component1444.component';

describe('TestComponent1444Component', () => {
  let component: TestComponent1444Component;
  let fixture: ComponentFixture<TestComponent1444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1444Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
