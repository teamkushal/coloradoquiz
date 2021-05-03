import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1390Component } from './test-component1390.component';

describe('TestComponent1390Component', () => {
  let component: TestComponent1390Component;
  let fixture: ComponentFixture<TestComponent1390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
