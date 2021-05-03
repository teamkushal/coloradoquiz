import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1289Component } from './test-component1289.component';

describe('TestComponent1289Component', () => {
  let component: TestComponent1289Component;
  let fixture: ComponentFixture<TestComponent1289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1289Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
