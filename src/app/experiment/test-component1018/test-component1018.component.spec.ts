import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1018Component } from './test-component1018.component';

describe('TestComponent1018Component', () => {
  let component: TestComponent1018Component;
  let fixture: ComponentFixture<TestComponent1018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
