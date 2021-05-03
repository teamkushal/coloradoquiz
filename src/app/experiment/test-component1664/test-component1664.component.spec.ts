import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1664Component } from './test-component1664.component';

describe('TestComponent1664Component', () => {
  let component: TestComponent1664Component;
  let fixture: ComponentFixture<TestComponent1664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1664Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
