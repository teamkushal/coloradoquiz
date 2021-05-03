import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1174Component } from './test-component1174.component';

describe('TestComponent1174Component', () => {
  let component: TestComponent1174Component;
  let fixture: ComponentFixture<TestComponent1174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
