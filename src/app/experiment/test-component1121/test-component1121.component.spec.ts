import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1121Component } from './test-component1121.component';

describe('TestComponent1121Component', () => {
  let component: TestComponent1121Component;
  let fixture: ComponentFixture<TestComponent1121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
