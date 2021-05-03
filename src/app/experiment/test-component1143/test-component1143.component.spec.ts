import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1143Component } from './test-component1143.component';

describe('TestComponent1143Component', () => {
  let component: TestComponent1143Component;
  let fixture: ComponentFixture<TestComponent1143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
