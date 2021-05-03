import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1719Component } from './test-component1719.component';

describe('TestComponent1719Component', () => {
  let component: TestComponent1719Component;
  let fixture: ComponentFixture<TestComponent1719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1719Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
