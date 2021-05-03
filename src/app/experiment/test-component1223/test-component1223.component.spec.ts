import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1223Component } from './test-component1223.component';

describe('TestComponent1223Component', () => {
  let component: TestComponent1223Component;
  let fixture: ComponentFixture<TestComponent1223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
